"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Droplets,
  DollarSign,
  Maximize2,
  Layers,
  Database,
  Briefcase,
  CheckCircle2,
} from "lucide-react";

export const SystemArchitecture: React.FC = () => {
  const clinicalItems = [
    {
      title: "Autoclave & Wipe-Down Sterilization (IPX7 Sealed)",
      desc: "Fully hermetically sealed mechanical joints prevent intraoperative fluid ingress and withstand harsh quaternary chemical wipe-downs without corrosion.",
      badge: "INFECTION CONTROL",
      icon: Droplets,
    },
    {
      title: "Lithotomy & Trendelenburg Safe Geometry",
      desc: "Synchronized gas springs counterbalance patient weight throughout aggressive tilt angles, maintaining anatomical axial alignment and surgical field visibility.",
      badge: "BIOMECHANICS",
      icon: Maximize2,
    },
    {
      title: "Anatomical Pressure-Dispersing Gel Pads",
      desc: "High-resilience viscoelastic pads conform dynamically to patient calves, reducing interface peak pressures beneath 32 mmHg capillary closing thresholds.",
      badge: "TISSUE INTEGRITY",
      icon: Layers,
    },
  ];

  const commercialItems = [
    {
      title: "Aggressive Wholesale Margins",
      desc: "Direct-from-manufacturer structure provides surgical supply distributors and equipment reps strong recurring profitability on capital units and accessory pad kits.",
      badge: "PROFITABILITY",
      icon: DollarSign,
    },
    {
      title: "Automated Re-order EDI & Hospital Portal",
      desc: "Live digital inventory synchronization, tracking, and instant purchase order confirmations for fast delivery to ambulatory surgery center docks.",
      badge: "SUPPLY CHAIN",
      icon: Database,
    },
    {
      title: "Net-30 Terms & Dedicated Territory Support",
      desc: "Pre-approved credit terms for accredited surgery networks, complete demo kit access, and factory-certified biomedical engineering field training.",
      badge: "COMMERCIAL TERMS",
      icon: Briefcase,
    },
  ];

  return (
    <section id="resources" className="py-20 sm:py-28 bg-[#f8fafc] text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-brand-orange uppercase tracking-wider mb-3">
            <span>[ 03 / SYSTEM ARCHITECTURE ]</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 mb-4">
            Clinical Excellence Contrasted with B2B Efficiency.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Engineered to exceed rigid surgical OR standards while delivering
            frictionless supply chains and margins for distribution partners.
          </p>
          <div className="mt-5 inline-block px-3 py-1 rounded-full bg-white border border-slate-200 text-[11px] font-mono text-slate-600 shadow-sm">
            SYSTEM MATRIX: COMPARATIVE ARCHITECTURE
          </div>
        </div>

        {/* 2-Track / 4-Quadrant Architecture Board */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Column 1: CLINICAL OR PERFORMANCE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-xl"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-600" />
                  <span className="text-xs font-mono font-bold tracking-wider text-slate-900">
                    CLINICAL OR PERFORMANCE
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-500">
                  [ SURGICAL SUITE ]
                </span>
              </div>

              {/* Items List */}
              <div className="space-y-4">
                {clinicalItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="p-5 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:border-cyan-400 transition-colors group"
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono text-cyan-700 font-semibold mb-2">
                        <span className="flex items-center gap-1.5">
                          <Icon className="w-3.5 h-3.5" />
                          <span>{item.badge}</span>
                        </span>
                        <span className="text-slate-400">CLASS II CRITERIA</span>
                      </div>
                      <h4 className="text-base font-bold text-slate-900 tracking-tight mb-2 group-hover:text-cyan-800 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>VALIDATION: ASTM &amp; ISO 10993 COMPLIANT</span>
              <CheckCircle2 className="w-4 h-4 text-cyan-600" />
            </div>
          </motion.div>

          {/* Column 2: DEALER & GPO COMMERCIAL TERMS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-xl"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-orange" />
                  <span className="text-xs font-mono font-bold tracking-wider text-slate-900">
                    DEALER &amp; GPO COMMERCIAL TERMS
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-500">
                  [ SUPPLY CHAIN ]
                </span>
              </div>

              {/* Items List */}
              <div className="space-y-4">
                {commercialItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="p-5 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:border-brand-orange transition-colors group"
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono text-brand-orange font-semibold mb-2">
                        <span className="flex items-center gap-1.5">
                          <Icon className="w-3.5 h-3.5" />
                          <span>{item.badge}</span>
                        </span>
                        <span className="text-slate-400">B2B CONTRACT</span>
                      </div>
                      <h4 className="text-base font-bold text-slate-900 tracking-tight mb-2 group-hover:text-brand-orange transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>TERRITORY DISPATCH: UNDER 24H</span>
              <CheckCircle2 className="w-4 h-4 text-brand-orange" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
