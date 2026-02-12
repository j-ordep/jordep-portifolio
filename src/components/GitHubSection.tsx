import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const GitHubSection = () => {
  return (
    <section id="github" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">
          <span className="font-mono text-primary mr-2">05.</span>GitHub
        </h2>

        <div className="flex flex-col items-center gap-6">
          <img
            src="https://github-readme-stats.vercel.app/api?username=j-ordep&show_icons=true&theme=transparent&hide_border=true&text_color=888&title_color=34d399&icon_color=34d399"
            alt="GitHub Stats"
            className="max-w-full"
            loading="lazy"
          />
          <img
            src="https://github-readme-streak-stats.herokuapp.com?user=j-ordep&theme=transparent&hide_border=true&ring=34d399&fire=34d399&currStreakLabel=34d399"
            alt="GitHub Streak"
            className="max-w-full"
            loading="lazy"
          />
          <Button variant="outline" asChild>
            <a href="https://github.com/j-ordep" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              Ver Perfil no GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
