import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SeniorDesign = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-10 px-4">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
            className="rounded-full"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-4xl md:text-6xl font-agrandir">
            Parametric Design: PalmBand for Occupational Therapists
          </h1>
        </div>

        <div className="rounded-3xl border-2 border-sage overflow-hidden bg-background">
          <iframe
            src="/strap-cad.html"
            title="Parametric Strap CAD Viewer"
            className="w-full h-[85vh] border-0"
          />
        </div>
      </div>
    </div>
  );
};

export default SeniorDesign;
