import { Github, Linkedin, FileDown, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-mono text-sm text-primary mb-4">Olá, eu sou</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
          João Pedro Camargo Pinheiro
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground mb-6 font-light">
          Backend Developer
        </p>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
          Backend Developer com experiência em Golang, desenvolvimento de APIs REST, PostgreSQL,
          autenticação com JWT e Keycloak, e arquitetura de software. Foco em código limpo, testes
          e boas práticas.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <Button asChild>
            <a href="#projects">
              <ArrowDown className="h-4 w-4" />
              Ver Projetos
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com/j-ordep" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://www.linkedin.com/in/joao-pedro-p/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </Button>
          <Button variant="secondary" asChild>
            <a href="/curriculo.pdf" download>
              <FileDown className="h-4 w-4" />
              Download CV
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-xs text-muted-foreground">
          {["Go", "PostgreSQL", "Docker", "Kafka", "Java", "Spring Boot"].map((t) => (
            <span key={t} className="px-2 py-1 rounded bg-secondary border">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
