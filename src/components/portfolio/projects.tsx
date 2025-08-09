
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const projectsData = [
  {
    title: "Project Alpha",
    description: "A web application that helps teams collaborate and manage their projects efficiently. Features real-time updates and a clean, intuitive interface.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "dashboard analytics",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Project Beta",
    description: "An e-commerce platform with a focus on user experience and performance. Includes features like product search, reviews, and a secure checkout process.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "online store",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Project Gamma",
    description: "A personal blog and portfolio site built with a headless CMS for easy content management. Optimized for SEO and fast loading times.",
    tags: ["Gatsby", "GraphQL", "Contentful", "Styled Components"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "blog article",
    githubUrl: "#",
    liveUrl: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="container py-20 md:py-24 bg-muted/40 rounded-lg">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">My Projects</h2>
        <p className="max-w-xl mx-auto mt-4 text-muted-foreground">
          A selection of projects I've worked on.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <Card key={project.title} className="flex flex-col">
            <CardHeader>
              <div className="aspect-[3/2] mb-4">
                 <Image src={project.imageUrl} alt={project.title} width={600} height={400} className="rounded-md object-cover" data-ai-hint={project.imageHint}/>
              </div>
              <CardTitle>{project.title}</CardTitle>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
            <CardFooter className="gap-2">
              <Button variant="outline" size="sm" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button size="sm" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
