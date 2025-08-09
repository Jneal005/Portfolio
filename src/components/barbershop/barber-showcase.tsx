
'use client';

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calendar } from 'lucide-react';

const barbers = [
  {
    name: 'Alex "The Razor" Russo',
    specialty: 'Classic Cuts & Hot Shaves',
    bio: 'With over 10 years of experience, Alex brings precision and artistry to every haircut. He believes a great haircut is the cornerstone of a great day.',
    workImages: [
      { url: 'https://placehold.co/400x400.png', hint: 'mens haircut' },
      { url: 'https://placehold.co/400x400.png', hint: 'beard trim' },
      { url: 'https://placehold.co/400x400.png', hint: 'shave' },
    ],
  },
  {
    name: 'Bella "The Fade" Rodriguez',
    specialty: 'Modern Fades & Designs',
    bio: 'Bella is a master of the modern fade, able to create sharp lines and intricate designs. She stays on top of the latest trends to keep you looking fresh.',
    workImages: [
      { url: 'https://placehold.co/400x400.png', hint: 'hair design' },
      { url: 'https://placehold.co/400x400.png', hint: 'skin fade' },
      { url: 'https://placehold.co/400x400.png', hint: 'taper fade' },
    ],
  },
  {
    name: 'Charlie "The Sculptor" Chen',
    specialty: 'Creative Styling & Long Hair',
    bio: "Charlie sees hair as a canvas. Whether it's a bold new style or maintaining long locks, he has the vision and skill to bring your hair goals to life.",
    workImages: [
      { url: 'https://placehold.co/400x400.png', hint: 'long hair men' },
      { url: 'https://placehold.co/400x400.png', hint: 'creative haircut' },
      { url: 'https://placehold.co/400x400.png', hint: 'styled hair' },
    ],
  },
];

export function BarberShowcase() {
  return (
    <section className="container mx-auto py-12 px-4 md:py-20" style={{ perspective: '1000px' }}>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full h-full min-h-[500px] hidden md:block" style={{ transform: 'rotateY(-10deg) scale(0.9)', transformStyle: 'preserve-3d' }}>
           <Image
            src="https://placehold.co/600x800.png"
            alt="Barber chair"
            data-ai-hint="barber chair"
            fill
            className="object-contain drop-shadow-2xl"
          />
        </div>
        <div className="w-full">
          <Carousel className="w-full">
            <CarouselContent>
              {barbers.map((barber) => (
                <CarouselItem key={barber.name} style={{ transformStyle: 'preserve-3d' }}>
                  <Card className="flex flex-col h-full bg-card/80 backdrop-blur-sm border-white/10 shadow-2xl transition-all duration-300 hover:shadow-primary/40" style={{ transform: 'rotateY(5deg)'}}>
                    <CardHeader>
                      <CardTitle>{barber.name}</CardTitle>
                      <CardDescription>
                        <Badge variant="secondary">{barber.specialty}</Badge>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 space-y-6">
                      <p className="text-muted-foreground">{barber.bio}</p>
                      <div>
                        <h4 className="font-semibold mb-2">Their Work:</h4>
                        <div className="grid grid-cols-3 gap-2">
                          {barber.workImages.map((img, index) => (
                             <Image
                              key={index}
                              src={img.url}
                              alt={`${barber.name}'s work ${index + 1}`}
                              data-ai-hint={img.hint}
                              width={150}
                              height={150}
                              className="rounded-lg object-cover aspect-square border-2 border-transparent hover:border-primary transition-all"
                            />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full">
                            <Calendar className="mr-2 h-4 w-4" />
                            Book with {barber.name.split(' ')[0]}
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Book an Appointment</DialogTitle>
                            <DialogDescription>
                              Select a date and time to book your appointment with {barber.name}.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="py-8">
                            <p className="text-center">Booking form will go here.</p>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
