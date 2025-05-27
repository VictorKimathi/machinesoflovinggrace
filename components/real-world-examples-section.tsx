import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function RealWorldExamplesSection() {
  const examples = [
    {
      title: "AI-Powered Prosthetics",
      image: "/placeholder.svg?height=200&width=300",
      story:
        "Advanced prosthetic limbs that learn from neural signals, giving amputees natural movement and even a sense of touch.",
      impact: "Restores dignity and independence to those who have lost limbs",
      category: "Healthcare",
    },
    {
      title: "Companion Robots for Elderly",
      image: "/placeholder.svg?height=200&width=300",
      story:
        "Gentle robots that provide companionship, medication reminders, and emergency assistance for aging populations.",
      impact: "Reduces loneliness while maintaining independence and safety",
      category: "Social Care",
    },
    {
      title: "Ocean Cleanup Drones",
      image: "/placeholder.svg?height=200&width=300",
      story:
        "Autonomous marine vehicles that collect plastic waste while protecting sea life through gentle, bio-inspired movements.",
      impact: "Heals our oceans while preserving marine ecosystems",
      category: "Environment",
    },
    {
      title: "Therapeutic AI Assistants",
      image: "/placeholder.svg?height=200&width=300",
      story:
        "AI counselors trained in empathy and active listening, providing 24/7 mental health support with human warmth.",
      impact: "Makes mental healthcare accessible to everyone, everywhere",
      category: "Mental Health",
    },
    {
      title: "Smart Urban Gardens",
      image: "/placeholder.svg?height=200&width=300",
      story:
        "Intelligent growing systems that optimize water, nutrients, and light to grow food in cities with minimal environmental impact.",
      impact: "Feeds communities while regenerating urban environments",
      category: "Sustainability",
    },
    {
      title: "Assistive Learning AI",
      image: "/placeholder.svg?height=200&width=300",
      story:
        "Educational AI that adapts to each child's learning style, providing patient, encouraging support for students with disabilities.",
      impact: "Ensures every child can learn and thrive at their own pace",
      category: "Education",
    },
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-slate-800 mb-6">Real-World Examples</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover machines that are already helping humans with care, dignity, and grace— proving that technology can
            be both powerful and compassionate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                <img
                  src={example.image || "/placeholder.svg"}
                  alt={example.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    {example.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-slate-800">{example.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 mb-4 leading-relaxed">{example.story}</CardDescription>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-blue-800 mb-1">Why it matters:</p>
                  <p className="text-sm text-blue-700">{example.impact}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
