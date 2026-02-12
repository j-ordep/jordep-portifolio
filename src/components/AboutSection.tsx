import { Badge } from "@/components/ui/badge";

const techs = [
  "Golang", "Java", "Spring Boot", "PostgreSQL", "Docker", "Keycloak", "JWT", "Kafka", "Git", "SonarQube",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">
          Sobre mim
        </h2>

        <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
          <p>
            Sou desenvolvedor backend com experiência na construção de sistemas em Golang, APIs REST,
            banco de dados PostgreSQL, implementação de autenticação com Keycloak e JWT.
          </p>
          <p>
            Atuo desde a modelagem de dados e definição da arquitetura até a implementação,
            participando da definição de regras de negócio, criação de testes automatizados e integração com serviços externos.
          </p>
          <p>
            Foco em desenvolvimento backend, arquitetura de software, escalabilidade,
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
