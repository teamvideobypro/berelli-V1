"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Lock,
  ShieldCheck,
  CheckCircle2,
  FileText,
  KeyRound,
  Cpu,
  Layers,
  Activity,
  ArrowRight,
} from "lucide-react";

/* ----------------------------------------------------
   1. QUOTE & DEALER APPLICATION MODAL
---------------------------------------------------- */
interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct?: string;
  selectedSku?: string;
  selectedPrice?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  selectedProduct = "",
  selectedSku = "",
  selectedPrice = "",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    hospital: "",
    quantity: "2 Units (1 Pair)",
    notes: selectedProduct ? `Requesting expedited quote for ${selectedProduct} [${selectedSku}]` : "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-lg rounded-2xl bg-[#121212] border border-[#2b2b2b] p-6 sm:p-8 shadow-2xl z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-brand-orange uppercase mb-1">
                <span className="w-2 h-2 rounded-full bg-brand-orange" />
                <span>EXPEDITED SURGICAL QUOTE</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {selectedProduct ? `Quote for ${selectedProduct}` : "Direct OR Hardware Tender"}
              </h3>
              <p className="text-xs text-neutral-400 mt-1 mb-5">
                Official dealer wholesale schedule and 510(k) summary packet.
              </p>

              {selectedProduct && (
                <div className="mb-4 p-3 rounded-lg bg-[#181818] border border-neutral-800 text-xs font-mono flex items-center justify-between">
                  <span className="text-neutral-400">SKU: {selectedSku}</span>
                  <span className="text-brand-orange font-bold">Wholesale: {selectedPrice}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-mono text-neutral-400 mb-1">
                    YOUR NAME &amp; SURGICAL TITLE *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Arthur Vance, Chief of Orthopedics"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#181818] border border-neutral-700/80 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-brand-orange"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono text-neutral-400 mb-1">
                      INSTITUTIONAL EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@surgerycenter.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#181818] border border-neutral-700/80 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono text-neutral-400 mb-1">
                      FACILITY / DEALERSHIP *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="ASC or Distributor Name"
                      value={formData.hospital}
                      onChange={(e) => setFormData({ ...formData, hospital: e.target.value })}
                      className="w-full bg-[#181818] border border-neutral-700/80 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-neutral-400 mb-1">
                    PROJECT VOLUME OR EVALUATION REQUEST
                  </label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full bg-[#181818] border border-neutral-700/80 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-orange"
                  >
                    <option>1 Paired Demo Unit (30-Day Clinical Trial)</option>
                    <option>2 Units (1 Operating Room Suite)</option>
                    <option>4 - 8 Units (ASC Full Outfitting)</option>
                    <option>10+ Units (Health System Enterprise Tender)</option>
                    <option>Distributor Stocking Fleet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-neutral-400 mb-1">
                    SURGICAL TABLE DETAILS &amp; SPECIAL REQUIREMENTS
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Specify table manufacturer (Steris, Skytron, Maquet) or surgical specialty..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-[#181818] border border-neutral-700/80 rounded-lg px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-brand-orange resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-lg text-xs font-mono font-bold tracking-wider text-white bg-brand-orange hover:bg-brand-orange-hover transition-all shadow-glowOrange flex items-center justify-center gap-2"
                >
                  <span>{loading ? "DISPATCHING DOSSIER..." : "REQUEST FORMAL PROPOSAL →"}</span>
                </button>
              </form>
            </div>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-white">Proposal Dispatched</h4>
              <p className="text-xs text-neutral-300 leading-relaxed max-w-sm mx-auto">
                Official quotation and dealer agreement documents for{" "}
                <strong className="text-white">{formData.hospital}</strong> have been
                generated and sent to <strong className="text-white">{formData.email}</strong>.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 rounded-lg text-xs font-mono font-bold bg-neutral-800 hover:bg-neutral-700 text-white"
              >
                CLOSE WINDOW
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

/* ----------------------------------------------------
   2. DEALER LOGIN PORTAL MODAL
---------------------------------------------------- */
interface DealerLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DealerLoginModal: React.FC<DealerLoginModalProps> = ({ isOpen, onClose }) => {
  const [distributorId, setDistributorId] = useState("");
  const [passcode, setPasscode] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setLoggedIn(true);
    }, 700);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-md rounded-2xl bg-[#121212] border border-[#2b2b2b] p-6 sm:p-8 shadow-2xl z-10"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!loggedIn ? (
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-brand-orange uppercase mb-1">
                <Lock className="w-3.5 h-3.5" />
                <span>SECURE B2B EXTRANET</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Authorized Dealer Portal
              </h3>
              <p className="text-xs text-neutral-400 mt-1 mb-6">
                Access tier-1 wholesale catalogs, CAD models, and hospital purchase orders.
              </p>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-mono text-neutral-400 mb-1">
                    DISTRIBUTOR ACCOUNT ID
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. DLR-84491-US"
                    value={distributorId}
                    onChange={(e) => setDistributorId(e.target.value)}
                    className="w-full bg-[#181818] border border-neutral-700/80 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-brand-orange font-mono"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-neutral-400 mb-1">
                    SECURITY ACCESS TOKEN
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••••••"
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    className="w-full bg-[#181818] border border-neutral-700/80 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-brand-orange font-mono"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-lg text-xs font-mono font-bold tracking-wider text-white bg-brand-orange hover:bg-brand-orange-hover transition-all shadow-glowOrange flex items-center justify-center gap-2"
                >
                  <KeyRound className="w-3.5 h-3.5" />
                  <span>{loading ? "AUTHENTICATING CERTIFICATES..." : "SECURE DEALER LOGIN"}</span>
                </button>
              </form>

              <div className="mt-5 text-center text-xs text-neutral-500">
                <span>Need wholesale distributor credentials? </span>
                <a href="#contact" onClick={onClose} className="text-brand-orange hover:underline font-mono">
                  Apply for Dealership
                </a>
              </div>
            </div>
          ) : (
            <div className="py-6 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-white">Dealer Workspace Connected</h4>
              <div className="p-3 bg-[#181818] rounded-lg border border-neutral-800 text-left text-xs font-mono space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-neutral-400">ACCOUNT:</span>
                  <span className="text-white font-bold">{distributorId || "DLR-ACTIVE-VERIFIED"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">DISCOUNT TIER:</span>
                  <span className="text-emerald-400 font-bold">TIER 1 (42% GPO)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">HOT-SWAP FLEET:</span>
                  <span className="text-cyan-400 font-bold">4 UNITS ALLOCATED</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 rounded-lg text-xs font-mono font-bold bg-neutral-800 hover:bg-neutral-700 text-white"
              >
                CONTINUE TO CATALOG
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

/* ----------------------------------------------------
   3. ENGINEERING TOLERANCES MODAL
---------------------------------------------------- */
interface EngineeringTolerancesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EngineeringTolerancesModal: React.FC<EngineeringTolerancesModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl rounded-2xl bg-[#121212] border border-[#2b2b2b] p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-mono text-brand-orange uppercase mb-1">
            <Cpu className="w-3.5 h-3.5" />
            <span>BIOMECHANICAL ENGINEERING DATA</span>
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            ISO 13485:2016 Micron Locking Tolerances
          </h3>
          <p className="text-xs text-neutral-400 mt-1 mb-6">
            Dimensional tolerances and metallurgical specifications verified by accredited biomedical test labs.
          </p>

          <div className="space-y-4 text-xs font-mono">
            {/* Spec 1 */}
            <div className="p-4 rounded-xl bg-[#181818] border border-neutral-800">
              <div className="flex items-center justify-between text-brand-orange font-bold mb-1">
                <span>RADIAL TEETH ENGAGEMENT</span>
                <span>±0.05 mm</span>
              </div>
              <p className="text-neutral-300 font-sans text-xs">
                Micro-machined 72-point radial face coupling with zero play under 800 lbs cantilevered bending moment. Tested to 50,000 surgical articulation cycles.
              </p>
            </div>

            {/* Spec 2 */}
            <div className="p-4 rounded-xl bg-[#181818] border border-neutral-800">
              <div className="flex items-center justify-between text-cyan-400 font-bold mb-1">
                <span>ALLOY COMPOSITION: 316L SURGICAL STEEL</span>
                <span>ASTM F138</span>
              </div>
              <p className="text-neutral-300 font-sans text-xs">
                Billet-machined low-carbon austenitic stainless steel with electro-polished passivation layer resisting harsh chemical sterilization (IPX7 autoclaving).
              </p>
            </div>

            {/* Spec 3 */}
            <div className="p-4 rounded-xl bg-[#181818] border border-neutral-800">
              <div className="flex items-center justify-between text-emerald-400 font-bold mb-1">
                <span>CAPILLARY CLOSING PERFUSION THRESHOLD</span>
                <span>&lt; 32 mmHg</span>
              </div>
              <p className="text-neutral-300 font-sans text-xs">
                Viscoelastic memory-foam cushion with medical urethane skin disperses calf interface forces to eliminate compartment syndrome and peroneal neuropraxia risks.
              </p>
            </div>

            {/* Spec 4 */}
            <div className="p-4 rounded-xl bg-[#181818] border border-neutral-800">
              <div className="flex items-center justify-between text-amber-400 font-bold mb-1">
                <span>UNIVERSAL RAIL CLAMP COMPLIANCE</span>
                <span>MULTI-STANDARD</span>
              </div>
              <p className="text-neutral-300 font-sans text-xs">
                Natively clamps to US (3/8&quot; x 1-1/8&quot;), UK (1/4&quot; x 1-1/4&quot;), and European (10mm x 25mm) surgical table side rails with cam-lock stability.
              </p>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-lg text-xs font-mono font-bold bg-neutral-800 hover:bg-neutral-700 text-white"
            >
              CLOSE SPECIFICATIONS
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
