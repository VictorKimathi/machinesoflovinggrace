"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToNext = () => {
    const nextSection = document.getElementById("idea-behind")
    nextSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-green-100">
        <div className="absolute inset-0 opacity-30">
          {mounted && (
            <>
              {/* Floating particles */}
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-300 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${3 + Math.random() * 2}s`,
                  }}
                />
              ))}
              {/* Gentle waves */}
              <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-green-200/20 to-transparent animate-pulse" />
            </>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-light text-slate-800 mb-6 leading-tight">
          Machines of <span className="font-serif italic text-blue-600">Loving Grace</span>
        </h1>

        <blockquote className="text-xl md:text-2xl text-slate-600 mb-8 font-light italic">
          "All Watched Over by Machines of Loving Grace"
        </blockquote>

        <p className="text-lg md:text-xl text-slate-700 mb-12 max-w-2xl mx-auto leading-relaxed">
          Exploring the harmony between advanced technology and human compassion, where artificial intelligence meets
          empathy and innovation serves humanity.
        </p>

        <Button
          onClick={scrollToNext}
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Explore the Future of Compassionate Technology
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-slate-400" />
      </div>
    </section>
  )
}
