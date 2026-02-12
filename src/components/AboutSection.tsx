import { Badge } from "@/components/ui/badge";

const techs = [
  "Golang", "PostgreSQL", "Docker", "REST APIs", "Keycloak", "JWT", "Kafka", "Java", "Spring Boot", "Git", "Linux", "SonarQube",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">
          <span className="font-mono text-primary mr-2">01.</span>About
        </h2>

        <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
          <p>
            Backend Developer com experiência prática no desenvolvimento de APIs REST em Golang,
            integração com banco de dados PostgreSQL, autenticação com Keycloak e JWT, e
            arquitetura desacoplada.
          </p>
          <p>
            Experiência no desenvolvimento de sistemas desde a modelagem até implementação,
            incluindo definição de regras de negócio, testes automatizados e integração com
            serviços externos.
          </p>
          <p>
            Foco em desenvolvimento backend, arquitetura de software, sistemas escaláveis,
            código limpo e organizado.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Tecnologias
          </h3>
          <div className="flex flex-wrap gap-2">
            {techs.map((t) => (
              <Badge key={t} variant="secondary" className="font-mono text-xs">
                {t}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Idiomas
          </h3>
          <div className="flex gap-4 text-sm">
            <span>🇧🇷 Português — Nativo</span>
            <span>🇺🇸 Inglês — Intermediário</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
