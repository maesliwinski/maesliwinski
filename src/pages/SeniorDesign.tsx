import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Slider } from "@/components/ui/slider";

// Convert inches to mm for display, but we work in inches for the 3D scene
const INCH_TO_MM = 25.4;

const SeniorDesign = () => {
  const navigate = useNavigate();
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    controls: OrbitControls;
    mesh: THREE.Mesh | null;
  } | null>(null);

  const [length, setLength] = useState(6.5); // inches
  const [width, setWidth] = useState(5.5); // inches
  const [thickness, setThickness] = useState(2); // mm

  const updateGeometry = useCallback(() => {
    const ref = sceneRef.current;
    if (!ref) return;

    if (ref.mesh) {
      ref.scene.remove(ref.mesh);
      ref.mesh.geometry.dispose();
    }

    const thicknessInches = thickness / INCH_TO_MM;
    const geometry = new THREE.BoxGeometry(length, thicknessInches, width);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xf5efe6,
      transparent: true,
      opacity: 0.9,
      roughness: 0.3,
      metalness: 0.0,
      clearcoat: 0.3,
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.y = thicknessInches / 2;
    ref.scene.add(mesh);
    ref.mesh = mesh;
  }, [length, width, thickness]);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const w = container.clientWidth;
    const h = container.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf5f5f0);

    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 1000);
    camera.position.set(8, 5, 10);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);
    const backLight = new THREE.DirectionalLight(0xffffff, 0.3);
    backLight.position.set(-5, 5, -5);
    scene.add(backLight);

    const gridHelper = new THREE.GridHelper(20, 40, 0xcccccc, 0xe0e0e0);
    scene.add(gridHelper);

    sceneRef.current = { scene, camera, renderer, controls, mesh: null };

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const nw = container.clientWidth;
      const nh = container.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeChild(renderer.domElement);
      renderer.dispose();
      sceneRef.current = null;
    };
  }, []);

  useEffect(() => {
    updateGeometry();
  }, [updateGeometry]);

  const downloadSTL = () => {
    const ref = sceneRef.current;
    if (!ref?.mesh) return;

    const geometry = ref.mesh.geometry as THREE.BoxGeometry;
    const pos = geometry.attributes.position;
    const idx = geometry.index;

    let stl = "solid model\n";

    const vA = new THREE.Vector3();
    const vB = new THREE.Vector3();
    const vC = new THREE.Vector3();
    const normal = new THREE.Vector3();
    const cb = new THREE.Vector3();
    const ab = new THREE.Vector3();

    // Scale to mm for STL
    const scale = INCH_TO_MM;

    if (idx) {
      for (let i = 0; i < idx.count; i += 3) {
        vA.fromBufferAttribute(pos, idx.getX(i)).multiplyScalar(scale);
        vB.fromBufferAttribute(pos, idx.getX(i + 1)).multiplyScalar(scale);
        vC.fromBufferAttribute(pos, idx.getX(i + 2)).multiplyScalar(scale);

        cb.subVectors(vC, vB);
        ab.subVectors(vA, vB);
        normal.crossVectors(cb, ab).normalize();

        stl += `  facet normal ${normal.x} ${normal.y} ${normal.z}\n`;
        stl += `    outer loop\n`;
        stl += `      vertex ${vA.x} ${vA.y} ${vA.z}\n`;
        stl += `      vertex ${vB.x} ${vB.y} ${vB.z}\n`;
        stl += `      vertex ${vC.x} ${vC.y} ${vC.z}\n`;
        stl += `    endloop\n`;
        stl += `  endfacet\n`;
      }
    }

    stl += "endsolid model\n";

    const blob = new Blob([stl], { type: "application/octet-stream" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `orthosis_${length}x${width}x${thickness}mm.stl`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
            className="rounded-full"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-5xl md:text-7xl font-agrandir">Senior Design Project</h1>
        </div>

        <p className="text-lg text-muted-foreground">Work in Progress</p>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {["CAD (SolidWorks)", "Parametric Modeling", "JavaScript CAD", "3D Printing (Bambu)"].map((tag) => (
              <span key={tag} className="px-3 py-1 text-sm rounded-full bg-sage/20 border border-sage">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 3D Viewer */}
        <div className="rounded-3xl border-2 border-sage overflow-hidden bg-background">
          <div className="p-4 border-b border-sage/30">
            <h3 className="text-lg font-agrandir">3D Model Viewer</h3>
            <p className="text-sm text-muted-foreground">Click and drag to rotate • Scroll to zoom • Right-click to pan</p>
          </div>
          <div ref={mountRef} className="w-full h-[500px] md:h-[600px]" />
        </div>

        {/* Parameter Controls */}
        <div className="p-6 rounded-3xl bg-sage/20 border-2 border-sage space-y-6">
          <h3 className="text-2xl font-agrandir">Adjust Parameters</h3>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Length: {length.toFixed(1)} in</label>
              <Slider
                value={[length]}
                onValueChange={(v) => setLength(v[0])}
                min={1}
                max={12}
                step={0.1}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Width: {width.toFixed(1)} in</label>
              <Slider
                value={[width]}
                onValueChange={(v) => setWidth(v[0])}
                min={1}
                max={12}
                step={0.1}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Thickness: {thickness.toFixed(1)} mm</label>
              <Slider
                value={[thickness]}
                onValueChange={(v) => setThickness(v[0])}
                min={0.5}
                max={10}
                step={0.1}
              />
            </div>
          </div>

          <Button onClick={downloadSTL} className="gap-2">
            <Download className="w-4 h-4" />
            Download STL
          </Button>
        </div>

        <div className="p-6 rounded-3xl bg-sage/20 border-2 border-sage">
          <h3 className="text-2xl font-agrandir mb-4">About This Project</h3>
          <p className="text-base">
            My senior design project is currently under construction. Check back later!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeniorDesign;
