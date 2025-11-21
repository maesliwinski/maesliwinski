import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-12 animate-fade-in">
        <h1 className="text-6xl md:text-8xl font-agrandir font-normal tracking-tight">
          Mae Sliwinski
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => navigate("/about")}
            className="min-w-[200px] h-14 rounded-full bg-sage hover:bg-sage/80 text-foreground text-lg font-normal"
          >
            About Me
          </Button>
          <Button
            size="lg"
            onClick={() => navigate("/projects")}
            className="min-w-[200px] h-14 rounded-full bg-purple hover:bg-purple/80 text-foreground text-lg font-normal"
          >
            Projects
          </Button>
          <Button
            size="lg"
            onClick={() => navigate("/cv")}
            className="min-w-[200px] h-14 rounded-full bg-blue hover:bg-blue/80 text-foreground text-lg font-normal"
          >
            CV
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
