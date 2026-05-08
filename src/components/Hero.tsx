import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Engineering workspace"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center animate-fade-in-up">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground">
            Engineering
            <span className="block mt-2 bg-gradient-accent bg-clip-text text-transparent">
              Innovation & Design
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Full-stack engineer crafting elegant solutions to complex problems.
            Specialized in web technologies, system design, and user experience.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button size="lg" className="gap-2 shadow-md hover:shadow-glow transition-all">
              View Projects
              <ArrowDown className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Mail className="w-4 h-4" />
              Contact Me
            </Button>
          </div>

          <div className="flex gap-4 justify-center pt-8">
            <a
              href="https://github.com/maesliwinski"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="p-3 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
