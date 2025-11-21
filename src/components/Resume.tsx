import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Briefcase, GraduationCap, Wrench } from "lucide-react";

const experiences = [
  {
    title: "Operations Engineering Internship",
    company: "Amazon",
    location: "Miami, FL",
    period: "Jun 2025 – Aug 2025",
    highlights: [
      "Developed process engineering project with JavaScript and AI to improve efficiency metrics of packing stations",
      "Increased machinery uptime by 16% and reduced workers' idle time by 7%",
      "Managed 120+ associates overseeing fulfillment of 200,000+ packages daily",
      "Selected among top 12% of 400+ interns to showcase project at Global AI Solutions Expo"
    ]
  },
  {
    title: "Project Team Manager",
    company: "Cornell Assistive Technologies",
    location: "Ithaca, NY",
    period: "Dec 2022 - Present",
    highlights: [
      "Leading cross-functional team of 40+ engineers creating assistive technology solutions",
      "Designing physical products in Autodesk CAD to develop 5+ high-impact solutions",
      "Managing project budget of $16,000 and facilitating community outreach with 10+ organizations",
      "Overseeing project timelines using Gantt charts and BOMs to ensure deadlines are met"
    ]
  },
  {
    title: "Research Assistant",
    company: "Organic Robotics Lab",
    location: "Ithaca, NY",
    period: "Nov 2023 – Present",
    highlights: [
      "Characterizing elastomer membrane of combustion actuators with FEA simulation",
      "Conducting tensile and fatigue tests for underground digging soft robot design",
      "Creating custom experimental parts in SolidWorks and manufacturing with Figure 4 resin printer",
      "Analyzing displacement data with high-speed camera capture to optimize actuator design"
    ]
  },
  {
    title: "Machinist Crew Member",
    company: "Manufacturing Learning Studio",
    location: "Ithaca, NY",
    period: "Sep 2024 – May 2025",
    highlights: [
      "Trained 30+ students to independently operate mill and lathe in machine shop",
      "Provided technical support preparing design calculations and drawings with GD&T",
      "Achieved tolerances within ±0.005 inches meeting design specifications",
      "Supervised machine shop upholding high standards of safety and proper machinery use"
    ]
  }
];

const Resume = () => {
  return (
    <section id="resume" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Experience & CV
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            My professional journey in engineering, research, and leadership
          </p>
          <Button size="lg" className="gap-2 shadow-md hover:shadow-glow transition-all" asChild>
            <a href="/Madeline_Mae_Sliwinski_Resume.pdf" download>
              <Download className="w-5 h-5" />
              Download Full Resume
            </a>
          </Button>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="hover:shadow-md transition-all duration-300 bg-card/80 backdrop-blur border-border/50 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                    <div className="text-muted-foreground space-y-1">
                      <p className="font-medium text-foreground">{exp.company}</p>
                      <p className="text-sm">{exp.location} | {exp.period}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-3 text-muted-foreground">
                      <span className="text-accent mt-1.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
