"use client";

import React from "react";
import Link from "next/link";
import { BereliLogo } from "./BereliLogo";
import { ArrowUp, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerColumns = [
    {
      title: "PRODUCTS",
      links: [
        { label: "OmniGrip™ Lithotomy", href: "#products" },
        { label: "AeroFlex™ Orthopedic", href: "#products" },
        { label: "Universal Side Clamps", href: "#products" },
        { label: "Viscoelastic Gel Pads", href: "#resources" },
        { label: "Storage Cart Systems", href: "#resources" },
      ],
    },
    {
      title: "SOLUTIONS",
      links: [
        { label: "Ambulatory Centers (ASC)", href: "#about" },
        { label: "Hospital Trauma ORs", href: "#about" },
        { label: "Robotic Gynecologic", href: "#about" },
        { label: "Urology & Colorectal", href: "#about" },
        { label: "Hip & Knee Arthroscopy", href: "#about" },
      ],
    },
    {
      title: "REGULATORY",
      links: [
        { label: "FDA 510(k) Summary", href: "#specifications" },
        { label: "ISO 13485:2016", href: "#specifications" },
        { label: "MDR CE Certified", href: "#specifications" },
        { label: "Cleaning & Sterilization", href: "#specifications" },
        { label: "Biocompatibility Test Data", href: "#specifications" },
      ],
    },
    {
      title: "DEALERS & GPO",
      links: [
        { label: "Distributor Portal", href: "#contact" },
        { label: "Price Book Download", href: "#contact" },
        { label: "EDI Integration API", href: "#contact" },
        { label: "Evaluation Fleet Sign-Up", href: "#contact" },
        { label: "Terms of Supply", href: "#contact" },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { label: "About Bereli Precision", href: "#about" },
        { label: "Factory Facility", href: "#about" },
        { label: "Biomedical Careers", href: "#about" },
        { label: "News & Clinical Papers", href: "#about" },
        { label: "Contact OR Support", href: "#contact" },
      ],
    },
  ];

  return (
    <footer className="bg-[#080808] text-white pt-16 pb-12 border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 5 Navigation Columns matching reference image */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-mono font-bold tracking-wider text-neutral-400 mb-4 uppercase">
                {col.title}
              </h4>
              <ul className="space-y-2.5 text-xs text-neutral-300">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-brand-orange transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Big BERRELLI Watermark Typography matching Framer screenshot */}
        <div className="w-full flex justify-center py-10 select-none pointer-events-none">
          <svg
            width="870"
            height="174"
            viewBox="0 0 870 174"
            fill="none"
            className="w-full max-w-4xl h-auto opacity-70"
            aria-hidden="true"
          >
            <path
              d="M-9.7876 42.4174V51.5037H32.9417H75.671V59.4542V67.4047H47.1848H18.6986V76.491V85.3501L46.805 86.0316L74.7214 86.7131V98.071V109.429L42.0573 110.11L9.39311 110.565L8.82338 89.6661L8.25366 68.5405L-0.672016 67.859L-9.7876 67.1776V98.071V128.964L37.6894 128.283C84.0269 127.601 85.1664 127.601 89.3444 122.377C92.9526 118.061 93.7122 114.881 93.7122 102.614C93.7122 90.5748 92.9526 86.9402 89.3444 82.8514L85.1664 77.854L89.5343 72.4022C92.7627 68.0862 93.7122 64.4517 93.5223 54.4567C93.5223 33.3311 93.5223 33.3311 37.4995 33.3311H-9.7876V42.4174Z"
              fill="white"
            />
            <path
              d="M115.932 37.1925C113.653 39.4641 111.754 43.3258 111.374 45.8245C110.804 50.3676 111.944 50.3676 162.649 51.0491L214.304 51.5034V42.4171V33.3308H167.017C124.857 33.3308 119.35 33.7851 115.932 37.1925Z"
              fill="white"
            />
            <path
              d="M231.775 41.7359L232.345 50.3679L274.694 51.0494L316.854 51.5037V59.4542V67.4047L274.694 67.859L232.345 68.5405V98.071V127.601L241.271 128.283L250.196 128.964L250.766 107.384L251.336 85.5773L279.632 107.157C307.928 128.51 308.118 128.737 320.272 128.737C326.919 128.737 331.857 127.829 331.287 126.693C330.717 125.784 318.943 116.244 305.08 105.794L279.822 86.7131L304.13 85.5773C326.919 84.4415 328.818 83.9872 332.237 78.9897C334.895 75.1281 335.845 70.1306 335.845 58.9999C335.845 46.5062 335.085 43.7803 331.097 39.01L326.539 33.3311H278.872H231.206L231.775 41.7359Z"
              fill="white"
            />
            <path
              d="M352.937 42.4174V51.5037H394.717H436.496V59.4542V67.4047H394.717H352.937V98.071V128.737H361.483H370.028V106.93C370.028 94.8908 370.788 85.5773 371.548 86.0316C372.497 86.4859 385.601 96.2537 400.794 107.839L428.52 128.964L441.244 128.283L453.778 127.601L426.811 107.157L400.034 86.7131L425.102 85.5773C455.107 84.2144 455.487 83.9872 455.487 59.6814C455.487 50.8222 454.727 42.4174 453.968 41.0545C450.17 34.2397 443.523 33.3311 398.705 33.3311H352.937V42.4174Z"
              fill="white"
            />
            <path
              d="M476.757 37.1925C474.478 39.4641 472.579 43.3258 472.199 45.8245C471.629 50.3676 472.769 50.3676 523.474 51.0491L575.129 51.5034V42.4171V33.3308H527.842C485.682 33.3308 480.175 33.7851 476.757 37.1925Z"
              fill="white"
            />
            <path
              d="M590.702 75.3552C591.461 132.372 586.144 127.374 647.294 128.283L694.771 128.964V119.878V110.565L652.612 110.11L610.262 109.429L609.692 71.2664L609.313 33.3311H599.627H590.132L590.702 75.3552Z"
              fill="white"
            />
            <path
              d="M708.064 72.8564C708.064 94.6635 708.824 115.108 709.774 118.061C713.002 127.828 718.889 128.964 766.936 128.283L811.564 127.601L812.134 118.969L812.704 110.564H769.974H727.055V71.9477V33.331H717.56H708.064V72.8564Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <p className="text-center sm:text-left">
            © 2025 Bereli Medical Technologies Inc. All rights reserved.
            Precision-engineered surgical patient positioning devices.
          </p>

          <div className="flex items-center gap-6">
            <Link href="#privacy" className="hover:text-white transition-colors">
              PRIVACY POLICY
            </Link>
            <Link href="#terms" className="hover:text-white transition-colors">
              TERMS OF USE
            </Link>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-neutral-900 hover:bg-neutral-800 text-white transition-colors border border-neutral-800"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
