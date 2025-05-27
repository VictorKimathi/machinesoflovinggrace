"use client"

import { useState, useEffect } from "react"

export function VisualArtSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const artPieces = [
    {
      title: "Digital Embrace",
      description: "AI-generated artwork exploring the tender connection between human and machine consciousness.",
      image: "/embrace.jpg?height=400&width=300",
    },
    {
      title: "Algorithmic Garden",
      description: "A visualization of data flowing like water through a computational ecosystem.",
      image: "/molg.webp?height=400&width=300",
    },
    {
      title: "Neural Sunset",
      description: "The beauty of artificial neural networks rendered as a peaceful landscape.",
      image: "/molg.webp?height=400&width=300",
    },
    {
      title: "Compassionate Code",
      description: "Programming languages transformed into flowing, organic forms that suggest empathy.",
      image: "/molg.webp?height=400&width=300",
    },
    {
      title: "Gentle Intelligence",
      description: "An abstract representation of AI consciousness emerging with grace and wisdom.",
      image: "/deep.webp?height=400&width=300",
    },
    {
      title: "Harmony Protocol",
      description: "The dance between human creativity and machine precision, visualized in flowing forms.",
      image: "/molg.webp?height=400&width=300",
    },
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-purple-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-slate-800 mb-6">Visual Meditations</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            AI-generated art inspired by love, grace, and the beautiful intersection of technology and humanity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artPieces.map((piece, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              style={{
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                opacity: mounted ? 1 : 0,
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Parallax container */}
              <div className="aspect-[3/4] overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                <img
                  src={piece.image || "/placeholder.svg"}
                  alt={piece.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2">{piece.title}</h3>
                  <p className="text-sm opacity-90 leading-relaxed">{piece.description}</p>
                </div>
              </div>

              {/* Gentle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Floating elements for ambiance */}
        {mounted && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-purple-300 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${4 + Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
