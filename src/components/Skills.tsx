import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Database, Cloud, Smartphone, Wrench, Globe } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "CAD & Design Software",
    skills: ["SolidWorks", "Autodesk Inventor", "Fusion 360", "AutoCAD Revit", "Ansys", "Adobe Suite"],
  },
  {
    icon: Wrench,
    title: "Manufacturing & Prototyping",
    skills: ["3D Printing (Prusa, Figure 4, Bambu)", "CNC Machining", "Mill & Lathe", "Rapid Prototyping", "GD&T"],
  },
  {
    icon: Database,
    title: "Analysis & Simulation",
    skills: ["FEA", "MATLAB", "DFM", "System Dynamics", "Materials Analysis", "Heat Transfer"],
  },
  {
    icon: Code2,
    title: "Programming & Electronics",
    skills: ["Python", "MATLAB", "LabVIEW", "Arduino C++", "JavaScript", "PCB Design"],
  },
  {
    icon: Globe,
    title: "Engineering Principles",
    skills: ["Mechanical Design", "Fluid Mechanics", "Statics & Mechanics", "Mechatronics", "Materials Science"],
  },
  {
    icon: Cloud,
    title: "Project Management",
    skills: ["Lean Six Sigma", "Problem Solving", "Team Leadership", "Budget Management", "Communication"],
  },
];

const Skills = () => {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications across the full stack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-md transition-all duration-300 bg-card/80 backdrop-blur border-border/50 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 rounded-full bg-secondary text-sm text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
