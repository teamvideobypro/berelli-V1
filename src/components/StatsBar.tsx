"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Shield, Building2, Truck, Award } from "lucide-react";

export const StatsBar: React.FC = () => {
  const stats = [
    {
      index: "[ 01 / REGULATORY ]",
      badge: "ISO 13485",
      headline: "FDA 510(k)",
      subline: "Cleared",
      description:
        "Class I & II compliant surgical hardware with complete device history files.",
      tag: "DEVICE HISTORY: VERIFIED",
      icon: Award,
      badgeColor: "text-brand-orange bg-brand-orange/10 border-brand-orange/20",
    },
    {
      index: "[ 02 / ADOPTION ]",
      badge: "NATIONWIDE",
      headline: "500+ Surgery",
      subline: "Centers",
      description:
        "Outfitted nationwide across ASCs, university health networks, and trauma ORs.",
      tag: "FIELD DEPLOYMENTS: ACTIVE",
      icon: Building2,
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      index: "[ 03 / PROCUREMENT ]",
      badge: "GPO APPROVED",
      headline: "Tiered",
      subline: "Wholesale",
      description:
        "Pre-negotiated GPO agreements & dedicated medical equipment dealer margins.",
      tag: "PRICING TIERS: DIRECT B2B",
      icon: Truck,
      badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    },
    {
      index: "[ 04 / DURABILITY ]",
      badge: "BILLET ALLOY",
      headline: "10-Year",
      subline: "Warranty",
      description:
        "Machined billet alloy structure backed by full mechanical replacement guarantee.",
      tag: "ADVANCE REPLACEMENT: 24H",
      icon: Shield,
      badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {stats.map((stat, i) => {
          const IconComponent = stat.icon;
          return (
            <motion.div
              key={stat.index}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative rounded-xl bg-[#111111] border border-[#262626] p-5 sm:p-6 flex flex-col justify-between shadow-xl group hover:border-neutral-600 transition-colors"
            >
              {/* Top Tag & Category Badge */}
              <div>
                <div className="flex items-center justify-between mb-3 text-[11px] font-mono text-neutral-400">
                  <span>{stat.index}</span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-medium border ${stat.badgeColor}`}
                  >
                    {stat.badge}
                  </span>
                </div>

                {/* Main Stat Headline */}
                <div className="mt-2">
                  <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans flex items-baseline gap-2">
                    <span>{stat.headline}</span>
                    <span className="text-brand-orange">{stat.subline}</span>
                  </div>
                  <p className="mt-2.5 text-xs text-neutral-300 leading-relaxed font-normal">
                    {stat.description}
                  </p>
                </div>
              </div>

              {/* Bottom Verification Status */}
              <div className="mt-6 pt-3.5 border-t border-neutral-800/80 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                <span className="tracking-wider">{stat.tag}</span>
                <IconComponent className="w-3.5 h-3.5 text-neutral-400 group-hover:text-brand-orange transition-colors" />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};
