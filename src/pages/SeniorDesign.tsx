import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import printStep3 from "@/assets/print-step3-settings.png";
import printStep5 from "@/assets/print-step5-pause.png";
import printStep7 from "@/assets/print-step7-slice.png";
import palmband1 from "@/assets/palmband-action-1.png";
import palmband2 from "@/assets/palmband-action-2.png";
import palmband3 from "@/assets/palmband-action-3.png";
import palmband4 from "@/assets/palmband-action-4.png";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

const SeniorDesign = () => {
  const navigate = useNavigate();
  const introReveal = useScrollReveal();

  const handleIframeMouseEnter = () => { document.body.style.overflow = "hidden"; };
  const handleIframeMouseLeave = () => { document.body.style.overflow = ""; };

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

        {/* Instructions + Gallery */}
        <div
          ref={introReveal.ref}
          className={`flex flex-col lg:flex-row gap-8 items-start opacity-0 ${introReveal.visible ? "animate-fade-in-up" : ""}`}
        >
          {/* Instructions text */}
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-agrandir">How to Customize</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Measure the width of the palm to inform slot spacing, and the circumference of the upper palm
              and add about an inch to an inch and a half extra to accommodate for the closure mechanism.
              Select slot size based on the width of the tool you intend to use, and adjust overall band
              thickness and the space between the thumb-index finger webbing accordingly.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Or, use one of my four preset options that are sized for a child and adults small to large.
              Then, click the <strong>"Download Printable File"</strong> button and follow the directions
              below for a tutorial on how to 3D print.
            </p>
          </div>

          {/* Photo gallery */}
          <div
            className={`flex-shrink-0 w-full lg:w-[420px] opacity-0 ${introReveal.visible ? "animate-fade-in-up-delay" : ""}`}
          >
            <div className="gallery-animated-frame rounded-3xl border-2 p-2 bg-background">
              <div className="grid grid-cols-2 gap-2">
                {[palmband1, palmband2, palmband3, palmband4].map((src, i) => (
                  <div key={i} className="aspect-square overflow-hidden rounded-2xl">
                    <img
                      src={src}
                      alt={`PalmBand in use, photo ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CAD Viewer */}
        <div
          className="rounded-3xl border-2 border-sage overflow-hidden bg-background"
          onMouseEnter={handleIframeMouseEnter}
          onMouseLeave={handleIframeMouseLeave}
        >
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
            Load filament into the printer following the prompts on the screen, and make sure the correct filament is selected in your slicer. For this device I recommend <strong>TPU 95A</strong> as the flexibility makes the band comfortable. It will feel similar to the sole of a rubber shoe.
          </p>

          {/* Materials */}
          <div className="p-4 sm:p-6 rounded-3xl bg-sage/20 border-2 border-sage space-y-3 relative">
            <h3 className="text-xl font-agrandir">Recommended Materials</h3>
            <ul className="space-y-2 text-base">
              <li>
                <strong>Magnets </strong>
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
                <strong>TPU 95A Filament </strong>
                <a
                  href="https://www.amazon.com/SUNLU-TPU-Filament-1-75mm-Flexible/dp/B0BXNWK6NS?ref_=ast_sto_dp&th=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-sage-dk transition-colors"
                >
                  SUNLU TPU 95A 1.75mm (Amazon)
                </a>
                {" "} but any brand of TPU 95A will work
              </li>
              <li>
                <strong>Adhesive Velcro </strong>
                for extra security{" "}
                <span className="text-muted-foreground">(Optional)</span>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground text-right">~$0.99 per PalmBand</p>
          </div>

          {/* Steps */}
          <div className="space-y-6">
            {[
              {
                step: 1,
                text: 'Click "Download Printable File" above.',
              },
              {
                step: 2,
                text: 'Open Bambu Studio and click File > Import > Import 3MF/STL/STEP/SVG/OBJ/AMF…',
              },
              {
                step: 3,
                text: 'Toggle on "Advanced" Settings if you have not already. There you can change the infill pattern and infill percentage, which affects thickness. Refer to the orange text in the CAD viewer for the values I found to be ideal.',
                image: printStep3,
              },
              {
                step: 4,
                text: 'Click "Slice Plate" at the top right.',
              },
              {
                step: 5,
                text: "On the side bar, scroll down until you see the last layer before filament is deposited over the magnet hole. Right-click and select Add Pause.",
                image: printStep5,
              },
              {
                step: 6,
                text: 'On the top left bar, click "Prepare" and re-slice the plate using the button at the top right.',
              },
              {
                step: 7,
                text: 'Click "Print Plate".',
                image: printStep7,
              },
              {
                step: 8,
                text: "The printer will automatically pause. Set a timer and come back to insert the magnets into the print. Make sure they are all facing the same direction, so when you fold the band over, the opposite poles will attract.",
              },
              {
                step: 9,
                text: "Once the magnets are in, unpause the print and allow it to finish.",
              },
            ].map(({ step, text, image }) => (
              <div key={step} className="space-y-3">
                <div className="flex gap-4 items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange/30 border-2 border-orange flex items-center justify-center text-sm font-bold">
                    {step}
                  </span>
                  <p className="text-base pt-1">{text}</p>
                </div>
                {image && (
                  <img
                    src={image}
                    alt={`Step ${step} screenshot`}
                    className="ml-12 rounded-2xl border border-border max-w-full sm:max-w-md"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeniorDesign;
