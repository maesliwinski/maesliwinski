import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Assistive Technologies",
    description: "Leading cross-functional team of 40+ engineers to develop 5+ high-impact assistive technology solutions",
    color: "sage",
    tags: ["CAD", "Product Design", "Team Leadership"],
  },
  {
    id: 2,
    title: "Soft Robotics Research",
    description: "Characterizing elastomer membranes for underground digging soft robot using FEA and experimental testing",
    color: "purple",
    tags: ["SolidWorks", "FEA", "3D Printing"],
  },
  {
    id: 3,
    title: "Amazon Process Engineering",
    description: "Developed AI-based browser tool improving efficiency metrics, increasing uptime by 16%",
    color: "blue",
    tags: ["JavaScript", "AI", "Process Engineering"],
  },
  {
    id: 4,
    title: "Manufacturing Studio Training",
    description: "Training 30+ students in machine shop operations serving 5000+ students",
    color: "orange",
    tags: ["Machining", "Technical Training", "Safety"],
  },
];

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-12 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-agrandir font-normal tracking-tight">
            Mae Sliwinski
            <br />
            <span className="text-3xl md:text-4xl">Engineering Portfolio</span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("about")}
              className="min-w-[200px] h-14 rounded-full bg-sage hover:bg-sage/80 text-foreground text-lg font-normal"
            >
              About Me
            </Button>
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="min-w-[200px] h-14 rounded-full bg-purple hover:bg-purple/80 text-foreground text-lg font-normal"
            >
              Projects
            </Button>
            <Button
              size="lg"
              onClick={() => scrollToSection("cv")}
              className="min-w-[200px] h-14 rounded-full bg-blue hover:bg-blue/80 text-foreground text-lg font-normal"
            >
              CV
            </Button>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
          <h2 className="text-5xl md:text-7xl font-agrandir">About Me</h2>
          
          <div className="space-y-6 text-lg">
            <p>
              I am a senior studying Mechanical Engineering at Cornell University. I love applying human-factors engineering design principles to my experiences from coursework, research, and on-the-job scenarios.
            </p>
            <p>
              My specialties lie in design, product development, and people management. I've led and managed teams from 50-120+ people to create and implement solutions that are thoughtful, innovative, and drive productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            <div className="p-8 rounded-3xl bg-sage/20 border-2 border-sage">
              <h3 className="text-2xl font-agrandir mb-4">Design & Development</h3>
              <p className="text-base">Creating innovative products using CAD, rapid prototyping, and human-centered design principles</p>
            </div>
            <div className="p-8 rounded-3xl bg-purple/20 border-2 border-purple">
              <h3 className="text-2xl font-agrandir mb-4">Team Leadership</h3>
              <p className="text-base">Managing cross-functional teams and coordinating complex projects from concept to completion</p>
            </div>
            <div className="p-8 rounded-3xl bg-blue/20 border-2 border-blue">
              <h3 className="text-2xl font-agrandir mb-4">Research & Analysis</h3>
              <p className="text-base">Conducting FEA simulations, experimental testing, and data analysis for robotics applications</p>
            </div>
            <div className="p-8 rounded-3xl bg-orange/20 border-2 border-orange">
              <h3 className="text-2xl font-agrandir mb-4">Manufacturing</h3>
              <p className="text-base">Expertise in machining, 3D printing, and technical training for engineering students</p>
            </div>
          </div>

          <div className="flex gap-4 pt-8">
            <a href="mailto:mgs263@cornell.edu" className="p-4 rounded-full bg-sage/20 border-2 border-sage hover:bg-sage/30 transition-all">
              <Mail className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-purple/20 border-2 border-purple hover:bg-purple/30 transition-all">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-blue/20 border-2 border-blue hover:bg-blue/30 transition-all">
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-12 animate-fade-in-up">
          <h2 className="text-5xl md:text-7xl font-agrandir">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`p-8 rounded-3xl border-2 transition-all hover:scale-105 hover:shadow-lg animate-scale-in ${getColorClasses(
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section id="cv" className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
          <h2 className="text-5xl md:text-7xl font-agrandir">Curriculum Vitae</h2>

          {/* Experience */}
          <div className="space-y-8">
            <h3 className="text-3xl font-agrandir">Experience</h3>
            
            <div className="space-y-6">
              <div className="p-6 rounded-3xl bg-sage/20 border-2 border-sage">
                <div className="flex flex-col sm:flex-row justify-between mb-2">
                  <h4 className="text-2xl font-agrandir">Project Team Manager</h4>
                  <span className="text-muted-foreground">Dec 2022 - Present</span>
                </div>
                <p className="text-lg mb-2">Cornell Assistive Technologies Student Project Team</p>
                <ul className="list-disc list-inside space-y-2 text-base">
                  <li>Designing physical products in Autodesk CAD software to develop 5+ high impact assistive technology solutions</li>
                  <li>Leading a cross-functional team of 40+ engineers tasked with creating and adapting products</li>
                  <li>Facilitating community outreach by working with 10+ organizations and partners in New York State</li>
                  <li>Allocating team project budget of $16,000 based on project cost analysis and completing documentation</li>
                  <li>Overseeing multiple projects timelines using Gantt charts, BOMs, and spreadsheets to ensure deadlines are met</li>
                </ul>
              </div>

              <div className="p-6 rounded-3xl bg-purple/20 border-2 border-purple">
                <div className="flex flex-col sm:flex-row justify-between mb-2">
                  <h4 className="text-2xl font-agrandir">Research Assistant</h4>
                  <span className="text-muted-foreground">Nov 2023 - Present</span>
                </div>
                <p className="text-lg mb-2">Organic Robotics Lab</p>
                <ul className="list-disc list-inside space-y-2 text-base">
                  <li>Characterizing elastomer membrane of combustion actuators with Finite Element Analysis Simulation and conducting tensile and fatigue tests</li>
                  <li>Creating several custom experimental staging parts in SolidWorks, such as a multi-channel fuel intake organizer, then manufacturing with a Figure 4 resin printer</li>
                  <li>Analyzing displacement data of the combustion actuators with different fuel ratios with high-speed camera capture</li>
                </ul>
              </div>

              <div className="p-6 rounded-3xl bg-blue/20 border-2 border-blue">
                <div className="flex flex-col sm:flex-row justify-between mb-2">
                  <h4 className="text-2xl font-agrandir">Operations Engineering Internship</h4>
                  <span className="text-muted-foreground">Jun 2025 - Aug 2025</span>
                </div>
                <p className="text-lg mb-2">Amazon</p>
                <ul className="list-disc list-inside space-y-2 text-base">
                  <li>Developed and implemented a process engineering project with JavaScript and AI-based browser tool to improve efficiency metrics</li>
                  <li>Increased machinery and equipment uptime by 16% and reduced workers' unknown idle time by 7%</li>
                  <li>Created daily, weekly and monthly warehouse KPI reports with Excel VBA Macros</li>
                  <li>Managed 120+ associates to oversee the fulfillment of over 200,000 packages a day</li>
                  <li>Chosen among top 12% of 400+ interns across all disciplines to showcase project at Global AI Solutions Expo</li>
                </ul>
              </div>

              <div className="p-6 rounded-3xl bg-orange/20 border-2 border-orange">
                <div className="flex flex-col sm:flex-row justify-between mb-2">
                  <h4 className="text-2xl font-agrandir">Machinist Crew Member</h4>
                  <span className="text-muted-foreground">Sep 2024 - May 2025</span>
                </div>
                <p className="text-lg mb-2">Manufacturing Learning Studio</p>
                <ul className="list-disc list-inside space-y-2 text-base">
                  <li>Trained 30+ students to independently operate mill and lathe in a machine shop serving 5000+ students</li>
                  <li>Provided technical support to engineers by preparing design calculations and drawings with dimensioning and GD&T to meet design specifications, achieving tolerances within ±0.005 inches</li>
                  <li>Upholding high standards of safety and proper use of machinery supervising the machine shop</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8">
            <h3 className="text-3xl font-agrandir">Education</h3>
            
            <div className="p-6 rounded-3xl bg-sage/20 border-2 border-sage">
              <div className="flex flex-col sm:flex-row justify-between mb-2">
                <h4 className="text-2xl font-agrandir">B.S. Mechanical Engineering</h4>
                <span className="text-muted-foreground">Aug 2022 - May 2026</span>
              </div>
              <p className="text-lg mb-2">Cornell University, College of Engineering</p>
              <p className="text-base"><strong>Relevant Coursework:</strong> Innovative Product Design via Digital Manufacturing, Advanced Product Design, Statics & Mechanics, Mechanical Design, System Dynamics, Materials, Fluid Mechanics, Heat Transfer, Mechatronics, Statistics</p>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-8">
            <h3 className="text-3xl font-agrandir">Skills</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 rounded-3xl bg-purple/20 border-2 border-purple">
                <h4 className="text-xl font-agrandir mb-3">CAD & Design</h4>
                <p className="text-base">Autodesk (Inventor, Fusion 360, AutoCAD Revit), SolidWorks, Ansys, Adobe (InDesign, Photoshop)</p>
              </div>
              <div className="p-6 rounded-3xl bg-blue/20 border-2 border-blue">
                <h4 className="text-xl font-agrandir mb-3">Manufacturing</h4>
                <p className="text-base">Rapid Prototyping, 3D Printing (Prusa, Figure 4, Bambu), Machining (mill, CNC lathe, band saw), DFM</p>
              </div>
              <div className="p-6 rounded-3xl bg-orange/20 border-2 border-orange">
                <h4 className="text-xl font-agrandir mb-3">Programming</h4>
                <p className="text-base">MATLAB, Python, LabVIEW, Arduino C++, JavaScript, PCB Design</p>
              </div>
              <div className="p-6 rounded-3xl bg-sage/20 border-2 border-sage">
                <h4 className="text-xl font-agrandir mb-3">Management & Analysis</h4>
                <p className="text-base">Project Management, Lean Six Sigma, FEA, Microsoft Office Suite (Excel VBA, Word, PowerPoint)</p>
              </div>
            </div>
          </div>

          <div className="text-center pt-8">
            <p className="text-muted-foreground text-sm">
              (716) 474-2548 | mgs263@cornell.edu
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
