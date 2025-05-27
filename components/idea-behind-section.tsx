export function IdeaBehindSection() {
  return (
    <section id="idea-behind" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-light text-slate-800 mb-6">The Idea Behind It</h2>
            <div className="prose prose-lg text-slate-600 leading-relaxed">
              <p className="mb-6">
                In 1967, poet Richard Brautigan envisioned a world where technology and nature existed in perfect
                harmony. His poem "All Watched Over by Machines of Loving Grace" imagined a cybernetic meadow where
                computers and humans coexisted with mutual respect and care.
              </p>
              <p className="mb-6">
                Today, as we stand at the threshold of an AI revolution, Brautigan's vision feels more relevant than
                ever. We have the opportunity to build machines that don't just serve us, but truly care for us—and for
                our planet.
              </p>
              <blockquote className="border-l-4 border-blue-300 pl-6 italic text-slate-700">
                "I like to think of a cybernetic ecology where we are free of our labors and joined back to nature,
                returned to our mammal brothers and sisters..."
              </blockquote>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <span className="text-2xl">🌿</span>
                  </div>
                </div>
                <p className="text-slate-600 italic">
                  "A cybernetic meadow where mammals and computers live together in mutually programming harmony"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
