"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, FileCheck, HelpCircle } from "lucide-react";

export const VerificationFAQ: React.FC = () => {
  // Store open state for each category
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({
    "dealer-0": true, // First item open by default like in Framer
    "clinical-0": false,
  });

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const dealerFaqs = [
    {
      q: "What are the dealer wholesale volume minimums?",
      a: "Our initial Authorized Dealer onboarding threshold is 2 paired positioner units or 4 side-rail clamps. Stocking distributors who commit to quarterly forecasts unlock Tier-1 margins (up to 42%) along with co-op demonstration equipment kits.",
    },
    {
      q: "How does the 10-Year Mechanical Replacement Warranty work?",
      a: "Every Bereli positioner is backed by our unconditional 10-year mechanical integrity guarantee. In the unlikely event of gear wear or locking degradation, replacement assemblies are hot-dispatched within 24 hours to eliminate OR downtime.",
    },
    {
      q: "What is the standard lead time on bulk hospital orders and replacement pad kits?",
      a: "Standard catalog SKU positioners and rail clamps ship within 48 to 72 business hours from our central warehouse. Custom table configurations and bulk fleet orders typically ship within 10 to 14 business days with expedited white-glove dock delivery.",
    },
  ];

  const clinicalFaqs = [
    {
      q: "Are Bereli positioners compatible with Steris, Skytron, and Maquet OR tables?",
      a: "Yes. Our universal mounting blade and quick-clamp socket hubs natively support US (0.375\" x 1.125\"), UK (1.25\" x 0.25\"), and European (10mm x 25mm) standard operating table side rails without adapter shims.",
    },
    {
      q: "What documentation and 510(k) clearance letters are provided for hospital purchasing committees?",
      a: "We provide complete Value Analysis Committee (VAC) packets including FDA 510(k) clearance documentation, ISO 13485:2016 certifications, biocompatibility ISO 10993 test results, cleaning/reprocessing instructions (IFU), and comprehensive device history records.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#0a0a0a] border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-orange uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-brand-orange" />
            <span>[ 05 / VERIFICATION &amp; FAQS ]</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Frequently Addressed Specifications.
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
            Everything your surgery center materials manager, biomedical team, and hospital value analysis committee needs to review.
          </p>
        </div>

        {/* 2-Column FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Column A: Dealer & Procurement */}
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-xs font-mono text-neutral-400">
              <span className="text-brand-orange font-semibold">SECTION A:</span>
              <span>DEALER &amp; PROCUREMENT TERMS</span>
            </div>

            {dealerFaqs.map((faq, index) => {
              const key = `dealer-${index}`;
              const isOpen = !!openItems[key];
              return (
                <div
                  key={faq.q}
                  className="rounded-xl bg-[#111111] border border-[#262626] overflow-hidden transition-colors hover:border-neutral-700"
                >
                  <button
                    onClick={() => toggleItem(key)}
                    className="w-full p-5 text-left flex items-start justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                      {faq.q}
                    </span>
                    <span className="mt-0.5 p-1 rounded bg-[#1c1c1c] text-brand-orange font-mono font-bold text-sm shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal border-t border-neutral-800/80">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Column B: Clinical Compliance & Table Fit */}
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-xs font-mono text-neutral-400">
              <span className="text-cyan-400 font-semibold">SECTION B:</span>
              <span>CLINICAL COMPLIANCE &amp; TABLE FIT</span>
            </div>

            {clinicalFaqs.map((faq, index) => {
              const key = `clinical-${index}`;
              const isOpen = !!openItems[key];
              return (
                <div
                  key={faq.q}
                  className="rounded-xl bg-[#111111] border border-[#262626] overflow-hidden transition-colors hover:border-neutral-700"
                >
                  <button
                    onClick={() => toggleItem(key)}
                    className="w-full p-5 text-left flex items-start justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                      {faq.q}
                    </span>
                    <span className="mt-0.5 p-1 rounded bg-[#1c1c1c] text-brand-orange font-mono font-bold text-sm shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal border-t border-neutral-800/80">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {/* Regulatory Kit Download Banner */}
            <div className="mt-4 p-5 rounded-xl bg-[#131313] border border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileCheck className="w-5 h-5 text-brand-orange" />
                <div>
                  <div className="text-xs font-bold text-white">
                    Need Hospital VAC Approval Package?
                  </div>
                  <div className="text-[11px] text-neutral-400">
                    Includes 510(k), cleaning IFU &amp; biocompatibility records.
                  </div>
                </div>
              </div>
              <a
                href="#contact"
                className="px-3.5 py-1.5 rounded text-xs font-mono font-semibold bg-neutral-800 hover:bg-neutral-700 text-white transition-colors"
              >
                REQUEST DOSSIER
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
