"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const DynamicSimulation: React.FC = () => {
  return (
    <section
      id="specifications"
      className="py-16 sm:py-24 bg-[#0a0a0a] text-white border-b border-[#222] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching Framer screenshot */}
        <div className="mb-8">
          <div className="inline-block text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2">
            [ 02 / DYNAMIC SIMULATION ]
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white">
            360° Articulation &amp; Table Rail Clamping in Motion
          </h2>
        </div>

        {/* Operating Room Video / Simulation Viewport */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-xl bg-[#111] border border-[#262626] p-2 sm:p-4 overflow-hidden shadow-2xl"
        >
          <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden bg-black/60">
            <Image
              src="/images/simulation-3d.png"
              alt="3D Operating Room Articulation Simulation"
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-center filter contrast-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
