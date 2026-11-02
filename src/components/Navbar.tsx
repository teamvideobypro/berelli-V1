"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BereliLogo } from "./BereliLogo";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Lock, PhoneCall } from "lucide-react";

interface NavbarProps {
  onOpenQuoteModal: () => void;
  onOpenLoginModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenQuoteModal,
  onOpenLoginModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Products", href: "#products" },
    { label: "Specifications", href: "#specifications" },
    { label: "Resources", href: "#resources" },
    { label: "About", href: "#about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a0a0af2] backdrop-blur-md border-b border-[#262626] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 group transition-opacity hover:opacity-90"
            aria-label="Bereli Medical Technologies Home"
          >
            <BereliLogo className="h-7 sm:h-8 w-auto text-white" />
          </Link>
          <div className="hidden xl:flex items-center pl-3 border-l border-neutral-800 text-[11px] font-mono text-neutral-400 tracking-wider">
            SURGICAL HARDWARE [ASC/OR]
          </div>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#141414] border border-[#262626] px-3 py-1.5 rounded-full shadow-inner">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-4 py-1 text-xs font-medium text-neutral-300 hover:text-white rounded-full transition-all duration-150 hover:bg-[#202020]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Action CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenLoginModal}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-neutral-300 hover:text-white px-3.5 py-2 rounded border border-neutral-800 hover:border-neutral-700 bg-[#121212] transition-colors"
          >
            <Lock className="w-3.5 h-3.5 text-brand-orange" />
            <span>DEALER LOGIN</span>
          </button>

          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-white px-4 py-2 rounded bg-brand-orange hover:bg-brand-orange-hover transition-all shadow-glowOrange group"
          >
            <span>CONTACT SALES</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenQuoteModal}
            className="text-[11px] font-mono font-semibold text-white px-2.5 py-1.5 rounded bg-brand-orange"
          >
            QUOTE
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded text-neutral-400 hover:text-white hover:bg-neutral-800 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-neutral-800 bg-[#0e0e0e] px-4 pt-3 pb-6 space-y-3"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-800/60 rounded"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLoginModal();
                }}
                className="w-full flex items-center justify-center gap-2 text-xs font-mono font-medium text-neutral-300 px-4 py-2.5 rounded border border-neutral-800 bg-[#141414]"
              >
                <Lock className="w-3.5 h-3.5 text-brand-orange" />
                <span>DEALER LOGIN</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 text-xs font-mono font-semibold text-white px-4 py-2.5 rounded bg-brand-orange shadow-glowOrange"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>CONTACT SALES</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
