import { Card, CardContent } from "@/components/ui/card";
import maePhoto from "@/assets/mae.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            About Me
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden border-border/50 bg-card/80 backdrop-blur">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-[300px_1fr] gap-8 items-start">
                <div className="mx-auto md:mx-0">
                  <img
                    src={maePhoto}
                    alt="Mae Sliwinski"
                    className="w-full max-w-[300px] rounded-lg shadow-lg"
                  />
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      Madeline Mae Sliwinski
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      I am a senior studying Mechanical Engineering at Cornell University, and I love applying human-factors engineering design principles to my experiences from coursework, research, and on-the-job scenarios.
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      My specialties lie in design, product development, and people management. I've led and managed teams from 50-120+ people to create and implement solutions that are thoughtful, innovative, and drive productivity.
                    </p>
                  </div>

                  <div className="pt-4">
                    <h4 className="text-xl font-semibold mb-3 text-foreground">Education</h4>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-foreground">Bachelor of Science, Mechanical Engineering</span><br />
                      Cornell University, College of Engineering<br />
                      Expected Graduation: May 2026
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
