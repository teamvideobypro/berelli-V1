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
    <main className="min-h-screen bg-medical-dark text-white flex flex-col selection:bg-brand-orange selection:text-white">
      {/* Navigation Bar */}
      <Navbar
        onOpenQuoteModal={() => {
          setSelectedProduct({ name: "", sku: "", price: "" });
          setQuoteModalOpen(true);
        }}
        onOpenLoginModal={() => setLoginModalOpen(true)}
      />

      {/* Hero Section */}
      <HeroSection
        onOpenQuoteModal={() => {
          setSelectedProduct({ name: "", sku: "", price: "" });
          setQuoteModalOpen(true);
        }}
      />

      {/* Elevated Stats Bar */}
      <StatsBar />

      {/* Clinical Biomechanics Section */}
      <ClinicalBiomechanics
        onOpenTolerancesModal={() => setTolerancesModalOpen(true)}
      />

      {/* Dynamic 360 Articulation Simulation */}
      <DynamicSimulation />

      {/* Core Product Lineup Platforms */}
      <ProductLineup onSelectProduct={handleSelectProduct} />

      {/* 4-Quadrant System Architecture */}
      <SystemArchitecture />

      {/* Mid-Page Dealer Onboarding CTA */}
      <DealerOnboardingCTA />

      {/* Verification & FAQs 2-Column Board */}
      <VerificationFAQ />

      {/* Full-Width Contact Lead & RFP Section */}
      <ContactLeadSection
        initialProduct={selectedProduct.name}
        initialSku={selectedProduct.sku}
      />

      {/* Main Comprehensive Footer */}
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
