
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const experienceData = [
  {
    company: "Tech Solutions Inc.",
    role: "Senior Frontend Developer",
    period: "2021 - Present",
    description: [
      "Lead developer on a new customer-facing dashboard using Next.js, resulting in a 20% increase in user engagement.",
      "Mentored junior developers, providing code reviews and guidance on best practices.",
      "Collaborated with UI/UX designers to implement complex, responsive interfaces.",
    ],
  },
  {
    company: "Web Innovators",
    role: "Frontend Developer",
    period: "2019 - 2021",
    description: [
      "Developed and maintained client websites using React and Redux.",
      "Improved website performance by 30% through code splitting and lazy loading techniques.",
      "Worked in an agile team, participating in daily stand-ups and sprint planning.",
    ],
  },
  {
    company: "Digital Creations",
    role: "Junior Web Developer",
    period: "2018 - 2019",
    description: [
      "Assisted in the development of e-commerce websites using HTML, CSS, and JavaScript.",
      "Built and styled components from design mockups.",
      "Gained experience with version control using Git.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="container py-20 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Work Experience</h2>
        <p className="max-w-xl mx-auto mt-4 text-muted-foreground">
          My professional journey so far.
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <Tabs defaultValue={experienceData[0].company} className="flex flex-col md:flex-row gap-10">
          <TabsList className="flex md:flex-col h-auto bg-transparent p-0 border-none items-start">
            {experienceData.map(({ company }) => (
              <TabsTrigger key={company} value={company} className="w-full justify-start data-[state=active]:bg-accent/80 data-[state=active]:text-accent-foreground data-[state=active]:shadow-none">
                {company}
              </TabsTrigger>
            ))}
          </TabsList>
          {experienceData.map(({ company, role, period, description }) => (
            <TabsContent key={company} value={company} className="w-full mt-0">
              <h3 className="text-xl font-semibold">{role} @ <span className="text-primary">{company}</span></h3>
              <p className="text-sm text-muted-foreground mt-1 mb-4 font-mono">{period}</p>
              <ul className="space-y-3">
                {description.map((item, index) => (
                  <li key={index} className="flex">
                    <span className="text-primary mr-3">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
