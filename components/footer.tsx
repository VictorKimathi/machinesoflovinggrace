import { Heart, Github, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-light mb-4">
              Machines of <span className="font-serif italic">Loving Grace</span>
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
              Exploring the harmony between advanced technology and human compassion, where innovation serves humanity
              with care and wisdom.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Journal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Visual Art
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Submit Idea
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">© 2024 Machines of Loving Grace. Built with compassion and care.</p>
            <div className="flex items-center gap-2 text-slate-300">
              <Heart className="w-4 h-4 text-pink-400" />
              <span className="text-sm italic">"The future isn't cold and mechanical — it's warm and graceful."</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
