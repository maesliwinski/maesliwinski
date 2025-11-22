import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8 hover:bg-sage/20"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-agrandir">About Me</h1>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Hello! I'm Mae Sliwinski, a passionate engineer dedicated to creating innovative
              solutions and elegant designs. My journey in engineering has been driven by
              curiosity and a desire to solve complex problems.
            </p>

            <p>
              With expertise spanning multiple disciplines, I focus on building systems that
              are not only functional but also beautiful and intuitive. I believe that great
              engineering combines technical excellence with thoughtful design.
            </p>

            <div className="pt-6">
              <h2 className="text-3xl font-agrandir mb-4">Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 rounded-3xl bg-sage/20 border-2 border-sage">
                  <h3 className="text-xl font-agrandir mb-2">Frontend Development</h3>
                  <p className="text-base">React, TypeScript, Modern Web Technologies</p>
                </div>
                <div className="p-6 rounded-3xl bg-purple/20 border-2 border-purple">
                  <h3 className="text-xl font-agrandir mb-2">System Design</h3>
                  <p className="text-base">Architecture, Scalability, Performance</p>
                </div>
                <div className="p-6 rounded-3xl bg-blue/20 border-2 border-blue">
                  <h3 className="text-xl font-agrandir mb-2">UI/UX Design</h3>
                  <p className="text-base">User-Centered Design, Prototyping</p>
                </div>
                <div className="p-6 rounded-3xl bg-orange/20 border-2 border-orange">
                  <h3 className="text-xl font-agrandir mb-2">Full-Stack Development</h3>
                  <p className="text-base">End-to-End Solutions, APIs, Databases</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h2 className="text-3xl font-agrandir mb-4">Let's Connect</h2>
              <p>
                I'm always interested in collaborating on interesting projects or discussing
                new ideas. Feel free to reach out!
              </p>
              <div className="flex gap-4 mt-4">
                <a
                  href="mailto:mae@example.com"
                  className="text-foreground hover:text-muted-foreground transition-colors underline"
                >
                  mae@example.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
