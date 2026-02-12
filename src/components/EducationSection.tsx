import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const items = [
  {
    title: "Análise e Desenvolvimento de Sistemas",
    org: "UniCarioca",
    period: "Conclusão: Dez 2026",
    desc: "Graduação tecnológica com foco em desenvolvimento de software e sistemas.",
  },
  {
    title: "Curso Dev Poliglota — Trilha Senior",
    org: "Formação Avançada",
    period: "Jan 2026",
    desc: "Arquitetura de software, System Design, múltiplas linguagens de programação.",
  },
  {
    title: "Curso Java10x — Java & Spring Boot",
    org: "Formação Backend",
    period: "Nov 2024 – Dez 2025",
    desc: "Java, Spring Boot, APIs REST, boas práticas de desenvolvimento backend.",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">
          Formação & Cursos
        </h2>

        <div className="space-y-4">
          {items.map((item) => (
            <Card key={item.title} className="border bg-card">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{item.title}</CardTitle>
                <CardDescription>
                  {item.org} • {item.period}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
