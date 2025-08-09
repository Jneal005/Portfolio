
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skillsData = {
  "Languages": ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3/SCSS", "Python"],
  "Frameworks & Libraries": ["React", "Next.js", "Node.js", "Express", "Tailwind CSS"],
  "Tools & Platforms": ["Git", "GitHub", "Docker", "Firebase", "Vercel"],
  "Databases": ["PostgreSQL", "MongoDB", "Redis"],
};

export function Skills() {
  return (
    <section id="skills" className="container py-20 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">My Skills</h2>
        <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
          A look at the technologies I'm proficient with.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(skillsData).map(([category, skills]) => (
          <Card key={category}>
            <CardHeader>
              <CardTitle>{category}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {skills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
