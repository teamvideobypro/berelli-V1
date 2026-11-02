"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Mail } from "lucide-react";

export const DealerOnboardingCTA: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section className="py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl bg-slate-50 border border-slate-200/90 p-8 sm:p-14 text-center overflow-hidden shadow-xl"
        >
          {/* Section Tag */}
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-brand-orange uppercase tracking-wider mb-4">
            <span>[ DEALER ONBOARDING ]</span>
          </div>

          {/* Title & Description */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 mb-4">
            Become an Authorized Bereli Dealer
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal mb-8">
            Access exclusive distributor tiers, sample kits, demo fleet support,
            and direct surgery center procurement lead routing in your assigned
            territory.
          </p>

          {/* One-Click Application Input */}
          <div className="max-w-xl mx-auto">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row items-center gap-2.5 bg-white p-2 rounded-xl border border-slate-300 shadow-sm"
                >
                  <div className="relative flex-1 w-full flex items-center pl-3">
                    <Mail className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
                    <input
                      type="email"
                      required
                      placeholder="Enter institutional or distributor email..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent text-sm text-slate-900 placeholder-slate-400 focus:outline-none py-2 font-mono"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs font-mono font-bold tracking-wider text-white bg-brand-orange hover:bg-brand-orange-hover transition-all shadow-glowOrange whitespace-nowrap disabled:opacity-75"
                  >
                    <span>{loading ? "VERIFYING..." : "START APPLICATION"}</span>
                    {!loading && <ArrowRight className="w-4 h-4" />}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-mono flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>
                    Application initiated. An onboarding dossier has been
                    dispatched to <strong className="text-slate-900">{email}</strong>.
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-4 flex items-center justify-center gap-4 text-[11px] font-mono text-slate-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                <span>NDA &amp; GPO COMPLIANT</span>
              </span>
              <span>•</span>
              <span>PROTECTED DISTRIBUTION TERRITORIES</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
