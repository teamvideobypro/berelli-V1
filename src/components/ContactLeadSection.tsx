"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown } from "lucide-react";

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
    <section
      id="contact"
      className="py-16 sm:py-24 bg-[#FF4D15] text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Horizontal Headline & Direct Info Bar matching Image 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10 sm:mb-12">
          {/* Left: Tag + Massive Headline + Subtitle */}
          <div className="lg:col-span-8">
            <div className="text-xs font-mono font-bold tracking-wider text-white/90 uppercase mb-3">
              [ DIRECT SURGICAL SUPPLY INQUIRY ]
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              Let&apos;s build what&apos;s next in <br />
              surgical positioning.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-white/90 max-w-2xl leading-relaxed font-normal">
              Have a surgery center outfitting requirement, hospital demonstration
              trial request, or medical distributor inquiry? Our clinical engineers
              respond within 4 business hours.
            </p>
          </div>

          {/* Right: Dark Contact Details Box */}
          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="w-full max-w-md bg-[#181818] text-white rounded-lg p-5 border border-black/20 shadow-xl font-mono text-xs space-y-2.5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white shrink-0" />
                <span>
                  DIRECT PHONE: <strong className="text-white">+1 (800) 555-BERELI</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white shrink-0" />
                <span>
                  ENGINEERING DESK:{" "}
                  <strong className="text-white">procurement@berelimedical.com</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white shrink-0" />
                <span>
                  HEADQUARTERS:{" "}
                  <strong className="text-white">Precision Medical Park, Suite 400</strong>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Large White Form Card matching Image 3 */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-xl bg-white text-slate-900 shadow-2xl p-6 sm:p-10 border border-black/5"
        >
          {/* Card Title Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-100">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-950">
                Request Proposal / Dealer Pricing
              </h3>
              <div className="text-[10px] font-mono font-semibold text-slate-400 uppercase tracking-wider mt-1">
                ALL FIELDS ENCRYPTED • COMPLIANT WITH HOSPITAL PURCHASING PROTOCOLS
              </div>
            </div>

            <div>
              <span className="inline-block px-3 py-1 rounded bg-[#f1f5f9] border border-slate-200 text-[11px] font-mono font-semibold text-slate-700">
                ASC PRIORITY ROUTING
              </span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="mt-8">
                {/* 3-Column Horizontal Form Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  {/* Column 1: STEP 1: INSTITUTION DETAILS */}
                  <div className="space-y-4">
                    <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                      STEP 1: INSTITUTION DETAILS
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono font-bold text-slate-700 uppercase mb-1">
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
                        className="w-full bg-[#f8fafc] border border-slate-200 rounded px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#FF4D15] focus:bg-white transition-all font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono font-bold text-slate-700 uppercase mb-1">
                        ORGANIZATION / FACILITY *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Surgery Center or Dealer Name"
                        value={formData.organization}
                        onChange={(e) =>
                          setFormData({ ...formData, organization: e.target.value })
                        }
                        className="w-full bg-[#f8fafc] border border-slate-200 rounded px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#FF4D15] focus:bg-white transition-all font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono font-bold text-slate-700 uppercase mb-1">
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
                        className="w-full bg-[#f8fafc] border border-slate-200 rounded px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#FF4D15] focus:bg-white transition-all font-sans"
                      />
                    </div>
                  </div>

                  {/* Column 2: STEP 2: TENDER SPECIFICATIONS */}
                  <div className="space-y-4">
                    <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                      STEP 2: TENDER SPECIFICATIONS
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono font-bold text-slate-700 uppercase mb-1">
                        INQUIRY TYPE *
                      </label>
                      <div className="relative">
                        <select
                          value={formData.inquiryType}
                          onChange={(e) =>
                            setFormData({ ...formData, inquiryType: e.target.value })
                          }
                          className="w-full bg-[#f8fafc] border border-slate-200 rounded px-3.5 py-2.5 text-xs text-slate-900 appearance-none focus:outline-none focus:border-[#FF4D15] focus:bg-white transition-all font-sans pr-8 cursor-pointer"
                        >
                          <option>Authorized Dealer &amp; Distributor Application</option>
                          <option>Ambulatory Surgery Center (ASC) Outfitting</option>
                          <option>Hospital Operating Room Fleet Replacement</option>
                          <option>Clinical Trial Demonstration Request</option>
                          <option>OEM &amp; Custom Table Side-Rail Hub</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-3 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono font-bold text-slate-700 uppercase mb-1">
                        PROJECT REQUIREMENTS &amp; TABLE SPECIFICATIONS
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Provide table makes/models (e.g. Steris 4085), surgical specialties, or estimated unit quantities..."
                        value={formData.specs}
                        onChange={(e) =>
                          setFormData({ ...formData, specs: e.target.value })
                        }
                        className="w-full bg-[#f8fafc] border border-slate-200 rounded px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#FF4D15] focus:bg-white transition-all font-sans resize-none"
                      />
                    </div>
                  </div>

                  {/* Column 3: STEP 3: SUBMIT RFP */}
                  <div className="space-y-4">
                    <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                      STEP 3: SUBMIT RFP
                    </div>

                    {/* Feature Guarantee Card */}
                    <div className="bg-[#f8fafc] border border-slate-200 rounded-lg p-4 font-mono text-xs text-slate-700 space-y-2.5">
                      <div className="flex items-center gap-2">
                        <span className="text-slate-900 font-bold">✓</span>
                        <span className="font-semibold text-slate-800">
                          Response Guarantee: Under 4 Hours
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-900 font-bold">✓</span>
                        <span className="text-slate-600">
                          Direct Factory Pricing &amp; Net-30 GPO
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-900 font-bold">✓</span>
                        <span className="text-slate-600">
                          Advance Replacement Unit Dispatch
                        </span>
                      </div>
                    </div>

                    {/* Dark Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 px-4 rounded bg-[#0a0a0a] hover:bg-[#1a1a1a] text-white font-mono text-xs font-bold tracking-wider text-center transition-colors shadow-lg disabled:opacity-75"
                    >
                      {loading
                        ? "TRANSMITTING TO BIOMEDICAL DESK..."
                        : "SUBMIT DEALER & QUOTE INQUIRY →"}
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <motion.div
                key="submitted"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900">
                  RFP Successfully Transmitted
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formData.fullName}</strong>.
                  Our biomedical engineering team has received your tender for{" "}
                  <span className="text-[#FF4D15] font-semibold">{formData.organization}</span>.
                  Official pricing schedule has been dispatched to{" "}
                  <strong className="text-slate-900">{formData.email}</strong>.
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
                    className="text-xs font-mono text-slate-500 hover:text-slate-900 underline underline-offset-4"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
