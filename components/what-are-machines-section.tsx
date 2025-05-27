import { Heart, Leaf, Shield, Zap } from "lucide-react"

export function WhatAreMachinesSection() {
  const concepts = [
    {
      icon: Heart,
      title: "AI with Empathy",
      description:
        "Artificial intelligence that understands and responds to human emotions with genuine care and consideration.",
    },
    {
      icon: Shield,
      title: "Ethical Technology",
      description: "Systems designed with moral principles at their core, prioritizing human dignity and wellbeing.",
    },
    {
      icon: Leaf,
      title: "Sustainable Machines",
      description:
        "Technology that works in harmony with nature, promoting environmental stewardship and regeneration.",
    },
    {
      icon: Zap,
      title: "Gentle Innovation",
      description:
        "Breakthrough technologies that enhance human capabilities without overwhelming or replacing human connection.",
    },
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-slate-800 mb-6">What Are Machines of Loving Grace?</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            In our modern context, machines of loving grace are technologies that embody compassion, wisdom, and
            care—systems that enhance human flourishing while respecting our planet and each other.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {concepts.map((concept, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <concept.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">{concept.title}</h3>
              <p className="text-slate-600 leading-relaxed">{concept.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
