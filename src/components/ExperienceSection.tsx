import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">
          Experiências
        </h2>

        <Card className="border bg-card">
          <CardHeader>
            <CardTitle className="text-lg">
              Desenvolvedor Backend (Aprendiz) | Golang
            </CardTitle>
            <CardDescription className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-foreground">
                3CON Consultoria e Sistemas
              </span>
              <span>•</span>
              <span>Remoto</span>
              <span>•</span>
              <span>Jun 2025 – Atual</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 text-sm text-muted-foreground list-disc list-inside">
              <li>
                Atuação no desenvolvimento backend desde a fase inicial de
                projetos para um dos maiores varejistas farmacêuticos do país,
                construindo APIs REST em Golang com o framework Echo
              </li>
              <li>
                Responsável pelo desenvolvimento da API Backend em Golang de um
                projeto interno de Gestão de Licenças de Produtos e Sistemas,
                desde a modelagem até a integração com APIs externas e banco de
                dados PostgreSQL, sob supervisão direta do Tech Lead
              </li>
              <li>
                Implementação de autenticação e autorização com Keycloak (IAM) e
                JWT, padronizando o controle de acesso à API
              </li>
              <li>
                Criação de testes unitários e de integração utilizando Go
                testing e SQLMock, alcançando 91% de cobertura de código
              </li>
              <li>
                Uso contínuo do SonarQube para análise de qualidade, cobertura
                de testes e identificação de melhorias no código Go
              </li>
              <li>
                Implementação de armazenamento de arquivos e imagens utilizando
                Bucket S3 (MinIO)
              </li>
              <li>
                Definição e implementação de fluxos de negócio relacionados ao
                controle, validação e gerenciamento de licenças, garantindo
                consistência de dados e segurança
              </li>
              <li>
                Participação ativa no levantamento de requisitos, refatorações e
                adaptações do sistema conforme necessidades do negócio, seguindo
                metodologias ágeis (Jira / Kanban)
              </li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                "Golang",
                "Echo",
                "PostgreSQL",
                "Keycloak",
                "JWT",
                "Docker",
                "SonarQube",
                "MinIO",
                "Go Testing",
                "SQLMock",
              ].map((t) => (
                <Badge key={t} variant="outline" className="font-mono text-xs">
                  {t}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ExperienceSection;
