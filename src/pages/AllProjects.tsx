import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import penHoldersImg from "@/assets/pen-holders.jpg";
import tableBuiltImg from "@/assets/table-built.jpg";
import penHolderCloseupImg from "@/assets/pen-holder-closeup.jpg";
import penHolderRenderImg from "@/assets/pen-holder-render.png";
import wheelchairTableUseImg from "@/assets/wheelchair-table-use.jpg";
import tableRenderImg from "@/assets/table-render.png";
import tubeFittingsImg from "@/assets/tube-fittings.jpg";
import tumbleToteImg from "@/assets/tumbletote.png";
import boxFanRenderImg from "@/assets/box-fan-render.png";
import fanBladeRenderImg from "@/assets/fan-blade-render.png";
import riceCookerRender1Img from "@/assets/rice-cooker-render1.png";
import riceCookerRender2Img from "@/assets/rice-cooker-render2.png";
import keyguardPrintedImg from "@/assets/keyguard-printed.jpg";

const projects = [
  {
    id: 1,
    title: "Assistive Pen Holders",
    description: "Designed pen holders in Fusion360 for children with motor disabilities to stabilize writing. My design eliminated the need for a screwdriver to change the pen, promoting independence and ease of use.",
    fullDescription: "In Fall 2023 I designed a pen holder in Fusion360 for children with motor disabilities to stabilize writing as requested by a family local to my University. My design eliminated the need for a screwdriver to change the pen that existing solutions had, thus promoting independence and ease of use. The increased surface area helps provide grip control.",
    additionalImages: [penHolderCloseupImg, penHolderRenderImg],
    additionalText: "For this project, I learned features such as Section Analysis to verify that my threads were within tolerance of the selected screw. I also used the assembly features to demonstrate the use of the product before manufacturing with a Prusa 3D Printer with PLA for the lightweight versatility. The bright colors selected are for students that are low-vision to provide a bright contrast.\n\nThe family I partnered with for this project gave the pen holders to their local school.",
    color: "purple",
    tags: ["3D Printing (Prusa)", "CAD (Autodesk Fusion360)"],
    image: penHoldersImg,
    organization: "Cornell Assistive Technologies"
  },
  {
    id: 2,
    title: "Custom Wheelchair Table",
    description: "Created a custom table that interfaces with a custom wheelchair using low-cost, lightweight materials like acrylic and aluminum extrusions for easy mobility.",
    fullDescription: "In Fall 2024, I received a request from Finger Lakes Independence Center to make a custom table that interfaces with a custom wheelchair. My design focuses on using low-cost, lightweight materials, such as acrylic and aluminum extrusions, so that the user can push away the chair with minimum effort based on his condition.",
    additionalImages: [wheelchairTableUseImg, tableRenderImg],
    additionalText: "The final result differs from the designed version as my team and I made quick iterations in order to deliver the project by the promised date. One of these changes was including washers under the bolts that secure the acrylic table top to prevent the stress fracture of the table top and secure it into place without an epoxy.",
    color: "sage",
    tags: ["Autodesk Fusion360", "Power Tools (Drill, Band Saw)", "Laser Cutter"],
    image: tableBuiltImg,
    organization: "Cornell Assistive Technologies"
  },
  {
    id: 3,
    title: "Flame Arrestor Tube Fitting",
    description: "Fabricated tube fittings for experiments to regulate the backflow propagation of combustion products",
    fullDescription: "Fabricated tube fittings for experiments to regulate the backflow propagation of combustion products",
    color: "blue",
    tags: ["SolidWorks", "3D Printing (Figure 4)", "Hand Calculations"],
    image: tubeFittingsImg,
    organization: "Organic Robotics Laboratory"
  },
  {
    id: 4,
    title: "TumbleTote Laundry Caddy",
    description: "Dorm room and apartment laundry organization system for people on the go",
    fullDescription: "Dorm room and apartment laundry organization system for people on the go",
    color: "orange",
    tags: ["Voice of Customer", "3D Modeling (Blender)", "Rapid Prototyping (Hand tools, sewing)"],
    image: tumbleToteImg,
    organization: "MAE 4341 - Innovative Product Design via Digital Manufacturing"
  },
  {
    id: 5,
    title: "BOE-Bot Robot",
    description: "Collaboratively created a cube collecting robot based on design specifications for a mechatronics competition",
    fullDescription: "Collaboratively created a cube collecting robot based on design specifications. Prototyped with Arduino and Breadboard using C++ code to control sensors and motors for autonomous navigation and cube collection.",
    additionalText: "The robot made it to the final stages of the competition, successfully completing the autonomous cube collection challenges.",
    color: "sage",
    tags: ["Arduino", "C++", "Mechatronics", "Robotics"],
    image: penHoldersImg,
    organization: "MAE 3780: Mechatronics"
  },
  {
    id: 6,
    title: "Box Fan Blade Analysis",
    description: "Performance analysis and optimization of box fan blade design using fluid mechanics principles",
    fullDescription: "Took apart a box fan and cut cross sections of the fan to measure and model on Fusion360. Measured fan speeds using an anemometer to analyze performance.",
    additionalImages: [boxFanRenderImg],
    additionalText: "Found an optimal angle of attack from the measured geometry to be used if the fan were to be redesigned to provide optimal cooling power. Analyzed the box fan using concepts of fluid mechanics. Watch the full project presentation: https://youtu.be/0M7gkP3zKfs",
    color: "blue",
    tags: ["Fusion360", "Fluid Mechanics", "Engineering Analysis"],
    image: fanBladeRenderImg,
    organization: "MAE 3230: Intro Fluid Mechanics"
  },
  {
    id: 7,
    title: "Rice Cooker CAD Model",
    description: "Detailed CAD modeling of a rice cooker with accurate dimensions and realistic rendering",
    fullDescription: "Created a detailed CAD model of a rice cooker, focusing on accurate dimensional modeling and realistic rendering techniques to showcase product design capabilities.",
    additionalImages: [riceCookerRender1Img],
    color: "purple",
    tags: ["CAD", "3D Modeling", "Product Design"],
    image: riceCookerRender2Img,
    organization: "MAE 2250: Intro to Mechanical Design"
  },
  {
    id: 8,
    title: "3D Printed Keyguards for AAC Apps",
    description: "Custom keyguards for non-verbal communication apps using OpenSCAD parametric design",
    fullDescription: "Designed and manufactured 3D printed keyguards for non-verbal communication apps using OpenSCAD. The parametric design allows for customization based on different tablet sizes and app grid layouts.",
    additionalText: "The keyguards help users with motor disabilities accurately select buttons on touchscreen communication apps by providing physical boundaries between keys, improving independence and communication speed.",
    color: "orange",
    tags: ["OpenSCAD", "3D Printing", "Assistive Technology", "Parametric Design"],
    image: keyguardPrintedImg,
    organization: "Cornell Assistive Technologies"
  },
];

const AllProjects = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

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
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
            className="rounded-full"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-5xl md:text-7xl font-agrandir">All Projects</h1>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <div key={project.id}>
              <div
                onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
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
                    <h3 className="text-2xl font-agrandir mb-2">{project.title}</h3>
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
              
              {selectedProject === project.id && (
                <div className={`mt-4 p-6 rounded-3xl border-2 animate-fade-in ${getColorClasses(project.color)}`}>
                  <div className="space-y-6">
                    <p className="text-base whitespace-pre-line">{project.fullDescription}</p>
                    
                    {project.additionalImages && project.additionalImages.length > 0 && (
                      <div className="grid grid-cols-2 gap-4">
                        {project.additionalImages.map((img, idx) => (
                          <img 
                            key={idx}
                            src={img} 
                            alt={`${project.title} detail ${idx + 1}`}
                            className="w-full h-48 object-cover rounded-2xl"
                          />
                        ))}
                      </div>
                    )}
                    
                    {project.additionalText && (
                      <p className="text-base whitespace-pre-line">{project.additionalText}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
