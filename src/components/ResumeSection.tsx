import { FileDown, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ResumeSection = () => {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <section id="resume" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">
          Currículo
        </h2>

        <div className="flex items-center justify-center gap-3 mb-8">
          <Button asChild>
            <a href="/curriculo.pdf" download>
              <FileDown className="h-4 w-4" />
              Download CV
            </a>
          </Button>
          <Button variant="outline" onClick={() => setShowPdf(!showPdf)}>
            <Eye className="h-4 w-4" />
            {showPdf ? "Fechar" : "Visualizar"}
          </Button>
        </div>

        {showPdf && (
          <div className="rounded-lg border overflow-hidden bg-card">
            <iframe
              src="/curriculo.pdf"
              title="Currículo"
              className="w-full h-[600px]"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ResumeSection;
