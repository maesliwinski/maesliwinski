import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "#",
    demo: "#",
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat application with AI-powered responses, using WebSocket for instant messaging and OpenAI API.",
    tags: ["TypeScript", "WebSocket", "OpenAI", "Redis"],
    github: "#",
    demo: "#",
  },
  {
    title: "Data Visualization Dashboard",
    description: "Interactive analytics dashboard with real-time data processing and beautiful visualizations for business insights.",
    tags: ["React", "D3.js", "Python", "FastAPI"],
    github: "#",
    demo: "#",
  },
  {
    title: "DevOps Automation Tool",
    description: "CI/CD pipeline automation tool for streamlined deployment workflows and infrastructure management.",
    tags: ["Docker", "Kubernetes", "Go", "GitHub Actions"],
    github: "#",
    demo: "#",
  },
  {
    title: "Mobile Fitness Tracker",
    description: "Cross-platform mobile app for tracking workouts, nutrition, and health metrics with social features.",
    tags: ["React Native", "Firebase", "Redux", "TypeScript"],
    github: "#",
    demo: "#",
  },
  {
    title: "IoT Smart Home System",
    description: "IoT system for home automation with sensor integration, mobile control, and energy monitoring.",
    tags: ["Python", "MQTT", "Raspberry Pi", "React"],
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing various technologies and problem-solving approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-secondary/60 hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 gap-2 hover:bg-accent hover:text-accent-foreground"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 gap-2 shadow-sm hover:shadow-md"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
