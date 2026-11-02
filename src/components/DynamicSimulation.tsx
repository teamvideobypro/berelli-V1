"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  RotateCcw,
  Compass,
  Activity,
  Layers,
  Sliders,
  Check,
} from "lucide-react";

export const DynamicSimulation: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [rotationAngle, setRotationAngle] = useState<number>(142);
  const [tiltAngle, setTiltAngle] = useState<number>(-18);
  const [loadLbs, setLoadLbs] = useState<number>(450);

  // Auto increment angle when playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setRotationAngle((prev) => (prev >= 360 ? 0 : prev + 1));
    }, 70);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section
      id="specifications"
      className="relative py-20 sm:py-28 bg-[#0a0a0a] border-b border-[#262626] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-neutral-800">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-orange uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
              <span>[ 02 / DYNAMIC SIMULATION ]</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              360° Articulation &amp; Table Rail Clamping in Motion
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
            <span>REAL-TIME KINEMATICS ENGINE</span>
          </div>
        </div>

        {/* Medical Workstation Console Frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl bg-[#0f0f0f] border border-[#2b2b2b] p-4 sm:p-7 shadow-2xl overflow-hidden"
        >
          {/* Top Console Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-neutral-800 text-xs font-mono">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-neutral-700" />
                <span className="w-3 h-3 rounded-full bg-neutral-700" />
                <span className="w-3 h-3 rounded-full bg-brand-orange" />
              </div>
              <span className="text-neutral-300 font-semibold">
                OR WORKSTATION CONSOLE v2.4
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#181818] hover:bg-[#222222] border border-neutral-700 text-white transition-colors"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3 h-3 text-amber-400" />
                    <span>PAUSE SIM</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 text-emerald-400" />
                    <span>PLAY SIM</span>
                  </>
                )}
              </button>
              <button
                onClick={() => {
                  setRotationAngle(0);
                  setTiltAngle(0);
                }}
                className="p-1 rounded bg-[#181818] hover:bg-[#222222] border border-neutral-700 text-neutral-400 hover:text-white"
                title="Reset orientation"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Central 3D Simulation Viewport with Interactive HUD Overlay */}
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-black border border-neutral-800">
            <Image
              src="/images/simulation-3d.png"
              alt="3D Operating Room Articulation Simulation"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover object-center filter contrast-105"
            />
            <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

            {/* Top Left Live Angle Readouts */}
            <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-neutral-800 p-3 rounded-lg text-xs font-mono space-y-1.5 max-w-[200px] sm:max-w-xs shadow-lg">
              <div className="text-[10px] text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
                <Compass className="w-3 h-3 text-brand-orange" />
                <span>TRI-AXIAL TELEMETRY</span>
              </div>
              <div className="flex items-center justify-between text-neutral-200">
                <span>ROTATION:</span>
                <span className="text-white font-bold">{rotationAngle}° / 360°</span>
              </div>
              <div className="flex items-center justify-between text-neutral-200">
                <span>TRENDELENBURG:</span>
                <span className="text-cyan-400 font-bold">{tiltAngle}°</span>
              </div>
              <div className="flex items-center justify-between text-neutral-200">
                <span>LOAD TEST:</span>
                <span className="text-emerald-400 font-bold">{loadLbs} LBS</span>
              </div>
            </div>

            {/* Bottom Right Floating Sterile Field Status */}
            <div className="absolute bottom-4 right-4 hidden sm:flex items-center gap-2 bg-black/80 backdrop-blur-md border border-neutral-800 px-3.5 py-2 rounded-lg text-xs font-mono shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-neutral-300">CLAMP JAWS: LOCKED TO RAIL</span>
              <span className="text-neutral-500">|</span>
              <span className="text-brand-orange font-semibold">ZERO DRIFT</span>
            </div>
          </div>

          {/* Interactive Simulation Controls & Oscilloscope Timeline */}
          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-neutral-800/80">
            {/* Control 1: Articulation Rotation Slider */}
            <div className="bg-[#141414] border border-neutral-800 p-3.5 rounded-lg flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-2">
                <span className="flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-brand-orange" />
                  <span>ABDUCTION ANGLE</span>
                </span>
                <span className="text-white font-bold">{rotationAngle}°</span>
              </div>
              <input
                type="range"
                min="0"
                max="360"
                value={rotationAngle}
                onChange={(e) => {
                  setIsPlaying(false);
                  setRotationAngle(Number(e.target.value));
                }}
                className="w-full accent-brand-orange cursor-pointer bg-neutral-800 h-1.5 rounded-lg"
              />
            </div>

            {/* Control 2: Trendelenburg Tilt Angle */}
            <div className="bg-[#141414] border border-neutral-800 p-3.5 rounded-lg flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-2">
                <span className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-cyan-400" />
                  <span>TILT DEFLECTION</span>
                </span>
                <span className="text-white font-bold">{tiltAngle}°</span>
              </div>
              <input
                type="range"
                min="-45"
                max="45"
                value={tiltAngle}
                onChange={(e) => setTiltAngle(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer bg-neutral-800 h-1.5 rounded-lg"
              />
            </div>

            {/* Control 3: Dynamic Bariatric Load */}
            <div className="bg-[#141414] border border-neutral-800 p-3.5 rounded-lg flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-2">
                <span className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-emerald-400" />
                  <span>PATIENT LOAD RATING</span>
                </span>
                <span className="text-white font-bold">{loadLbs} LBS</span>
              </div>
              <input
                type="range"
                min="100"
                max="800"
                step="25"
                value={loadLbs}
                onChange={(e) => setLoadLbs(Number(e.target.value))}
                className="w-full accent-emerald-400 cursor-pointer bg-neutral-800 h-1.5 rounded-lg"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
