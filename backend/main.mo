import Nat "mo:core/Nat";
import Text "mo:core/Text";
import Array "mo:core/Array";

actor {
  type RevelationType = {
    #Meccan;
    #Medinan;
  };

  type Surah = {
    number : Nat;
    arabicName : Text;
    englishTransliteration : Text;
    englishTranslation : Text;
    verseCount : Nat;
    revelationType : RevelationType;
  };

  type Verse = {
    surahNumber : Nat;
    verseNumber : Nat;
    arabicText : Text;
    englishTranslation : Text;
  };

  let surahs : [Surah] = [
    {
      number = 1;
      arabicName = "الفاتحة";
      englishTransliteration = "Al-Fatiha";
      englishTranslation = "The Opening";
      verseCount = 7;
      revelationType = #Meccan;
    },
  ];

  let verses : [Verse] = [
    {
      surahNumber = 1;
      verseNumber = 1;
      arabicText = "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ";
      englishTranslation = "In the name of Allah, the Most Gracious, the Most Merciful.";
    },
  ];

  public query ({ caller }) func getSurahs() : async [Surah] {
    surahs;
  };

  public query ({ caller }) func getVersesBySurah(surahNumber : Nat) : async [Verse] {
    verses.filter(
      func(verse) {
        verse.surahNumber == surahNumber;
      }
    );
  };
};
