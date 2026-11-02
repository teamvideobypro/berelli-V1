"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onOpenQuoteModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative bg-[#0a0a0a] text-white pt-12 pb-16 sm:pt-16 sm:pb-24 border-b border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 2-Column Headline & Action Bar matching Frame 5 (2).jpg */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-10 sm:mb-12">
          {/* Left Column: Heading Structure */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.08]">
              Precision Leg Holder <br />
              Positioners for <br />
              <span className="text-brand-orange inline-block border-b-2 sm:border-b-4 border-brand-orange pb-1">
                Surgery Centers.
              </span>
            </h1>
          </motion.div>

          {/* Right Column: Narrative Paragraph & Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between h-full pt-2"
          >
            <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed max-w-xl mb-6">
              Engineered for rapid intraoperative adjustability, zero slip drift,
              and uncompromised patient neurovascular safety during arthroscopy,
              lithotomy, and pelvic reconstructions.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center justify-center px-6 py-3 rounded-md text-xs font-mono font-bold tracking-wider text-white bg-brand-orange hover:bg-brand-orange-hover transition-colors shadow-glowOrange"
              >
                APPLY FOR DEALER ACCOUNT
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md text-xs font-mono font-bold tracking-wider text-neutral-200 bg-[#161616] hover:bg-[#222222] border border-neutral-700/80 transition-colors"
              >
                CONTACT SALES
              </a>
            </div>
          </motion.div>
        </div>

        {/* Large Hardware Viewport Stage matching Frame 5 (2).jpg */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 35 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-xl bg-[#0d0d0d] border border-[#262626] p-2 sm:p-5 shadow-2xl overflow-hidden"
        >
          <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden bg-black/40 flex items-center justify-center">
            <Image
              src="/images/hero-omnigrip.png"
              alt="Bereli OmniGrip Surgical Leg Holder Clamp and Boot Mechanism"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-contain filter contrast-105"
            />

            {/* Subtle Center Reticle Ring matching Frame 5 */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-brand-orange/40 flex items-center justify-center animate-pulse">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
