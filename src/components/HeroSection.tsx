"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Activity, Cpu } from "lucide-react";

interface HeroSectionProps {
  onOpenQuoteModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative overflow-hidden bg-medical-dark pt-12 pb-20 md:pt-20 md:pb-28 border-b border-[#1c1c1c]">
      {/* Background Subtle Tech Grid & Radial Glow */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-orange/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges & Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-3 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-neutral-800 text-[11px] font-mono text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
            <span>CLINICAL OR HARDWARE</span>
            <span className="text-neutral-600">/</span>
            <span className="text-neutral-400">CLASS II MEDICAL DEVICE</span>
          </div>
        </motion.div>

        {/* Main Headings */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]"
          >
            Precision Leg Holder <br />
            Positioners for{" "}
            <span className="text-brand-orange inline-block">Surgery Centers.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-base sm:text-lg lg:text-xl text-neutral-300 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            Engineered for rapid intraoperative adjustability, zero slip drift, and
            uncompromised patient neurovascular safety during arthroscopy, lithotomy,
            and pelvic reconstructions.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5"
          >
            <button
              onClick={onOpenQuoteModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded text-xs sm:text-sm font-mono font-bold tracking-wider text-white bg-brand-orange hover:bg-brand-orange-hover transition-all shadow-glowOrange group"
            >
              <span>APPLY FOR DEALER ACCOUNT</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded text-xs sm:text-sm font-mono font-semibold text-neutral-200 bg-[#141414] hover:bg-[#1f1f1f] border border-neutral-800 transition-colors"
            >
              <span>CONTACT SALES</span>
            </a>
          </motion.div>
        </div>

        {/* Central Modular Hardware Stage with Flanking Telemetry HUD Panes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 sm:mt-16 relative max-w-5xl mx-auto"
        >
          {/* Main Stage Card Container */}
          <div className="relative rounded-2xl bg-[#0e0e0e] border border-[#262626] p-4 sm:p-8 lg:p-12 overflow-hidden shadow-2xl">
            {/* Top Stage Control Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-800/80 text-[11px] font-mono text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-white font-medium">VIEWPORT: 3D HARDWARE RIG</span>
              </div>
              <div className="hidden sm:flex items-center gap-4 text-neutral-400">
                <span>MODEL: OMNIGRIP-800X</span>
                <span>STATUS: DOCKED</span>
                <span>DEG: 0.00° / ZERO-DRIFT</span>
              </div>
            </div>

            {/* Corner Crosshairs */}
            <div className="absolute top-3 left-3 text-neutral-600 font-mono text-xs select-none">+</div>
            <div className="absolute top-3 right-3 text-neutral-600 font-mono text-xs select-none">+</div>
            <div className="absolute bottom-3 left-3 text-neutral-600 font-mono text-xs select-none">+</div>
            <div className="absolute bottom-3 right-3 text-neutral-600 font-mono text-xs select-none">+</div>

            {/* Stage Center Graphic Viewport */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full flex items-center justify-center">
              <Image
                src="/images/hero-omnigrip.png"
                alt="Bereli OmniGrip Surgical Leg Holder Clamp and Boot Mechanism"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)] filter contrast-105"
              />

              {/* Floating Left Telemetry HUD Badge */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="absolute left-2 sm:left-6 bottom-4 sm:bottom-8 bg-[#121212]/90 backdrop-blur-md border border-neutral-700/70 p-3 sm:p-4 rounded-lg shadow-xl max-w-[210px] sm:max-w-xs"
              >
                <div className="flex items-center gap-2 text-[10px] font-mono text-brand-orange uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>MATERIAL SPECIFICATION</span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white tracking-tight">
                  MAT: 316L Surgical Stainless Steel
                </div>
                <div className="hidden sm:block text-[11px] text-neutral-400 mt-1">
                  Billet machined alloy, passivated for IPX7 sterilizer cycles.
                </div>
              </motion.div>

              {/* Floating Right Telemetry HUD Badge */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="absolute right-2 sm:right-6 top-4 sm:top-8 bg-[#121212]/90 backdrop-blur-md border border-neutral-700/70 p-3 sm:p-4 rounded-lg shadow-xl max-w-[210px] sm:max-w-xs text-right"
              >
                <div className="flex items-center justify-end gap-2 text-[10px] font-mono text-cyan-400 uppercase tracking-wider mb-1">
                  <Activity className="w-3.5 h-3.5" />
                  <span>LIFT-ASSIST INTEGRITY</span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white tracking-tight">
                  GAS SPRING ASSIST: 350N
                </div>
                <div className="hidden sm:block text-[11px] text-neutral-400 mt-1">
                  Effortless counterbalance across -90° to +35° Trendelenburg angles.
                </div>
              </motion.div>
            </div>

            {/* Bottom Telemetry Bar */}
            <div className="mt-4 pt-3 border-t border-neutral-800/80 flex flex-wrap items-center justify-between text-[11px] font-mono text-neutral-400">
              <div className="flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-brand-orange" />
                <span>MICRO-MACHINED RADIAL COUPLING</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-400">ACTIVE INTRAOPERATIVE LOCK</span>
                <span className="text-neutral-600">•</span>
                <span className="text-neutral-300">TOLERANCE ±0.05MM</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
