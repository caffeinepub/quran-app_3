import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Verse } from '../backend';

interface VerseDisplayProps {
  verse: Verse;
}

export default function VerseDisplay({ verse }: VerseDisplayProps) {
  return (
    <Card className="border-border/40">
      <CardContent className="p-6 space-y-6">
        {/* Verse Number Badge */}
        <div className="flex justify-end">
          <Badge variant="outline" className="text-sm font-medium">
            Verse {Number(verse.verseNumber)}
          </Badge>
        </div>

        {/* Arabic Text */}
        <div className="space-y-2">
          <p
            className="text-3xl leading-loose font-arabic text-foreground"
            dir="rtl"
            lang="ar"
          >
            {verse.arabicText}
          </p>
        </div>

        {/* English Translation */}
        <div className="pt-4 border-t border-border/40">
          <p className="text-base leading-relaxed text-foreground/90">
            {verse.englishTranslation}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
