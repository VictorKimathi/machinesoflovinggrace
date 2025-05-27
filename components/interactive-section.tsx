"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, Heart, Lightbulb } from "lucide-react"

export function InteractiveSection() {
  const [chatMessages, setChatMessages] = useState([
    {
      type: "bot",
      message: "Hello! I'm Grace, an AI assistant designed with empathy and care. How can I help you today? 💙",
    },
  ])
  const [chatInput, setChatInput] = useState("")
  const [ideaTitle, setIdeaTitle] = useState("")
  const [ideaDescription, setIdeaDescription] = useState("")

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!chatInput.trim()) return

    const userMessage = { type: "user", message: chatInput }
    setChatMessages((prev) => [...prev, userMessage])

    // Simulate AI response with empathy
    setTimeout(() => {
      const responses = [
        "I understand how you're feeling. That sounds challenging, and I want you to know that your feelings are valid. 🤗",
        "Thank you for sharing that with me. I can sense this is important to you. How can we work together to find a gentle solution?",
        "I appreciate your trust in opening up about this. Let's explore this thoughtfully and with care. 💚",
        "That's a beautiful perspective. I'm here to listen and support you in whatever way feels most helpful. ✨",
      ]
      const botMessage = {
        type: "bot",
        message: responses[Math.floor(Math.random() * responses.length)],
      }
      setChatMessages((prev) => [...prev, botMessage])
    }, 1000)

    setChatInput("")
  }

  const handleIdeaSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!ideaTitle.trim() || !ideaDescription.trim()) return

    // Simulate submission
    alert("Thank you for your beautiful idea! We'll review it with care and consideration. 💙")
    setIdeaTitle("")
    setIdeaDescription("")
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-slate-800 mb-6">Interactive Experience</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Experience compassionate AI and share your vision for machines of loving grace.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Chatbot Section */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-pink-500" />
                Chat with Grace
              </CardTitle>
              <CardDescription>Experience an AI assistant designed with empathy and care</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 overflow-y-auto mb-4 p-4 bg-slate-50 rounded-lg">
                {chatMessages.map((msg, index) => (
                  <div key={index} className={`mb-4 ${msg.type === "user" ? "text-right" : "text-left"}`}>
                    <div
                      className={`inline-block p-3 rounded-lg max-w-xs ${
                        msg.type === "user" ? "bg-blue-600 text-white" : "bg-white text-slate-700 shadow-sm"
                      }`}
                    >
                      {msg.message}
                    </div>
                  </div>
                ))}
              </div>
              <form onSubmit={handleChatSubmit} className="flex gap-2">
                <Input
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Share your thoughts..."
                  className="flex-1"
                />
                <Button type="submit" size="icon">
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Idea Submission Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-500" />
                Submit Your Idea
              </CardTitle>
              <CardDescription>Share your vision for a machine of loving grace</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleIdeaSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Idea Title</label>
                  <Input
                    value={ideaTitle}
                    onChange={(e) => setIdeaTitle(e.target.value)}
                    placeholder="What would you call your graceful machine?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
                  <Textarea
                    value={ideaDescription}
                    onChange={(e) => setIdeaDescription(e.target.value)}
                    placeholder="Describe how your machine would help humanity with love and care..."
                    rows={6}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Share Your Vision
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
