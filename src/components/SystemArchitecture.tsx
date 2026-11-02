"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Droplets,
  DollarSign,
  Maximize2,
  Database,
  CheckCircle2,
} from "lucide-react";

export const SystemArchitecture: React.FC = () => {
  const cards = [
    {
      id: "clinical-sterilization",
      track: "CLINICAL / OR THEATER",
      tag: "[ STERILE FIELD ]",
      trackColor: "bg-cyan-600",
      badgeColor: "text-cyan-700 bg-cyan-50 border-cyan-200",
      icon: Droplets,
      title: "Autoclave & Wipe-Down Sterilization (IPX7 Sealed)",
      desc: "Fully hermetically sealed mechanical joints prevent intraoperative fluid ingress and withstand harsh quaternary chemical wipe-downs without corrosion.",
      footerStatus: "VALIDATION: ASTM & ISO 10993 COMPLIANT",
      footerColor: "text-cyan-700",
    },
    {
      id: "commercial-margins",
      track: "DEALER & GPO COMMERCIAL TERMS",
      tag: "[ B2B MARGINS ]",
      trackColor: "bg-brand-orange",
      badgeColor: "text-brand-orange bg-orange-50 border-orange-200",
      icon: DollarSign,
      title: "Aggressive Wholesale Margins",
      desc: "Direct-from-manufacturer structure provides surgical supply distributors and equipment reps strong recurring profitability on capital units and accessory pad kits.",
      footerStatus: "TIER-1 MARGINS: UP TO 42% ON CAPITAL UNITS",
      footerColor: "text-brand-orange",
    },
    {
      id: "clinical-geometry",
      track: "PATIENT SAFETY & BIOMECHANICS",
      tag: "[ ERGONOMICS ]",
      trackColor: "bg-cyan-600",
      badgeColor: "text-cyan-700 bg-cyan-50 border-cyan-200",
      icon: Maximize2,
      title: "Lithotomy & Trendelenburg Safe Geometry",
      desc: "Synchronized gas springs counterbalance patient weight throughout aggressive tilt angles, maintaining anatomical axial alignment and surgical field visibility.",
      footerStatus: "TISSUE INTEGRITY: PEAK < 32 mmHg CAPILLARY",
      footerColor: "text-cyan-700",
    },
    {
      id: "commercial-logistics",
      track: "SUPPLY CHAIN & LOGISTICS",
      tag: "[ DISPATCH SPEED ]",
      trackColor: "bg-brand-orange",
      badgeColor: "text-brand-orange bg-orange-50 border-orange-200",
      icon: Database,
      title: "Automated Re-order EDI & Hospital Portal",
      desc: "Live digital inventory synchronization, tracking, and instant purchase order confirmations for fast delivery to ambulatory surgery center docks.",
      footerStatus: "DISPATCH GUARANTEE: 48-HOURS TO DOCK",
      footerColor: "text-brand-orange",
    },
  ];

  return (
    <section id="resources" className="py-20 sm:py-28 bg-[#f8fafc] text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-brand-orange uppercase tracking-wider mb-3">
            <span>[ 04 / SYSTEM ARCHITECTURE ]</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 mb-4">
            Clinical Excellence Contrasted with B2B Efficiency.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            How Bereli delivers dual-sided value: unmatched anatomical safety inside the sterile field,
            paired with rapid turnarounds and wholesale margin structures for surgery center supply chains.
          </p>
        </div>

        {/* 2x2 Modular Diagnostic Grid matching Framer reference image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -3 }}
                className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-lg hover:shadow-xl transition-all group"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <span className={`w-2.5 h-2.5 rounded-full ${card.trackColor}`} />
                      <span className="text-xs font-mono font-bold tracking-wider text-slate-900">
                        {card.track}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 font-medium">
                      {card.tag}
                    </span>
                  </div>

                  {/* Icon badge */}
                  <div className="mb-4 inline-flex items-center gap-2 px-2.5 py-1 rounded text-[11px] font-mono font-semibold border ${card.badgeColor}">
                    <Icon className="w-3.5 h-3.5" />
                    <span>{card.track}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight leading-snug mb-3 group-hover:text-brand-orange transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>

                {/* Footer status line */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono">
                  <span className={`font-semibold tracking-wider ${card.footerColor}`}>
                    {card.footerStatus}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
