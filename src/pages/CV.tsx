import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";

const CV = () => {
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
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h1 className="text-5xl md:text-7xl font-agrandir">Curriculum Vitae</h1>
            <Button
              size="lg"
              className="rounded-full bg-sage hover:bg-sage/80 text-foreground"
            >
              <Download className="mr-2 h-5 w-5" />
              Download PDF
            </Button>
          </div>

          {/* Experience */}
          <section className="space-y-6 pt-6">
            <h2 className="text-3xl font-agrandir">Experience</h2>
            
            <div className="space-y-6">
              <div className="p-6 rounded-3xl bg-sage/20 border-2 border-sage">
                <div className="flex flex-col sm:flex-row justify-between mb-2">
                  <h3 className="text-2xl font-agrandir">Senior Software Engineer</h3>
                  <span className="text-muted-foreground">2022 - Present</span>
                </div>
                <p className="text-lg mb-2">Tech Company Inc.</p>
                <ul className="list-disc list-inside space-y-2 text-base">
                  <li>Led development of multiple full-stack applications</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                  <li>Improved system performance by 40% through optimization</li>
                </ul>
              </div>

              <div className="p-6 rounded-3xl bg-purple/20 border-2 border-purple">
                <div className="flex flex-col sm:flex-row justify-between mb-2">
                  <h3 className="text-2xl font-agrandir">Software Engineer</h3>
                  <span className="text-muted-foreground">2020 - 2022</span>
                </div>
                <p className="text-lg mb-2">Startup Innovations</p>
                <ul className="list-disc list-inside space-y-2 text-base">
                  <li>Built scalable web applications from scratch</li>
                  <li>Implemented CI/CD pipelines and automated testing</li>
                  <li>Collaborated with design team on UI/UX improvements</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="space-y-6">
            <h2 className="text-3xl font-agrandir">Education</h2>
            
            <div className="p-6 rounded-3xl bg-blue/20 border-2 border-blue">
              <div className="flex flex-col sm:flex-row justify-between mb-2">
                <h3 className="text-2xl font-agrandir">B.S. Computer Science</h3>
                <span className="text-muted-foreground">2016 - 2020</span>
              </div>
              <p className="text-lg">University of Technology</p>
              <p className="text-base mt-2">Graduated with Honors, GPA: 3.8/4.0</p>
            </div>
          </section>

          {/* Skills */}
          <section className="space-y-6">
            <h2 className="text-3xl font-agrandir">Skills</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 rounded-3xl bg-orange/20 border-2 border-orange">
                <h3 className="text-xl font-agrandir mb-3">Programming Languages</h3>
                <p className="text-base">JavaScript, TypeScript, Python, Go, SQL</p>
              </div>
              <div className="p-6 rounded-3xl bg-sage/20 border-2 border-sage">
                <h3 className="text-xl font-agrandir mb-3">Frameworks & Libraries</h3>
                <p className="text-base">React, Node.js, Express, FastAPI, Next.js</p>
              </div>
              <div className="p-6 rounded-3xl bg-purple/20 border-2 border-purple">
                <h3 className="text-xl font-agrandir mb-3">Tools & Platforms</h3>
                <p className="text-base">Git, Docker, AWS, PostgreSQL, MongoDB</p>
              </div>
              <div className="p-6 rounded-3xl bg-blue/20 border-2 border-blue">
                <h3 className="text-xl font-agrandir mb-3">Soft Skills</h3>
                <p className="text-base">Team Leadership, Communication, Problem-Solving</p>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="space-y-6">
            <h2 className="text-3xl font-agrandir">Certifications</h2>
            
            <div className="space-y-4">
              <div className="p-6 rounded-3xl border-2 border-border">
                <p className="text-lg">AWS Certified Solutions Architect</p>
                <span className="text-muted-foreground">2023</span>
              </div>
              <div className="p-6 rounded-3xl border-2 border-border">
                <p className="text-lg">Google Cloud Professional Developer</p>
                <span className="text-muted-foreground">2022</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CV;
