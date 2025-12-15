'use client'

import { useState, useEffect } from 'react'
import { Menu, X, FileText } from 'lucide-react'

const navigationItems = [
  { label: 'Home', href: '#', sectionId: 'hero' },
  { label: 'About', href: '#about', sectionId: 'about' },
  { label: 'Milestones', href: '#milestones', sectionId: 'milestones' },
  { label: 'Projects', href: '#projects', sectionId: 'projects' },
  { label: 'Contact', href: '#contact', sectionId: 'contact' }
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      const scrollPosition = window.scrollY + 150

      const sections = navigationItems.map(item => ({
        id: item.sectionId,
        element: document.getElementById(item.sectionId)
      }))

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.element) {
          const rect = section.element.getBoundingClientRect()
          const elementTop = rect.top + window.scrollY
          if (scrollPosition >= elementTop - 200) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = sectionId === 'hero' ? 0 : element.offsetTop - 120
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Navigation Bar - Balanced spacing */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-mono-100/95 backdrop-blur-lg shadow-sm' : 'bg-mono-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 lg:py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('hero')}
              className="group cursor-pointer flex-shrink-0"
            >
              <span className="cursive text-2xl md:text-3xl lg:text-4xl text-mono-black hover:text-mono-600 transition-colors">
                Zhenzhao
              </span>
            </button>

            {/* Desktop Navigation - Balanced spacing */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navigationItems.map((item) => (
                <button
                  key={item.sectionId}
                  onClick={() => scrollToSection(item.sectionId)}
                  className="relative px-4 lg:px-5 py-3 group"
                >
                  {/* Top indicator line */}
                  <span 
                    className={`absolute top-0 left-3 right-3 h-0.5 lg:h-1 transition-all duration-300 ${
                      activeSection === item.sectionId 
                        ? 'bg-warm-600' 
                        : 'bg-mono-300 group-hover:bg-mono-400'
                    }`}
                  />
                  
                  <span 
                    className={`text-sm lg:text-base font-medium transition-colors duration-300 ${
                      activeSection === item.sectionId 
                        ? 'text-warm-600' 
                        : 'text-mono-500 group-hover:text-mono-700'
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Resume Button - Balanced size */}
            <div className="hidden md:flex items-center flex-shrink-0">
              <a
                href="/Yang-Zhenzhao-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 lg:gap-3 px-4 lg:px-5 py-2 lg:py-2.5 text-mono-600 hover:text-mono-800 border border-mono-300 hover:border-mono-400 rounded-lg transition-all duration-300"
              >
                <FileText size={18} className="lg:w-5 lg:h-5" />
                <span className="text-sm lg:text-base font-medium">Resume</span>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-mono-600 hover:text-mono-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-mono-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-[72px] left-4 right-4 bg-mono-white border border-mono-200 rounded-2xl z-50 md:hidden overflow-hidden shadow-lg">
            <div className="p-4 space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.sectionId}
                  onClick={() => scrollToSection(item.sectionId)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    activeSection === item.sectionId 
                      ? 'bg-warm-50 text-warm-600' 
                      : 'text-mono-600 hover:bg-mono-100 hover:text-mono-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            {/* Mobile Resume Link */}
            <div className="px-4 pb-4 pt-2 border-t border-mono-200">
              <a
                href="/Yang-Zhenzhao-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-mono-100 hover:bg-mono-200 rounded-xl text-mono-700 text-base font-medium transition-all"
              >
                <FileText size={20} />
                Download Resume
              </a>
            </div>
          </div>
        </>
      )}
    </>
  )
}
