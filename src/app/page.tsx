
import { Header } from '@/components/portfolio/header';
import { Hero } from '@/components/portfolio/hero';
import { Skills } from '@/components/portfolio/skills';
import { Experience } from '@/components/portfolio/experience';
import { Projects } from '@/components/portfolio/projects';
import { Contact } from '@/components/portfolio/contact';
import { Footer } from '@/components/portfolio/footer';

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
