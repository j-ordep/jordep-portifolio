import { Mail, Github, Linkedin, Phone } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "joaoppinheiro2005@gmail.com",
    href: "mailto:joaoppinheiro2005@gmail.com",
  },
  {
    icon: Phone,
    label: "21 998686167",
  },
  {
    icon: Github,
    label: "github.com/j-ordep",
    href: "https://github.com/j-ordep",
  },
  {
    icon: Linkedin,
    label: "linkedin.com/in/joao-pedro-p",
    href: "https://www.linkedin.com/in/joao-pedro-p/",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">
          Contato
        </h2>
        <div className="flex flex-col items-center gap-4">
          {contacts.map((c) => (
            <a
              key={c.href}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <c.icon className="h-5 w-5" />
              <span className="text-sm">{c.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
