import { HeroSection } from "@/components/hero-section"
import { IdeaBehindSection } from "@/components/idea-behind-section"
import { WhatAreMachinesSection } from "@/components/what-are-machines-section"
import { RealWorldExamplesSection } from "@/components/real-world-examples-section"
import { InteractiveSection } from "@/components/interactive-section"
import { BlogSection } from "@/components/blog-section"
import { VisualArtSection } from "@/components/visual-art-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      <HeroSection />
      <IdeaBehindSection />
      <WhatAreMachinesSection />
      <RealWorldExamplesSection />
      <InteractiveSection />
      <BlogSection />
      <VisualArtSection />
      <Footer />
    </main>
  )
}
