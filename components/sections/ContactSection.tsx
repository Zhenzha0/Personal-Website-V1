'use client'

import { useState } from 'react'
import { Mail, Phone, Github, Linkedin, Send, ArrowUp } from 'lucide-react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    setTimeout(() => setSubmitted(false), 3000)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section id="contact" className="py-28 md:py-36 lg:py-44 bg-mono-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header - Larger */}
        <div className="mb-20 lg:mb-24">
          <h2 className="heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-mono-black mb-6">
            CONTACT<span className="text-warm-600">.</span>
          </h2>
          <div className="w-20 h-1.5 bg-warm-600" />
        </div>

        <div className="grid lg:grid-cols-2 gap-20 lg:gap-24">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold text-mono-black mb-8">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-mono-600 text-base lg:text-lg mb-3">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 bg-mono-50 border border-mono-200 rounded-xl text-mono-black text-base lg:text-lg placeholder:text-mono-400 focus:border-warm-500 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-mono-600 text-base lg:text-lg mb-3">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 bg-mono-50 border border-mono-200 rounded-xl text-mono-black text-base lg:text-lg placeholder:text-mono-400 focus:border-warm-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-mono-600 text-base lg:text-lg mb-3">Subject *</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-5 py-4 bg-mono-50 border border-mono-200 rounded-xl text-mono-black text-base lg:text-lg placeholder:text-mono-400 focus:border-warm-500 focus:outline-none transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-mono-600 text-base lg:text-lg mb-3">Message *</label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-4 bg-mono-50 border border-mono-200 rounded-xl text-mono-black text-base lg:text-lg placeholder:text-mono-400 focus:border-warm-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-3 px-8 py-4 bg-mono-black text-white font-semibold text-lg rounded-xl hover:bg-mono-800 transition-all duration-300 disabled:opacity-50 shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : submitted ? (
                  'Message Sent!'
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-semibold text-mono-black mb-8">Let's connect</h3>
            
            <p className="text-mono-600 text-lg lg:text-xl mb-10 leading-relaxed">
              Whether you have an exciting project, internship opportunity, or just want to discuss AI, 
              full-stack development, or the latest in tech—I'd love to hear from you!
            </p>

            {/* Contact Details */}
            <div className="space-y-5 mb-10">
              <a
                href="mailto:robertyzz02@gmail.com"
                className="flex items-center gap-5 p-5 bg-mono-50 border border-mono-200 rounded-xl hover:border-mono-300 transition-all group"
              >
                <div className="p-4 bg-mono-white border border-mono-200 rounded-xl group-hover:border-warm-300 group-hover:bg-warm-50 transition-colors">
                  <Mail size={24} className="text-mono-600 group-hover:text-warm-600 transition-colors" />
                </div>
                <div>
                  <p className="text-mono-500 text-base">Email</p>
                  <p className="text-mono-black font-medium text-lg lg:text-xl">robertyzz02@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+6593598155"
                className="flex items-center gap-5 p-5 bg-mono-50 border border-mono-200 rounded-xl hover:border-mono-300 transition-all group"
              >
                <div className="p-4 bg-mono-white border border-mono-200 rounded-xl group-hover:border-warm-300 group-hover:bg-warm-50 transition-colors">
                  <Phone size={24} className="text-mono-600 group-hover:text-warm-600 transition-colors" />
                </div>
                <div>
                  <p className="text-mono-500 text-base">Phone</p>
                  <p className="text-mono-black font-medium text-lg lg:text-xl">+65 9359 8155</p>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-mono-500 text-base lg:text-lg mb-5">Follow me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Zhenzha0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-mono-50 border border-mono-200 rounded-xl text-mono-600 hover:text-mono-black hover:border-mono-300 transition-all"
                  aria-label="GitHub"
                >
                  <Github size={28} />
                </a>
                <a
                  href="https://www.linkedin.com/in/zhenzhao-yang-6b30b2165"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-mono-50 border border-mono-200 rounded-xl text-mono-600 hover:text-[#0077B5] hover:border-mono-300 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Card - Sean style */}
      <footer className="mt-28 mx-4 lg:mx-12">
        <div className="max-w-7xl mx-auto">
          {/* Gradient Card */}
          <div 
            className="relative rounded-3xl overflow-hidden p-10 lg:p-16"
            style={{
              background: 'linear-gradient(135deg, rgba(255,251,235,0.9) 0%, rgba(254,243,199,0.8) 25%, rgba(253,230,138,0.4) 50%, rgba(251,191,36,0.3) 75%, rgba(217,119,6,0.2) 100%)'
            }}
          >
            {/* Decorative gradient blobs */}
            <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-warm-400/20 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-warm-300/30 blur-3xl" />
            <div className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-warm-200/40 blur-2xl" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
              {/* Left side - Name and description */}
              <div className="flex-1">
                <h3 
                  className="text-4xl lg:text-5xl font-bold text-warm-600 mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Zhenzhao
                </h3>
                <p className="text-mono-700 text-base lg:text-lg max-w-md leading-relaxed">
                  NUS Computer Engineering student passionate about AI and full-stack development. 
                  Always learning, always building.
                </p>
                
                {/* Social Icons */}
                <div className="flex gap-4 mt-6">
                  <a
                    href="https://github.com/Zhenzha0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-mono-black/10 rounded-xl text-mono-700 hover:bg-mono-black/20 hover:text-mono-900 transition-all"
                    aria-label="GitHub"
                  >
                    <Github size={22} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/zhenzhao-yang-6b30b2165"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-mono-black/10 rounded-xl text-mono-700 hover:bg-mono-black/20 hover:text-[#0077B5] transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={22} />
                  </a>
                  <a
                    href="mailto:robertyzz02@gmail.com"
                    className="p-3 bg-mono-black/10 rounded-xl text-mono-700 hover:bg-mono-black/20 hover:text-warm-600 transition-all"
                    aria-label="Email"
                  >
                    <Mail size={22} />
                  </a>
                </div>
              </div>

              {/* Right side - Navigation */}
              <div>
                <h4 className="text-warm-600 text-sm lg:text-base font-semibold uppercase tracking-wider mb-4">
                  Navigation
                </h4>
                <nav className="flex flex-col gap-2">
                  <a href="#about" className="text-mono-700 hover:text-mono-900 text-base lg:text-lg transition-colors">About</a>
                  <a href="#milestones" className="text-mono-700 hover:text-mono-900 text-base lg:text-lg transition-colors">Milestones</a>
                  <a href="#projects" className="text-mono-700 hover:text-mono-900 text-base lg:text-lg transition-colors">Projects</a>
                  <a href="#contact" className="text-mono-700 hover:text-mono-900 text-base lg:text-lg transition-colors">Contact</a>
                </nav>
              </div>
            </div>
          </div>

          {/* Back to top button */}
          <div className="flex justify-center mt-10">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-8 py-4 bg-warm-600 text-white font-semibold text-base lg:text-lg rounded-full hover:bg-warm-500 transition-all shadow-lg hover:shadow-xl"
            >
              Back to top
            </button>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center text-mono-400 text-sm lg:text-base">
            © 2025 Yang Zhenzhao. All rights reserved.
          </div>
        </div>
      </footer>
    </section>
  )
}
