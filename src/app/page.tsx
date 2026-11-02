"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StatsBar } from "@/components/StatsBar";
import { ClinicalBiomechanics } from "@/components/ClinicalBiomechanics";
import { DynamicSimulation } from "@/components/DynamicSimulation";
import { ProductLineup } from "@/components/ProductLineup";
import { SystemArchitecture } from "@/components/SystemArchitecture";
import { DealerOnboardingCTA } from "@/components/DealerOnboardingCTA";
import { VerificationFAQ } from "@/components/VerificationFAQ";
import { ContactLeadSection } from "@/components/ContactLeadSection";
import { Footer } from "@/components/Footer";
import {
  QuoteModal,
  DealerLoginModal,
  EngineeringTolerancesModal,
} from "@/components/Modals";

export default function Home() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [tolerancesModalOpen, setTolerancesModalOpen] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState<{
    name: string;
    sku: string;
    price: string;
  }>({
    name: "",
    sku: "",
    price: "",
  });

  const handleSelectProduct = (name: string, sku: string, price: string) => {
    setSelectedProduct({ name, sku, price });
    setQuoteModalOpen(true);
  };

  return (
    <main className="min-h-screen w-full overflow-x-clip selection:bg-brand-orange selection:text-white">
      {/* Navigation Bar (Dark Utilitarian Control Bar) */}
      <Navbar
        onOpenQuoteModal={() => {
          setSelectedProduct({ name: "", sku: "", price: "" });
          setQuoteModalOpen(true);
        }}
        onOpenLoginModal={() => setLoginModalOpen(true)}
      />

      {/* 1. Hero Section (Dark Theme matching Frame 5 (2).jpg) */}
      <HeroSection
        onOpenQuoteModal={() => {
          setSelectedProduct({ name: "", sku: "", price: "" });
          setQuoteModalOpen(true);
        }}
      />

      {/* Elevated Stats Bar Deck (Overlapping Dark-to-Light Transition) */}
      <StatsBar />

      {/* 2. Clinical Biomechanics (Light Theme matching AboutSection Variant 2) */}
      <ClinicalBiomechanics
        onOpenTolerancesModal={() => setTolerancesModalOpen(true)}
      />

      {/* Dynamic 360 Articulation Simulation Console */}
      <DynamicSimulation />

      {/* 3. Product Lineup (Light Theme Variant) */}
      <ProductLineup onSelectProduct={handleSelectProduct} />

      {/* 3. System Architecture (Light Theme Variant) */}
      <SystemArchitecture />

      {/* Mid-Page Dealer Onboarding CTA */}
      <DealerOnboardingCTA />

      {/* 3. Verification & FAQs 2-Column Board (Light Theme Variant) */}
      <VerificationFAQ />

      {/* 4. Contact / Proposal Section (Full-Width Orange Theme matching ContactLeadSection Variant 2) */}
      <ContactLeadSection
        initialProduct={selectedProduct.name}
        initialSku={selectedProduct.sku}
      />

      {/* Comprehensive Medical Footer */}
      <Footer />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        selectedProduct={selectedProduct.name}
        selectedSku={selectedProduct.sku}
        selectedPrice={selectedProduct.price}
      />

      <DealerLoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />

      <EngineeringTolerancesModal
        isOpen={tolerancesModalOpen}
        onClose={() => setTolerancesModalOpen(false)}
      />
    </main>
  );
}
