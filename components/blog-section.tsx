import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User } from "lucide-react"

export function BlogSection() {
  const articles = [
    {
      title: "Can a Machine Be Gentle?",
      excerpt:
        "Exploring the intersection of artificial intelligence and tenderness, and how we can design systems that respond with care.",
      author: "Dr. Sarah Chen",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Philosophy",
      featured: true,
    },
    {
      title: "Designing Technology With a Heart",
      excerpt:
        "A framework for building compassionate systems that prioritize human wellbeing and emotional intelligence.",
      author: "Marcus Rodriguez",
      date: "March 10, 2024",
      readTime: "12 min read",
      category: "Design",
    },
    {
      title: "The Ethics of Empathy in AI",
      excerpt:
        "Examining the moral implications of creating machines that can understand and respond to human emotions.",
      author: "Prof. Aisha Patel",
      date: "March 5, 2024",
      readTime: "15 min read",
      category: "Ethics",
    },
    {
      title: "Sustainable AI: Computing with Conscience",
      excerpt: "How we can develop artificial intelligence that serves humanity while protecting our planet's future.",
      author: "Dr. James Liu",
      date: "February 28, 2024",
      readTime: "10 min read",
      category: "Sustainability",
    },
    {
      title: "The Poetry of Code: Beauty in Algorithms",
      excerpt:
        "Finding artistic expression and human meaning in the mathematical foundations of artificial intelligence.",
      author: "Elena Vasquez",
      date: "February 20, 2024",
      readTime: "7 min read",
      category: "Art & Tech",
    },
    {
      title: "Healing Through Technology",
      excerpt:
        "Stories of how compassionate machines are transforming healthcare and bringing comfort to those in need.",
      author: "Dr. Michael Thompson",
      date: "February 15, 2024",
      readTime: "11 min read",
      category: "Healthcare",
    },
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-slate-800 mb-6">Journal of Compassionate Technology</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Thoughtful explorations of emotional AI, future ethics, and human-centered design.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            {articles
              .filter((article) => article.featured)
              .map((article, index) => (
                <Card key={index} className="h-full hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                    <div className="text-center p-8">
                      <Badge className="mb-4 bg-purple-100 text-purple-700">Featured</Badge>
                      <h3 className="text-2xl font-semibold text-slate-800 mb-4">{article.title}</h3>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{article.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{article.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {article.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {article.date}
                        </div>
                      </div>
                      <Badge variant="outline">{article.category}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          {/* Article List */}
          <div className="space-y-6">
            {articles
              .filter((article) => !article.featured)
              .map((article, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {article.category}
                      </Badge>
                      <span className="text-xs text-slate-500">{article.readTime}</span>
                    </div>
                    <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-sm mb-3">{article.excerpt}</CardDescription>
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>{article.author}</span>
                      <span>{article.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
