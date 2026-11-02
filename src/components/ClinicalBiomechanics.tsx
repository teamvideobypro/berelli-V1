"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ClinicalBiomechanicsProps {
  onOpenTolerancesModal: () => void;
}

export const ClinicalBiomechanics: React.FC<ClinicalBiomechanicsProps> = ({
  onOpenTolerancesModal,
}) => {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 bg-[#f8fafc] text-slate-900 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Sticky Narrative Block matching Image 2 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Tag */}
            <div className="inline-block text-xs font-mono font-bold text-brand-orange uppercase tracking-wider">
              [ 01 / CLINICAL BIOMECHANICS ]
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-950 leading-tight">
              Engineered for <br />
              Patient Safety &amp; <br />
              <span className="text-brand-orange">Zero-Drift Locking.</span>
            </h2>

            {/* Narrative text */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Operating room positioning failures lead to neuropraxia,
              compartment syndrome, and surgical delays. Bereli positioners are
              built around micro-machined radial teeth couplings that lock securely
              at any angle under full bariatric loads.
            </p>

            {/* Underline Action Link */}
            <div className="pt-2">
              <button
                onClick={onOpenTolerancesModal}
                className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-slate-950 border-b-2 border-slate-950 pb-1 hover:text-brand-orange hover:border-brand-orange transition-colors group"
              >
                <span>VIEW ENGINEERING TOLERANCES</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Visual Stage matching Image 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="rounded-xl bg-white border border-slate-200 p-2 sm:p-3 shadow-xl">
              {/* Photo viewport */}
              <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-slate-100">
                <Image
                  src="/images/biomechanics-detail.png"
                  alt="Bereli Mechanical Gas-Spring Joint and Gel Boot Detail"
                  fill
                  sizes="(max-width: 1024px) 100vw, 720px"
                  className="object-cover object-center filter contrast-105"
                />

                {/* Top Right Floating Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-lg p-3 shadow-md max-w-xs text-left">
                  <div className="text-[11px] font-mono font-bold text-brand-orange uppercase tracking-wider">
                    PNEUMATIC ASSIST • 350N
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 mt-0.5">
                    Counterbalances bariatric limbs effortlessly
                  </div>
                </div>

                {/* Bottom Left Floating Badge */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-lg p-3 shadow-md max-w-xs text-left">
                  <div className="text-[11px] font-mono font-bold text-slate-900 uppercase tracking-wider">
                    RADIAL GEL PADDING
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 mt-0.5">
                    Zero peroneal nerve compression profile
                  </div>
                </div>
              </div>

              {/* Sub-bar below image */}
              <div className="mt-3 px-2 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>SPEC: ISO 13485:2016 CERTIFIED</span>
                <span className="text-slate-800 font-bold">
                  TOLERANCE: ±0.05mm MICRON LOCK
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
