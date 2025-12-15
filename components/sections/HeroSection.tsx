'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { ParticleWave } from '@/components/ui/ParticleWave'

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const svgRefs = useRef<(SVGSVGElement | null)[]>([])

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const name = 'ZHENZHAO'

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-mono-100 pt-24 lg:pt-28 relative overflow-hidden">
      {/* Particle Wave Background */}
      <ParticleWave />
      
      <div className="w-full max-w-[95vw] lg:max-w-[90vw] mx-auto px-4 md:px-8 text-center relative z-10">
        {/* Weaver animated name using SVG - BIGGER */}
        <div 
          className={`flex justify-center items-center mb-16 lg:mb-20 transition-opacity duration-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {name.split('').map((letter, index) => {
            const isHovered = hoveredIndex === index
            
            return (
              <div
                key={index}
                className="relative cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  width: 'clamp(45px, 11vw, 200px)',
                  height: 'clamp(60px, 14vw, 260px)',
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <svg
                  ref={(el) => { svgRefs.current[index] = el }}
                  viewBox="0 0 100 100"
                  className="w-full h-full overflow-visible"
                  style={{
                    transform: isLoaded 
                      ? `translateY(${Math.sin((Date.now() / 1000 + index * 0.5)) * 3}px)` 
                      : 'translateY(20px)',
                    transition: 'transform 0.6s ease-out',
                  }}
                >
                  {/* Solid fill letter */}
                  <text
                    x="50"
                    y="75"
                    textAnchor="middle"
                    className="font-bold"
                    style={{
                      fontSize: '80px',
                      fontFamily: 'Playfair Display, Georgia, serif',
                      fill: isHovered ? 'transparent' : '#000',
                      transition: 'fill 0.3s ease, opacity 0.3s ease',
                      opacity: isHovered ? 0 : 1,
                    }}
                  >
                    {letter}
                  </text>
                  
                  {/* Weaved stroke letter */}
                  <text
                    x="50"
                    y="75"
                    textAnchor="middle"
                    className="font-bold"
                    style={{
                      fontSize: '80px',
                      fontFamily: 'Playfair Display, Georgia, serif',
                      fill: 'none',
                      stroke: '#D97706',
                      strokeWidth: isHovered ? '1.5' : '0',
                      strokeDasharray: '1000',
                      strokeDashoffset: isHovered ? '0' : '1000',
                      transition: 'stroke-dashoffset 1.5s ease-in-out, stroke-width 0.3s ease',
                    }}
                  >
                    {letter}
                  </text>
                  
                  {/* Ghost outline for depth */}
                  <text
                    x="50"
                    y="75"
                    textAnchor="middle"
                    className="font-bold"
                    style={{
                      fontSize: '80px',
                      fontFamily: 'Playfair Display, Georgia, serif',
                      fill: 'none',
                      stroke: isHovered ? '#D97706' : '#E5E5E5',
                      strokeWidth: '0.5',
                      opacity: isHovered ? 1 : 0.5,
                      transition: 'stroke 0.3s ease, opacity 0.3s ease',
                    }}
                  >
                    {letter}
                  </text>
                </svg>
              </div>
            )
          })}
        </div>

        {/* Taglines - BIGGER */}
        <div 
          className={`flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-20 transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* First phrase */}
          <div className="text-center md:text-right">
            <p className="text-xl md:text-3xl lg:text-4xl xl:text-5xl text-mono-500 tracking-wide">
              NUS Computer
            </p>
            <p className="text-xl md:text-3xl lg:text-4xl xl:text-5xl text-mono-800 font-medium tracking-wide">
              Engineering
            </p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-20 lg:h-28 bg-mono-300" />

          {/* Second phrase */}
          <div className="text-center md:text-left">
            <p className="text-xl md:text-3xl lg:text-4xl xl:text-5xl text-mono-500 tracking-wide">
              AI Engineer &
            </p>
            <p className="text-xl md:text-3xl lg:text-4xl xl:text-5xl text-mono-800 font-medium tracking-wide">
              Fullstack Developer
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator - larger */}
      <button
        onClick={scrollToAbout}
        aria-label="Scroll to about section"
        className={`absolute bottom-16 left-1/2 -translate-x-1/2 p-4 text-mono-400 hover:text-mono-600 transition-all duration-300 cursor-pointer z-10 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '1000ms' }}
      >
        <ChevronDown size={48} className="animate-bounce" />
      </button>
    </section>
  )
}
