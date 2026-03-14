import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Surah, Verse } from '../backend';

export function useGetSurahs() {
  const { actor, isFetching } = useActor();

  return useQuery<Surah[]>({
    queryKey: ['surahs'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getSurahs();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetVersesBySurah(surahNumber: number) {
  const { actor, isFetching } = useActor();

  return useQuery<Verse[]>({
    queryKey: ['verses', surahNumber],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getVersesBySurah(BigInt(surahNumber));
    },
    enabled: !!actor && !isFetching && surahNumber > 0,
  });
}
