"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
      msrp: "$890",
      wholesalePrice: "$620",
    },
  ];

  return (
    <section id="products" className="py-20 sm:py-28 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-block text-xs font-mono font-bold text-brand-orange uppercase tracking-wider mb-2">
              [ 03 / POSITIONER LINEUP ]
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-slate-950">
              Standard-Setting Positioning Hardware.
            </h2>
          </div>
          <div className="text-xs font-mono font-semibold text-slate-500 tracking-wider">
            SHOWING 3 CORE PRODUCT PLATFORMS
          </div>
        </div>

        {/* Detailed Horizontal Catalog Stack matching Framer reference image */}
        <div className="space-y-6">
          {products.map((prod, index) => (
            <motion.div
              key={prod.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -2 }}
              className="rounded-xl bg-white border border-slate-200 p-5 sm:p-7 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 shadow-sm hover:shadow-md transition-all group"
            >
              {/* Left: Thumbnail Container */}
              <div className="relative w-full lg:w-72 h-48 sm:h-52 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center p-3 shrink-0 overflow-hidden">
                <Image
                  src={prod.image}
                  alt={prod.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 300px"
                  className="object-contain p-2 filter contrast-105 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Middle: Spec Data Sheet Middle */}
              <div className="flex-1 w-full text-left">
                {/* Meta badges row */}
                <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-slate-500 mb-2.5">
                  <span className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-800 font-semibold border border-slate-200">
                    {prod.categoryBadge}
                  </span>
                  <span>SKU: {prod.sku}</span>
                  <span>•</span>
                  <span>LOAD: {prod.load}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${prod.statusColor} animate-pulse`} />
                    <span className="font-semibold text-slate-700">{prod.stockStatus}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-950 tracking-tight leading-snug group-hover:text-brand-orange transition-colors">
                  {prod.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-2xl">
                  {prod.description}
                </p>
              </div>

              {/* Right: Pricing Box & Order Button */}
              <div className="w-full lg:w-auto shrink-0 flex flex-col items-center justify-center">
                <div className="w-full lg:w-52 rounded-lg bg-[#fffbeb] border border-[#fde68a] p-4 text-center">
                  <div className="text-[11px] font-mono text-slate-400 line-through">
                    MSRP: {prod.msrp}
                  </div>
                  <div className="text-[10px] font-mono text-amber-900 uppercase font-bold mt-0.5">
                    price starts from
                  </div>
                  <div className="text-xl sm:text-2xl font-semibold font-mono text-slate-950 tracking-tight mt-0.5">
                    from {prod.wholesalePrice}
                  </div>

                  {/* Order Button */}
                  <button
                    onClick={() =>
                      onSelectProduct(prod.title, prod.sku, prod.wholesalePrice)
                    }
                    className="mt-3.5 w-full py-2.5 px-4 rounded bg-[#0f172a] hover:bg-[#1e293b] text-white font-mono text-xs font-bold tracking-wider transition-colors shadow-sm"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
