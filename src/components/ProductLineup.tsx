"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

interface ProductLineupProps {
  onSelectProduct: (productName: string, sku: string, price: string) => void;
}

export const ProductLineup: React.FC<ProductLineupProps> = ({ onSelectProduct }) => {
  const products = [
    {
      id: "omnigrip",
      categoryBadge: "CLASS II SURGICAL",
      sku: "BER-LG-800X",
      load: "800 LBS",
      stockStatus: "IN STOCK",
      statusColor: "bg-emerald-500",
      image: "/images/prod-omnigrip.png",
      title: "OmniGrip™ Elite Lithotomy Leg Positioner",
      description:
        "Heavy-duty bariatric lift assist positioner designed for high-BMI pelvic, colorectal, and gynecological interventions.",
      highlights: [
        "Gas-Spring 350N Counterbalance",
        "Anatomical Pressure-Dispersing Boot",
        "Zero-Slip Micron Locking Joint",
      ],
      msrp: "$4,850",
      wholesalePrice: "$3,220",
    },
    {
      id: "aeroflex",
      categoryBadge: "ORTHOPEDIC SUITE",
      sku: "BER-ORT-550A",
      load: "550 LBS",
      stockStatus: "IN STOCK",
      statusColor: "bg-emerald-500",
      image: "/images/prod-aeroflex.png",
      title: "AeroFlex™ Arthroscopic Knee & Leg Holder",
      description:
        "Multi-axis orthopedic positioning bracket facilitating hyper-flexion, extension, and valgus stress during ACL repairs.",
      highlights: [
        "Full Hyper-Flexion OR Range",
        "High-Rigidity 316L Stainless Bar",
        "Single-Knob Sterilizable Cam",
      ],
      msrp: "$3,290",
      wholesalePrice: "$2,980",
    },
    {
      id: "clamp",
      categoryBadge: "UNIVERSAL MOUNT",
      sku: "BER-UNV-CLAMP",
      load: "600 LBS",
      stockStatus: "READY TO SHIP",
      statusColor: "bg-cyan-500",
      image: "/images/prod-clamp.png",
      title: "Universal Side-Rail Clamp & Socket Hub",
      description:
        'Heavy-duty micro-locking stainless connector adapting 5/8" to 3/4" posts securely to US, UK, and Euro table side rails.',
      highlights: [
        "Compatible with US, UK & EU Rails",
        "Anti-Rotation Dual Tooth Socket",
        "Fast One-Hand Cam Latch",
      ],
      msrp: "$890",
      wholesalePrice: "$620",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="products" className="py-20 sm:py-28 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-brand-orange uppercase tracking-wider mb-2">
              <span>[ 04 / PRODUCT LINEUP ]</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950">
              Standard-Setting Positioning Hardware.
            </h2>
          </div>
          <div className="text-xs font-mono font-semibold text-slate-500 tracking-wider">
            SHOWING 3 CORE PRODUCT PLATFORMS
          </div>
        </div>

        {/* 3 Core Product Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((prod) => (
            <motion.div
              key={prod.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="relative rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between shadow-lg hover:shadow-xl hover:border-slate-300 transition-all group"
            >
              <div>
                {/* Header Badges */}
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-600 mb-3">
                  <span className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-800 font-semibold border border-slate-200">
                    {prod.categoryBadge}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${prod.statusColor} animate-pulse`} />
                    <span className="text-slate-700 font-medium">{prod.stockStatus}</span>
                  </div>
                </div>

                {/* SKU & Load Telemetry */}
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-4 pb-2 border-b border-slate-100">
                  <span>SKU: {prod.sku}</span>
                  <span>MAX LOAD: {prod.load}</span>
                </div>

                {/* Image Viewport */}
                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-50 border border-slate-100 mb-5 flex items-center justify-center p-3">
                  <Image
                    src={prod.image}
                    alt={prod.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                    className="object-contain p-2 filter contrast-105 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 text-slate-300 font-mono text-[10px]">+</div>
                  <div className="absolute top-2 right-2 text-slate-300 font-mono text-[10px]">+</div>
                </div>

                {/* Product Title & Description */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug mb-2 group-hover:text-brand-orange transition-colors">
                  {prod.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                  {prod.description}
                </p>

                {/* Key Spec Bullets */}
                <ul className="space-y-1.5 mb-6 text-xs text-slate-600">
                  {prod.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & Order Action Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-end justify-between">
                <div>
                  <div className="text-[11px] font-mono text-slate-400">
                    MSRP: <span className="line-through">{prod.msrp}</span>
                  </div>
                  <div className="text-[10px] font-mono text-brand-orange uppercase font-semibold">
                    price starts from
                  </div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-slate-950 tracking-tight">
                    from {prod.wholesalePrice}
                  </div>
                </div>

                <button
                  onClick={() =>
                    onSelectProduct(prod.title, prod.sku, prod.wholesalePrice)
                  }
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md text-xs font-mono font-bold tracking-wider text-white bg-brand-orange hover:bg-brand-orange-hover transition-all shadow-glowOrange group/btn"
                >
                  <span>Order Now</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
