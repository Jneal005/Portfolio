
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">Jane Doe</span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a href="#skills" className="transition-colors hover:text-foreground/80 text-foreground/60">Skills</a>
            <a href="#experience" className="transition-colors hover:text-foreground/80 text-foreground/60">Experience</a>
            <a href="#projects" className="transition-colors hover:text-foreground/80 text-foreground/60">Projects</a>
            <a href="#contact" className="transition-colors hover:text-foreground/80 text-foreground/60">Contact</a>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <Button asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
