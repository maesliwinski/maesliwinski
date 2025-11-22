import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

const projectsData = {
  "1": {
    title: "E-Commerce Platform",
    description:
      "A comprehensive full-stack e-commerce solution built with modern technologies. Features include real-time inventory management, secure payment processing, admin dashboard, and responsive design.",
    color: "sage",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    features: [
      "Real-time inventory tracking",
      "Secure payment processing with Stripe",
      "Admin dashboard with analytics",
      "Responsive mobile-first design",
      "Product search and filtering",
      "User authentication and profiles",
    ],
    technologies: {
      Frontend: "React, TypeScript, Tailwind CSS",
      Backend: "Node.js, Express, PostgreSQL",
      Payments: "Stripe API",
      Deployment: "Vercel, Railway",
    },
  },
  "2": {
    title: "AI Chat Application",
    description:
      "Real-time chat application with AI-powered responses using WebSocket technology and OpenAI API. Includes message history, user presence, and intelligent conversation flows.",
    color: "purple",
    tags: ["TypeScript", "WebSocket", "OpenAI", "Redis"],
    features: [
      "Real-time messaging with WebSocket",
      "AI-powered response generation",
      "Message history and search",
      "User presence indicators",
      "Typing indicators",
      "File sharing capabilities",
    ],
    technologies: {
      Frontend: "React, TypeScript, Socket.io",
      Backend: "Node.js, Express, Redis",
      AI: "OpenAI GPT API",
      Database: "MongoDB",
    },
  },
  "3": {
    title: "Data Visualization Dashboard",
    description:
      "Interactive analytics dashboard with beautiful visualizations for business insights. Real-time data processing with custom charts and export capabilities.",
    color: "blue",
    tags: ["React", "D3.js", "Python", "FastAPI"],
    features: [
      "Interactive charts with D3.js",
      "Real-time data updates",
      "Custom date range filters",
      "Export to PDF and Excel",
      "Responsive dashboard layout",
      "User-customizable widgets",
    ],
    technologies: {
      Frontend: "React, D3.js, Recharts",
      Backend: "Python, FastAPI",
      Database: "PostgreSQL, TimescaleDB",
      Processing: "Pandas, NumPy",
    },
  },
};

const ProjectDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const project = projectsData[id as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-agrandir mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/projects")}>Back to Projects</Button>
        </div>
      </div>
    );
  }

  const getColorClasses = (color: string) => {
    const colors = {
      sage: "bg-sage/20 border-sage",
      purple: "bg-purple/20 border-purple",
      blue: "bg-blue/20 border-blue",
      orange: "bg-orange/20 border-orange",
    };
    return colors[color as keyof typeof colors] || colors.sage;
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate("/projects")}
          className="mb-8 hover:bg-sage/20"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Button>

        <div className="space-y-8 animate-fade-in-up">
          <div>
            <h1 className="text-5xl md:text-7xl font-agrandir mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 rounded-full border-2 ${getColorClasses(project.color)}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <p className="text-xl leading-relaxed">{project.description}</p>

          <div className="flex gap-4">
            <Button
              size="lg"
              className="rounded-full bg-sage hover:bg-sage/80 text-foreground"
            >
              <Github className="mr-2 h-5 w-5" />
              View Code
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-2"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Live Demo
            </Button>
          </div>

          <div className="space-y-6 pt-6">
            <div>
              <h2 className="text-3xl font-agrandir mb-4">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-sage text-xl mt-1">•</span>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-agrandir mb-4">Technologies Used</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(project.technologies).map(([category, tech]) => (
                  <div
                    key={category}
                    className={`p-6 rounded-3xl border-2 ${getColorClasses(project.color)}`}
                  >
                    <h3 className="text-xl font-agrandir mb-2">{category}</h3>
                    <p className="text-base">{tech}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
