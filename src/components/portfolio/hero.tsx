
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="container grid lg:grid-cols-2 gap-10 items-center py-20 md:py-32">
      <div className="space-y-4">
        <p className="font-mono text-primary">Hi, my name is</p>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">Jane Doe.</h1>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-muted-foreground">I build things for the web.</h2>
        <p className="max-w-xl text-muted-foreground">
          I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
        </p>
        <div className="flex items-center gap-4 pt-4">
          <Button size="lg" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer"><Github className="h-5 w-5" /></a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer"><Linkedin className="h-5 w-5" /></a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer"><Twitter className="h-5 w-5" /></a>
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="relative w-full max-w-md mx-auto">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-3xl opacity-30"></div>
          <img
            src="https://placehold.co/500x500.png"
            alt="Jane Doe"
            data-ai-hint="professional headshot"
            className="relative w-full h-full object-cover rounded-full border-4 border-background"
          />
        </div>
      </div>
    </section>
  );
}
