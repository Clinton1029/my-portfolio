"use client";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";


export default function BackgroundParticles() {
  const particlesInit = async (engine: any) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 -z-10"
      options={{
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          color: { value: ["#60A5FA", "#A78BFA", "#F472B6"] }, // blue/purple/pink theme
          links: {
            enable: true,
            color: "#ffffff",
            distance: 150,
            opacity: 0.15,
            width: 1,
          },
          move: { enable: true, speed: 0.15 }, // 🔑 very slow motion
          number: { value: 60 },
          opacity: { value: 0.4 },
          size: { value: { min: 1, max: 3 } },
          shape: { type: "circle" },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: { repulse: { distance: 100 } },
        },
      }}
    />
  );
}
