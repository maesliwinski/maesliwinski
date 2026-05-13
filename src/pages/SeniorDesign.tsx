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
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-agrandir">
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

        {/* Printing Guide */}
        <div className="max-w-3xl space-y-8 pb-16">
          <h2 className="text-3xl sm:text-4xl font-agrandir">How to Print</h2>

          <p className="text-base text-muted-foreground">
            Load filament into the printer following the prompts on the screen, and make sure the correct filament is selected in your slicer. For this device I recommend <strong>TPU 95A</strong> — the flexibility makes the band comfortable and the magnet pocket secure.
          </p>

          {/* Materials */}
          <div className="p-4 sm:p-6 rounded-3xl bg-sage/20 border-2 border-sage space-y-3">
            <h3 className="text-xl font-agrandir">Recommended Materials</h3>
            <ul className="space-y-2 text-base">
              <li>
                <strong>Magnets — </strong>
                <a
                  href="https://www.amazon.com/TRYMAG-Neodymium-Magnets-Whitboard-Scientific/dp/B09XV87SV6?th=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-sage-dk transition-colors"
                >
                  TRYMAG Neodymium Magnets (Amazon)
                </a>
              </li>
              <li>
                <strong>TPU 95A Filament — </strong>
                <a
                  href="https://www.amazon.com/SUNLU-TPU-Filament-1-75mm-Flexible/dp/B0BXNWK6NS?ref_=ast_sto_dp&th=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-sage-dk transition-colors"
                >
                  SUNLU TPU 95A 1.75mm (Amazon)
                </a>
                {" "}— any brand of TPU 95A will work
              </li>
            </ul>
          </div>

          {/* Steps */}
          <div className="space-y-4">
            {[
              {
                step: 1,
                text: 'Click "Download Printable File" above.',
              },
              {
                step: 2,
                text: "Open Bambu Slicer and click File > Import.",
              },
              {
                step: 3,
                text: 'Toggle on "Advanced" Settings if you have not already. There you can change the infill pattern and infill percentage, which affects thickness. Refer to the orange text in the CAD viewer for the values I found to be ideal.',
              },
              {
                step: 4,
                text: 'Click "Slice Plate" at the top right.',
              },
              {
                step: 5,
                text: "On the side bar, scroll down until you see the last layer before filament is deposited over the magnet hole. Right-click and select Add Pause.",
              },
              {
                step: 6,
                text: 'On the top left bar, click "Prepare" and re-slice the plate using the button at the top right.',
              },
              {
                step: 7,
                text: 'Click "Print Plate".',
              },
              {
                step: 8,
                text: "The printer will automatically pause. Set a timer and come back to insert the magnets into the print — all facing the same direction. When you fold the band over, the opposite poles will attract.",
              },
              {
                step: 9,
                text: "Once the magnets are in, unpause the print and allow it to finish.",
              },
            ].map(({ step, text }) => (
              <div key={step} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange/30 border-2 border-orange flex items-center justify-center text-sm font-bold">
                  {step}
                </span>
                <p className="text-base pt-1">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeniorDesign;
