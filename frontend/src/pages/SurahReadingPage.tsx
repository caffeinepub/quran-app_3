import { useParams, useNavigate } from '@tanstack/react-router';
import { useGetSurahs, useGetVersesBySurah } from '../hooks/useQueries';
import VerseDisplay from '../components/VerseDisplay';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useMemo } from 'react';

export default function SurahReadingPage() {
  const { surahNumber } = useParams({ strict: false });
  const navigate = useNavigate();
  const surahNum = Number(surahNumber);

  const { data: surahs } = useGetSurahs();
  const { data: verses, isLoading, error } = useGetVersesBySurah(surahNum);

  const surah = useMemo(() => {
    return surahs?.find((s) => Number(s.number) === surahNum);
  }, [surahs, surahNum]);

  const handleBack = () => {
    navigate({ to: '/' });
  };

  if (!surahNum || isNaN(surahNum)) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-destructive mb-4">Invalid surah number</p>
          <Button onClick={handleBack} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Button
            onClick={handleBack}
            variant="ghost"
            size="sm"
            className="mb-3"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Surahs
          </Button>

          {surah && (
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary font-semibold">
                  {Number(surah.number)}
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl font-arabic text-foreground" dir="rtl">
                    {surah.arabicName}
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    {surah.englishTransliteration} • {surah.englishTranslation}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Badge variant="secondary" className="font-medium">
                  {surah.revelationType === 'Meccan' ? 'Meccan' : 'Medinan'}
                </Badge>
                <span className="text-muted-foreground">
                  {Number(surah.verseCount)} {Number(surah.verseCount) === 1 ? 'verse' : 'verses'}
                </span>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {isLoading && (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          )}

          {error && (
            <div className="text-center py-16">
              <p className="text-destructive">Failed to load verses. Please try again.</p>
            </div>
          )}

          {verses && verses.length > 0 && (
            <ScrollArea className="h-[calc(100vh-280px)]">
              <div className="space-y-8 pr-4">
                {verses.map((verse) => (
                  <VerseDisplay key={Number(verse.verseNumber)} verse={verse} />
                ))}
              </div>
            </ScrollArea>
          )}

          {verses && verses.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No verses available for this surah.</p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} • Built with love using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== 'undefined' ? window.location.hostname : 'quran-app'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
