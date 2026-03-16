import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const SeniorDesign = () => {
  const navigate = useNavigate();
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf5f5f0);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(3, 2, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 7);
    scene.add(directionalLight);

    const backLight = new THREE.DirectionalLight(0xffffff, 0.3);
    backLight.position.set(-5, 5, -5);
    scene.add(backLight);

    // Grid helper
    const gridHelper = new THREE.GridHelper(10, 20, 0xcccccc, 0xe0e0e0);
    scene.add(gridHelper);

    // Placeholder geometry - wrist splint approximation
    const group = new THREE.Group();

    // Base splint shape using extruded shape
    const splintShape = new THREE.Shape();
    splintShape.moveTo(-0.8, -1.5);
    splintShape.quadraticCurveTo(-1.2, 0, -0.6, 1.5);
    splintShape.quadraticCurveTo(0, 2.2, 0.6, 1.5);
    splintShape.quadraticCurveTo(1.2, 0, 0.8, -1.5);
    splintShape.quadraticCurveTo(0, -1.8, -0.8, -1.5);

    const extrudeSettings = {
      steps: 1,
      depth: 0.15,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.05,
      bevelSegments: 3,
    };

    const splintGeometry = new THREE.ExtrudeGeometry(splintShape, extrudeSettings);
    const splintMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xf5efe6,
      transparent: true,
      opacity: 0.85,
      roughness: 0.3,
      metalness: 0.0,
      clearcoat: 0.3,
    });

    const splintMesh = new THREE.Mesh(splintGeometry, splintMaterial);
    group.add(splintMesh);

    // Add ventilation holes
    const holeMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xe8ddd0,
      roughness: 0.5,
    });

    for (let row = -1.2; row <= 1.2; row += 0.3) {
      for (let col = -0.5; col <= 0.5; col += 0.3) {
        const holeGeometry = new THREE.CylinderGeometry(0.04, 0.04, 0.3, 8);
        const hole = new THREE.Mesh(holeGeometry, holeMaterial);
        hole.position.set(col, row, 0.1);
        hole.rotation.x = Math.PI / 2;
        group.add(hole);
      }
    }

    group.rotation.x = -Math.PI / 6;
    scene.add(group);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

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

        <p className="text-lg text-muted-foreground">Work in Progress — Interactive JSCAD Viewer</p>

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

        <div className="p-6 rounded-3xl bg-sage/20 border-2 border-sage">
          <h3 className="text-2xl font-agrandir mb-4">About This Project</h3>
          <p className="text-base">
            This senior design project is currently in progress. The interactive 3D viewer above will be updated with the final JSCAD parametric model as the design evolves. Check back for updates!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeniorDesign;
