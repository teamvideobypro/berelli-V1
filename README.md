# Bereli Medical Technologies - Surgical Hardware Landing Page

A pixel-perfect, production-ready React / Next.js 14 web application replicating the [Bereli Medical Framer Design](https://jubilant-charts-978357.framer.app/). Engineered for hospital surgical centers, ambulatory surgery centers (ASCs), and medical equipment distributors.

---

## 🚀 Features

- **Exact UI Replication**: Faithfully matches the bento grid architecture, surgical dark mode aesthetic, orange accent telemetry (`#ff4d15`), and typography (`Inter` + `JetBrains Mono`).
- **100% Responsive**: Tailored for Mobile, Tablet, and Desktop breakpoints using Tailwind CSS and modern CSS layout techniques.
- **Scroll & Spring Animations**: Powered by `framer-motion` with `whileInView`, staggered bento card entrances, and smooth spring physics.
- **Modular Component Architecture**:
  - `Navbar`: Sticky translucent control bar with breadcrumb nav, responsive drawer, and quick quote trigger.
  - `HeroSection`: Central hardware stage showcasing the OmniGrip-800X with flanking telemetry HUD panes (`MAT: 316L`, `350N Force`).
  - `StatsBar`: Elevated modular 4-tile deck overlapping the transition (`ISO 13485`, `500+ ASCs`, `GPO Wholesale`, `10-Year Warranty`).
  - `ClinicalBiomechanics`: Left sticky narrative block + Right 2x2 diagnostic grid with micron locking data.
  - `DynamicSimulation`: Medical workstation console with interactive 360° articulation angle controls and real-time kinematic telemetry.
  - `ProductLineup`: 3 core product platforms (OmniGrip Lithotomy, AeroFlex Orthopedic, Universal Rail Clamp) with load capacities, SKU codes, and direct quoting.
  - `SystemArchitecture`: 4-quadrant matrix contrasting Clinical OR Performance vs. Dealer & GPO Commercial Terms.
  - `DealerOnboardingCTA`: High-impact one-click distributor application input with instant validation.
  - `VerificationFAQ`: 2-column categorized FAQ board with animated accordions and VAC dossier request.
  - `ContactLeadSection`: Comprehensive 3-step Request Proposal / Dealer Pricing RFP form.
  - `Footer`: 5-column directory with giant vector watermark, compliance tags, and smooth back-to-top scroll.
  - `Modals`: Interactive quote tender modal, dealer login simulator, and ISO 13485 engineering tolerance blueprint.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org)
- **Library**: [React 18](https://react.dev)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com)
- **Animations**: [Framer Motion 11](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev)
- **Language**: TypeScript

---

## 📦 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 🌐 Deploy to Vercel & Push to GitHub

### Option A: Using Git & GitHub CLI / Web
1. Create a new repository on your GitHub account (e.g. `bereli-medical`).
2. Link your local repository and push:
```bash
git remote add origin https://github.com/<your-username>/bereli-medical.git
git push -u origin main
```
3. Import the repository in [Vercel](https://vercel.com/new). Vercel will automatically detect Next.js and deploy with zero configuration.

### Option B: Using Vercel CLI
```bash
npx vercel
```
Follow the on-screen prompts to deploy instantly to a live `.vercel.app` preview URL.


# berreali-v1
