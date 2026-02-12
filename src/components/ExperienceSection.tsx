import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">
          <span className="font-mono text-primary mr-2">02.</span>Experience
        </h2>

        <Card className="border bg-card">
          <CardHeader>
            <CardTitle className="text-lg">Backend Developer (Golang)</CardTitle>
            <CardDescription className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-foreground">3CON Consultoria e Sistemas</span>
              <span>•</span>
              <span>Jun 2025 – Atual</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
              <li>Desenvolvimento de APIs REST em Golang utilizando o framework Echo</li>
              <li>Integração com PostgreSQL para persistência de dados</li>
              <li>Implementação de autenticação e autorização com Keycloak e JWT</li>
              <li>Criação de testes automatizados com cobertura de 91%</li>
              <li>Análise de qualidade de código com SonarQube</li>
              <li>Integração com MinIO/S3 para armazenamento de arquivos</li>
              <li>Sistema de gestão de licenças desde a modelagem até produção</li>
              <li>Participação ativa em metodologias ágeis (Scrum)</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              {["Golang", "Echo", "PostgreSQL", "Keycloak", "JWT", "Docker", "SonarQube", "MinIO"].map((t) => (
                <Badge key={t} variant="outline" className="font-mono text-xs">{t}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ExperienceSection;
