# Specification

## Summary
**Goal:** Create a Quran reading application that displays all 114 surahs and allows users to read verses in Arabic with English translations.

**Planned changes:**
- Implement backend data models for surahs (with metadata: number, Arabic name, transliteration, translation, verse count, revelation type) and verses (with surah reference, verse number, Arabic text, English translation)
- Create backend query functions to retrieve all surahs and verses by surah number
- Build a home page listing all 114 surahs with their metadata (number, Arabic name, English name, verse count, revelation type)
- Make each surah clickable to navigate to a reading page
- Create a surah reading page displaying the surah title, metadata, and all verses with verse numbers, Arabic text (right-to-left), and English translations
- Style with elegant typography, warm earth tones or deep greens with cream/off-white backgrounds, and proper Arabic font rendering with RTL support

**User-visible outcome:** Users can browse a list of all Quran surahs on the home page and click any surah to read its verses with Arabic text and English translations in a clean, respectful interface.
