import { useGetSurahs } from '../hooks/useQueries';
import SurahCard from '../components/SurahCard';
import { BookOpen, Loader2 } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function HomePage() {
  const { data: surahs, isLoading, error } = useGetSurahs();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-primary/10">
              <BookOpen className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-foreground">القرآن الكريم</h1>
              <p className="text-sm text-muted-foreground">The Noble Quran</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-xl font-medium text-foreground mb-2">Surahs</h2>
            <p className="text-muted-foreground">
              Select a surah to begin reading
            </p>
          </div>

          {isLoading && (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          )}

          {error && (
            <div className="text-center py-16">
              <p className="text-destructive">Failed to load surahs. Please try again.</p>
            </div>
          )}

          {surahs && surahs.length > 0 && (
            <ScrollArea className="h-[calc(100vh-280px)]">
              <div className="space-y-3 pr-4">
                {surahs.map((surah) => (
                  <SurahCard key={Number(surah.number)} surah={surah} />
                ))}
              </div>
            </ScrollArea>
          )}

          {surahs && surahs.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No surahs available.</p>
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
