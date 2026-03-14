import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Verse {
    surahNumber: bigint;
    verseNumber: bigint;
    arabicText: string;
    englishTranslation: string;
}
export interface Surah {
    verseCount: bigint;
    revelationType: RevelationType;
    arabicName: string;
    number: bigint;
    englishTransliteration: string;
    englishTranslation: string;
}
export enum RevelationType {
    Meccan = "Meccan",
    Medinan = "Medinan"
}
export interface backendInterface {
    getSurahs(): Promise<Array<Surah>>;
    getVersesBySurah(surahNumber: bigint): Promise<Array<Verse>>;
}
