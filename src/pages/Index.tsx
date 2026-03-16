import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, ChevronDown, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import headshotImg from "@/assets/headshot.jpg";
import tubeFittingsImg from "@/assets/tube-fittings.jpg";

import amazonInternshipImg from "@/assets/amazon-internship.png";
import seniorDesignImg from "@/assets/splint.png";

const projects = [
  {
    id: 0,
    title: "Universal Cuff Orthosis Generator",
    description: "Work in Progress - click to learn more!",
    fullDescription: "",
    color: "sage",
    tags: ["CAD (SolidWorks)", "Parametric Modeling", "JavaScript CAD", "3D Printing (Bambu)"],
    image: seniorDesignImg,
    organization: "Senior Design Project",
    link: "/seniordesign",
    date: "Spring 2026"
  },
  {
    id: 1,
    title: "Station Readiness Tool",
    description: "Created a browser extension tool for managers to track packing station repairs, reducing associate idle time by 7% and improving equipment uptime by 16%.",
    fullDescription: "My process improvement project at Amazon was 'Mitigating Chuting Unknown Idle Time with Station Readiness' in which I created a browser extension tool for managers to easily track which packing stations need repair, so when associates are moved on the floor they are not assigned to a broken station. My project helped decrease associates Unknown Idle Time by 7% over the course of its implementation, and improved equipment uptime by 16%.",
    additionalText: "I also made other improvements on the floor such as establishing a new Standard Work procedure for boxes of carts that results in less steps needed to be taken in order to complete a task, and encouraged the usage of a more robust andon system.",
    color: "orange",
    tags: ["JavaScript", "Artificial Intelligence", "HTML/CSS", "Root Cause Analysis"],
    image: amazonInternshipImg,
    organization: "Internship at Amazon",
    date: "Summer 2025"
  },
  {
    id: 3,
    title: "Flame Arrestor Tube Fitting",
    description: "Fabricated tube fittings for experiments to regulate the backflow propagation of combustion products",
    fullDescription: "Fabricated tube fittings for experiments to regulate the backflow propagation of combustion products",
    color: "blue",
    tags: ["SolidWorks", "3D Printing (Figure 4)", "Hand Calculations"],
    image: tubeFittingsImg,
    organization: "Organic Robotics Laboratory",
    date: "Nov 2025"
  },
];

const Index = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

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
      <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 relative">
        <div className="text-center space-y-12">
          <h1 className="text-6xl md:text-8xl font-agrandir font-normal tracking-tight animate-fade-in">
            Mae Sliwinski
            <br />
            <span className="text-3xl md:text-4xl font-light">Engineering Portfolio</span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("about")}
              className="min-w-[200px] h-14 rounded-full bg-sage hover:bg-sage/80 text-foreground text-lg font-normal border-2 border-foreground animate-scale-in"
              style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
            >
              About Me
            </Button>
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="min-w-[200px] h-14 rounded-full bg-purple hover:bg-purple/80 text-foreground text-lg font-normal border-2 border-foreground animate-scale-in"
              style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
            >
              Projects
            </Button>
            <Button
              size="lg"
              onClick={() => scrollToSection("cv")}
              className="min-w-[200px] h-14 rounded-full bg-blue hover:bg-blue/80 text-foreground text-lg font-normal border-2 border-foreground animate-scale-in"
              style={{ animationDelay: '0.7s', animationFillMode: 'both' }}
            >
              CV
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-foreground/60" />
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
          <h2 className="text-5xl md:text-7xl font-agrandir">About Me</h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <img 
              src={headshotImg} 
              alt="Mae Sliwinski"
              className="w-48 h-48 rounded-full object-cover border-2 border-foreground flex-shrink-0"
            />
            <div className="space-y-6 text-lg flex-1">
              <p>
                I am a senior studying Mechanical Engineering at Cornell University. I love applying human-factors engineering design principles to my experiences from coursework, research, and on-the-job scenarios.
              </p>
              <p>
                My specialties lie in design, product development, and project management. I've led and managed teams from 50-120+ people to create and implement solutions that are thoughtful, innovative, and drive productivity.
              </p>
            </div>
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
            <a href="https://www.linkedin.com/in/mae-sliwinski-771a76237/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-purple/20 border-2 border-purple hover:bg-purple/30 transition-all">
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

          <div className="grid grid-cols-1 gap-6 pt-6">
            {projects.map((project, index) => (
              <div key={project.id}>
                <div
                  onClick={() => {
                    if ('link' in project && project.link) {
                      navigate(project.link);
                    } else {
                      setSelectedProject(selectedProject === project.id ? null : project.id);
                    }
                  }}
                  className={`p-6 rounded-3xl border-2 transition-all hover:scale-[1.02] hover:shadow-lg animate-scale-in cursor-pointer ${getColorClasses(
                    project.color
                  )}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
            <div className="flex gap-6 items-start">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-32 h-32 object-cover rounded-2xl flex-shrink-0"
              />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">{project.organization}</p>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-2xl font-agrandir">{project.title}</h3>
                  {project.date && <p className="text-sm text-muted-foreground whitespace-nowrap">{project.date}</p>}
                </div>
                <p className="text-base mb-4">{project.description}</p>
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
                  </div>
                </div>
                
                {selectedProject === project.id && 'fullDescription' in project && project.fullDescription && (
                  <div className={`mt-4 p-6 rounded-3xl border-2 animate-fade-in ${getColorClasses(project.color)}`}>
                    <div className="space-y-6">
                      <p className="text-base whitespace-pre-line">{project.fullDescription}</p>
                      
                      {'additionalText' in project && project.additionalText && (
                        <p className="text-base whitespace-pre-line">{project.additionalText}</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-end pt-4">
            <Button
              variant="ghost"
              onClick={() => navigate("/projects")}
              className="text-base hover:text-primary transition-colors group"
            >
              See more
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
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
                  <span className="text-muted-foreground">Nov 2023 - Dec 2025</span>
                </div>
                <p className="text-lg mb-2">Organic Robotics Lab</p>
                <ul className="list-disc list-inside space-y-2 text-base">
                  <li>Characterizing elastomer membrane of combustion actuators with Finite Element Analysis Simulation and conducting tensile and fatigue tests</li>
                  <li>Creating several custom experimental staging parts in SolidWorks, such as a multi-channel fuel intake organizer, then manufacturing with a Figure 4 resin printer</li>
                  <li>Analyzing displacement data of the combustion actuators with different fuel ratios with high-speed camera capture</li>
                  <li>Troubleshoot electromechanical hardware, select and evaluate motors/linear actuators based on force requirements and packaging constraints to support integration of wiring, sensors, and actuators for an underground robot</li>
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
              <p className="text-base"><strong>Relevant Coursework:</strong> Innovative Product Design via Digital Manufacturing, Advanced Product Design, Statics & Mechanics, Mechanical Design, System Dynamics, Materials, Fluid Mechanics, Heat Transfer, Mechatronics, Statistics, Additive Manufacturing: Process Physics, Materials, Properties and Post Processing</p>
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
              mgs263@cornell.edu
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
