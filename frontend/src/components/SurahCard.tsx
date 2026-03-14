import { useNavigate } from '@tanstack/react-router';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronRight } from 'lucide-react';
import type { Surah } from '../backend';

interface SurahCardProps {
  surah: Surah;
}

export default function SurahCard({ surah }: SurahCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate({ to: `/surah/${Number(surah.number)}` });
  };

  return (
    <Card
      className="cursor-pointer transition-all hover:shadow-md hover:border-primary/30 group"
      onClick={handleClick}
    >
      <CardContent className="p-5">
        <div className="flex items-center gap-4">
          {/* Surah Number */}
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary font-semibold shrink-0 group-hover:bg-primary/20 transition-colors">
            {Number(surah.number)}
          </div>

          {/* Surah Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-3 mb-1">
              <h3 className="text-xl font-arabic text-foreground" dir="rtl">
                {surah.arabicName}
              </h3>
            </div>
            <p className="text-sm font-medium text-foreground/90 mb-1">
              {surah.englishTransliteration}
            </p>
            <p className="text-sm text-muted-foreground">
              {surah.englishTranslation}
            </p>
          </div>

          {/* Metadata */}
          <div className="flex flex-col items-end gap-2 shrink-0">
            <Badge variant="secondary" className="text-xs">
              {surah.revelationType === 'Meccan' ? 'Meccan' : 'Medinan'}
            </Badge>
            <span className="text-xs text-muted-foreground">
              {Number(surah.verseCount)} {Number(surah.verseCount) === 1 ? 'verse' : 'verses'}
            </span>
          </div>

          {/* Arrow Icon */}
          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
        </div>
      </CardContent>
    </Card>
  );
}
