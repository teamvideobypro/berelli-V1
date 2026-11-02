"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
} from "lucide-react";

interface ContactLeadSectionProps {
  initialProduct?: string;
  initialSku?: string;
}

export const ContactLeadSection: React.FC<ContactLeadSectionProps> = ({
  initialProduct = "",
  initialSku = "",
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    email: "",
    inquiryType: "Authorized Dealer & Distributor Application",
    specs: initialProduct ? `Inquiring about ${initialProduct} (${initialSku})` : "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0d0d0d] border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Surgical Supply Inquiry Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-orange uppercase tracking-wider mb-3">
                <span className="w-2 h-2 rounded-full bg-brand-orange" />
                <span>[ DIRECT SURGICAL SUPPLY INQUIRY ]</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                Let&apos;s build what&apos;s next in <br />
                <span className="text-brand-orange">surgical positioning.</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                Have a surgery center outfitting requirement, hospital demonstration
                trial request, or medical distributor inquiry? Our clinical engineers
                respond within 4 business hours.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 font-mono text-xs">
              <div className="p-4 rounded-xl bg-[#141414] border border-neutral-800 flex items-center gap-3.5 hover:border-neutral-700 transition-colors">
                <div className="p-2 rounded bg-neutral-800 text-brand-orange shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-neutral-500 uppercase">
                    DIRECT PHONE
                  </div>
                  <div className="text-sm font-bold text-white">+1 (800) 555-BERELI</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#141414] border border-neutral-800 flex items-center gap-3.5 hover:border-neutral-700 transition-colors">
                <div className="p-2 rounded bg-neutral-800 text-cyan-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-neutral-500 uppercase">
                    ENGINEERING DESK
                  </div>
                  <div className="text-sm font-bold text-white">
                    procurement@berelimedical.com
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#141414] border border-neutral-800 flex items-center gap-3.5 hover:border-neutral-700 transition-colors">
                <div className="p-2 rounded bg-neutral-800 text-emerald-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-neutral-500 uppercase">
                    HEADQUARTERS
                  </div>
                  <div className="text-sm font-bold text-white">
                    Precision Medical Park, Suite 400
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time Guarantee Pill */}
            <div className="p-4 rounded-xl bg-[#161616] border border-brand-orange/30 flex items-center gap-3">
              <Clock className="w-5 h-5 text-brand-orange shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-white font-mono">
                  RAPID PROCUREMENT DISPATCH:
                </span>{" "}
                <span className="text-neutral-300">
                  Standard positioner quotes and CAD spec drawings delivered within 4
                  hours.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 3-Step Request Proposal / Dealer Pricing Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl bg-[#121212] border border-[#2b2b2b] p-6 sm:p-9 shadow-2xl relative"
            >
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-neutral-800">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Request Proposal / Dealer Pricing
                  </h3>
                  <div className="text-[10px] font-mono text-neutral-500 flex items-center gap-1.5 mt-1">
                    <Lock className="w-3 h-3 text-brand-orange" />
                    <span>
                      ALL FIELDS ENCRYPTED • COMPLIANT WITH HOSPITAL PURCHASING PROTOCOLS
                    </span>
                  </div>
                </div>
                <div className="px-2.5 py-1 rounded bg-[#1c1c1c] text-[10px] font-mono text-emerald-400 border border-emerald-500/20">
                  ASC PRIORITY ROUTING
                </div>
              </div>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* STEP 1: INSTITUTION DETAILS */}
                    <div className="space-y-3">
                      <div className="text-xs font-mono font-bold text-brand-orange tracking-wider">
                        STEP 1: INSTITUTION DETAILS
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div>
                          <label className="block text-[11px] font-mono text-neutral-400 mb-1">
                            FULL NAME *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Dr. Arthur Vance / Sarah Jenkins, RN"
                            value={formData.fullName}
                            onChange={(e) =>
                              setFormData({ ...formData, fullName: e.target.value })
                            }
                            className="w-full bg-[#181818] border border-neutral-700/80 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-brand-orange transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-mono text-neutral-400 mb-1">
                            ORGANIZATION / FACILITY *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Surgery Center or Dealer Name"
                            value={formData.organization}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                organization: e.target.value,
                              })
                            }
                            className="w-full bg-[#181818] border border-neutral-700/80 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-brand-orange transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-neutral-400 mb-1">
                          BUSINESS EMAIL *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@surgerycenter.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full bg-[#181818] border border-neutral-700/80 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-brand-orange transition-colors"
                        />
                      </div>
                    </div>

                    {/* STEP 2: TENDER SPECIFICATIONS */}
                    <div className="space-y-3 pt-3 border-t border-neutral-800">
                      <div className="text-xs font-mono font-bold text-cyan-400 tracking-wider">
                        STEP 2: TENDER SPECIFICATIONS
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-neutral-400 mb-1">
                          INQUIRY TYPE *
                        </label>
                        <select
                          value={formData.inquiryType}
                          onChange={(e) =>
                            setFormData({ ...formData, inquiryType: e.target.value })
                          }
                          className="w-full bg-[#181818] border border-neutral-700/80 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-orange transition-colors"
                        >
                          <option>Authorized Dealer &amp; Distributor Application</option>
                          <option>Ambulatory Surgery Center (ASC) Outfitting</option>
                          <option>Hospital Operating Room Replacement Fleet</option>
                          <option>Clinical Trial Demonstration Request</option>
                          <option>OEM &amp; Custom Surgical Table Side-Rail Hub</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-neutral-400 mb-1">
                          PROJECT REQUIREMENTS &amp; TABLE SPECIFICATIONS
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Provide table makes/models (e.g. Steris 4085), surgical specialties, or estimated unit quantities..."
                          value={formData.specs}
                          onChange={(e) =>
                            setFormData({ ...formData, specs: e.target.value })
                          }
                          className="w-full bg-[#181818] border border-neutral-700/80 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-brand-orange transition-colors resize-none"
                        />
                      </div>
                    </div>

                    {/* STEP 3: SUBMIT RFP */}
                    <div className="pt-3 border-t border-neutral-800 space-y-4">
                      <div className="text-xs font-mono font-bold text-emerald-400 tracking-wider">
                        STEP 3: SUBMIT RFP
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] font-mono text-neutral-400">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>Response: &lt; 4 Hours</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>Net-30 GPO Terms</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>24H Hot Dispatch</span>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-xs sm:text-sm font-mono font-bold tracking-wider text-white bg-brand-orange hover:bg-brand-orange-hover transition-all shadow-glowOrange group disabled:opacity-75"
                      >
                        <span>
                          {loading
                            ? "TRANSMITTING TO BIOMEDICAL DESK..."
                            : "SUBMIT DEALER & QUOTE INQUIRY →"}
                        </span>
                      </button>
                    </div>
                  </form>
                ) : (
                  <motion.div
                    key="submitted"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-10 text-center space-y-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-white">
                      RFP Successfully Transmitted
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-white">{formData.fullName}</strong>.
                      Our biomedical engineering team has received your inquiry for{" "}
                      <span className="text-brand-orange">{formData.organization}</span>.
                      Official pricing schedule and CAD compatibility data have been
                      dispatched to <strong className="text-white">{formData.email}</strong>.
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            fullName: "",
                            organization: "",
                            email: "",
                            inquiryType: "Authorized Dealer & Distributor Application",
                            specs: "",
                          });
                        }}
                        className="text-xs font-mono text-neutral-400 hover:text-white underline underline-offset-4"
                      >
                        Submit another inquiry
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
