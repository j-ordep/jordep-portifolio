import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Payment Gateway",
    desc: "Gateway de pagamentos desenvolvido em Golang com arquitetura baseada em microsserviços e comunicação assíncrona utilizando Kafka. Responsável pelo processamento de transações e publicação de eventos.",
    techs: ["Golang", "Kafka", "Docker", "REST API", "Event-driven"],
    github: "https://github.com/j-ordep/Go-Gateway",
  },
  {
    title: "Event Management API",
    desc: "API REST desenvolvida em Java com Spring Boot para gerenciamento de eventos, inscrições e convites. Implementa arquitetura MVC com persistência em MySQL.",
    techs: ["Java", "Spring Boot", "MySQL", "Docker", "REST API"],
    github: "https://github.com/j-ordep/Event-Flow",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">
          <span className="font-mono text-primary mr-2">03.</span>Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <Card key={p.title} className="border bg-card flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  {p.title}
                </CardTitle>
                <CardDescription className="leading-relaxed">{p.desc}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.techs.map((t) => (
                    <Badge key={t} variant="secondary" className="font-mono text-xs">
                      {t}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href={p.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-3.5 w-3.5" />
                    Ver no GitHub
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
