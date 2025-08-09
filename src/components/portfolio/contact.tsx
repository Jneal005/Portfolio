
'use client';
import { Button } from '@/components/ui/button';

export function Contact() {
  return (
    <section id="contact" className="container text-center py-20 md:py-32">
       <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get In Touch</h2>
       <p className="max-w-xl mx-auto mt-4 text-muted-foreground mb-8">
         I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
       </p>
       <Button size="lg" asChild>
         <a href="mailto:example@example.com">Say Hello</a>
       </Button>
    </section>
  );
}
