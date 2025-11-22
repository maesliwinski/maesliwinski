import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack marketplace with modern UI",
    color: "sage",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: 2,
    title: "AI Chat Application",
    description: "Real-time chat with AI responses",
    color: "purple",
    tags: ["TypeScript", "WebSocket", "OpenAI"],
  },
  {
    id: 3,
    title: "Data Visualization Dashboard",
    description: "Interactive analytics and insights",
    color: "blue",
    tags: ["React", "D3.js", "Python"],
  },
  {
    id: 4,
    title: "Mobile Fitness Tracker",
    description: "Cross-platform health tracking app",
    color: "orange",
    tags: ["React Native", "Firebase"],
  },
  {
    id: 5,
    title: "DevOps Automation Tool",
    description: "CI/CD pipeline automation",
    color: "sage",
    tags: ["Docker", "Kubernetes", "Go"],
  },
  {
    id: 6,
    title: "IoT Smart Home System",
    description: "Home automation and monitoring",
    color: "purple",
    tags: ["Python", "MQTT", "React"],
  },
];

const Projects = () => {
  const navigate = useNavigate();

  const getColorClasses = (color: string) => {
    const colors = {
      sage: "bg-sage/20 border-sage hover:bg-sage/30",
      purple: "bg-purple/20 border-purple hover:bg-purple/30",
      blue: "bg-blue/20 border-blue hover:bg-blue/30",
      orange: "bg-orange/20 border-orange hover:bg-orange/30",
    };
    return colors[color as keyof typeof colors] || colors.sage;
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8 hover:bg-sage/20"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-agrandir">Projects</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => navigate(`/projects/${project.id}`)}
                className={`p-8 rounded-3xl border-2 text-left transition-all hover:scale-105 hover:shadow-lg animate-scale-in ${getColorClasses(
                  project.color
                )}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-agrandir mb-3">{project.title}</h3>
                <p className="text-base mb-4 text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm rounded-full bg-background/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
