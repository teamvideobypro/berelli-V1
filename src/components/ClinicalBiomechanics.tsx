"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Cog,
  ShieldAlert,
  Weight,
  Sparkles,
  Sliders,
  CheckCircle,
  ExternalLink,
} from "lucide-react";

interface ClinicalBiomechanicsProps {
  onOpenTolerancesModal: () => void;
}

export const ClinicalBiomechanics: React.FC<ClinicalBiomechanicsProps> = ({
  onOpenTolerancesModal,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const diagnosticFeatures = [
    {
      title: "Zero-Drift Radial Coupling",
      category: "MECHANICAL LOCK",
      spec: "±0.05mm TOLERANCE",
      desc: "Micro-machined radial teeth interlock under cam load, preventing the gradual downward drift common in generic friction-clamp holders.",
      icon: Cog,
    },
    {
      title: "Peroneal Nerve Protection",
      category: "NEUROLOGICAL SAFETY",
      spec: "< 32 mmHg PEAK PRESSURE",
      desc: "Anatomical viscoelastic calf cradles eliminate focal pressure on the fibular head, protecting against intraoperative neuropraxia.",
      icon: ShieldAlert,
    },
    {
      title: "Bariatric Gas-Assist Spring",
      category: "LOAD CAPABILITY",
      spec: "800 LBS MAX PATIENT WEIGHT",
      desc: "Counterbalanced 350N pneumatic cylinder allows circulating staff to lift and adjust heavy bariatric patient limbs with one hand.",
      icon: Weight,
    },
    {
      title: "Sterile Drape Single-Action Handle",
      category: "WORKFLOW EFFICIENCY",
      spec: "360° TRI-AXIAL FREEDOM",
      desc: "Complete intraoperative abduction, adduction, and lithotomy elevation adjustment handled effortlessly through surgical draping.",
      icon: Sliders,
    },
  ];

  return (
    <section id="about" className="relative py-20 sm:py-28 bg-[#0a0a0a] border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Sticky Narrative Block */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              {/* Section Tag */}
              <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-orange uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-brand-orange" />
                <span>[ 01 / CLINICAL BIOMECHANICS ]</span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Engineered for <br />
                Patient Safety &amp; <br />
                <span className="text-brand-orange">Zero-Drift Locking.</span>
              </h2>

              {/* Narrative Description */}
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                Operating room positioning failures lead to neuropraxia,
                compartment syndrome, and surgical delays. Bereli positioners are
                built around micro-machined radial teeth couplings that lock
                securely at any angle under full bariatric loads.
              </p>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenTolerancesModal}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded text-xs font-mono font-bold tracking-wider text-white bg-[#161616] hover:bg-[#202020] border border-neutral-700 hover:border-brand-orange transition-all group"
                >
                  <span>VIEW ENGINEERING TOLERANCES</span>
                  <ExternalLink className="w-3.5 h-3.5 text-brand-orange transition-transform group-hover:scale-110" />
                </button>
              </div>

              {/* Telemetry Pills */}
              <div className="pt-4 border-t border-neutral-800 space-y-2.5 font-mono text-xs">
                <div className="flex items-center justify-between p-2.5 rounded bg-[#111111] border border-neutral-800">
                  <span className="text-neutral-400">SPEC:</span>
                  <span className="text-emerald-400 font-semibold">ISO 13485:2016 CERTIFIED</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded bg-[#111111] border border-neutral-800">
                  <span className="text-neutral-400">TOLERANCE:</span>
                  <span className="text-cyan-400 font-semibold">±0.05mm MICRON LOCK</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: High-Res Visual Stage & Diagnostic Grid */}
          <div className="lg:col-span-7 space-y-8">
            {/* Visual Mechanical Detail Stage */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl bg-[#0f0f0f] border border-[#262626] overflow-hidden shadow-2xl p-4 sm:p-6"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800 text-[11px] font-mono text-neutral-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>MICRON INSPECTION: RADIAL TEETH &amp; JOINT</span>
                </div>
                <span>FOV: 120MM MAGNIFIED</span>
              </div>

              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-black/40">
                <Image
                  src="/images/biomechanics-detail.png"
                  alt="Bereli Mechanical Gas-Spring Joint and Gel Boot Detail"
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover object-center filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono bg-black/75 backdrop-blur-md px-3.5 py-2 rounded border border-neutral-700/60">
                  <span className="text-neutral-300">RADIAL LOCKING PINION ENGAGEMENT</span>
                  <span className="text-brand-orange font-semibold">100% NO-SLIP DIRECT FIT</span>
                </div>
              </div>
            </motion.div>

            {/* 2x2 Modular Diagnostic Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {diagnosticFeatures.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{
                      duration: 0.6,
                      delay: idx * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{ y: -3 }}
                    className="rounded-xl bg-[#121212] border border-[#262626] p-5 flex flex-col justify-between hover:border-neutral-600 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 mb-2">
                        <span>{item.category}</span>
                        <span className="text-brand-orange font-semibold">{item.spec}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-4 h-4 text-brand-orange shrink-0" />
                        <h3 className="text-sm font-bold text-white tracking-tight">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                      <span>VERIFIED SPECIFICATION</span>
                      <CheckCircle className="w-3 h-3 text-emerald-400" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
