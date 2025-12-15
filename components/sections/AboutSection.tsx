'use client'

import Image from 'next/image'
import { useEffect, useState, useRef } from 'react'

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="relative overflow-hidden">
      {/* Mobile: Stacked layout, Desktop: Side by side */}
      <div className="flex flex-col lg:grid lg:grid-cols-2 min-h-screen">
        {/* Text content - Full width on mobile, left half on desktop */}
        <div 
          className="relative py-20 md:py-28 lg:py-40 px-8 md:px-16 lg:px-20 xl:px-32 flex flex-col justify-center order-2 lg:order-1"
          style={{
            background: 'linear-gradient(to right, #FFFFFF 0%, #FAFAFA 30%, #E8E8E8 55%, #9A9A9A 75%, #4A4A4A 90%, #252525 100%)'
          }}
        >
          <div className="max-w-3xl relative z-10">
            {/* Section Header - BIGGER */}
            <div className="mb-12 lg:mb-20">
              <h2 
                className={`heading text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-mono-black mb-6 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
              >
                ABOUT ME<span className="text-warm-600">.</span>
              </h2>
              <div 
                className={`h-2 bg-warm-600 transition-all duration-700 delay-200 ${
                  isVisible ? 'opacity-100 w-24' : 'opacity-0 w-0'
                }`}
              />
            </div>

            {/* Text Content - BIGGER */}
            <div className="space-y-8 lg:space-y-10">
              <p 
                className={`text-xl md:text-2xl lg:text-3xl text-mono-700 leading-relaxed transition-all duration-700 delay-300 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                I'm a Computer Engineering student at the National University of Singapore, 
                passionate about building intelligent systems that solve real-world problems. 
                My experience spans from developing AI-powered process workflow platforms 
                to creating full-stack applications that impact users.
              </p>
              
              <p 
                className={`text-xl md:text-2xl lg:text-3xl text-mono-700 leading-relaxed transition-all duration-700 delay-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                With experience in AI/ML development, I have architected hybrid solutions 
                switching between cloud-based and locally optimized models. I thrive at 
                the intersection of cutting-edge research and practical implementation, 
                always seeking to push the boundaries of what's possible.
              </p>
              
              <p 
                className={`text-xl md:text-2xl lg:text-3xl text-mono-700 leading-relaxed transition-all duration-700 delay-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                I am eager to learn and collaborate with talented individuals through 
                new opportunities that challenge me to grow and make a meaningful impact.
              </p>
            </div>
          </div>
        </div>

        {/* Profile image - Full width on mobile (stacked above), right half on desktop */}
        <div className="relative h-[50vh] md:h-[60vh] lg:h-auto order-1 lg:order-2">
          {/* Profile Image */}
          <Image
            src="/new-profile.jpg"
            alt="Zhenzhao - About Me"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          
          {/* Gradient overlay - seamless blend from text side to image (desktop only) - reduced opacity to preserve image clarity */}
          <div 
            className="absolute inset-0 pointer-events-none hidden lg:block"
            style={{
              background: 'linear-gradient(to right, #252525 0%, rgba(37,37,37,0.9) 5%, rgba(50,50,50,0.7) 15%, rgba(80,80,80,0.4) 30%, rgba(120,120,120,0.15) 45%, transparent 65%)'
            }}
          />
          
          {/* Mobile gradient - bottom fade */}
          <div 
            className="absolute inset-0 pointer-events-none lg:hidden"
            style={{
              background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0.5) 100%)'
            }}
          />
          
          {/* Subtle top/bottom vignette for depth */}
          <div 
            className="absolute inset-0 pointer-events-none hidden lg:block"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, transparent 15%, transparent 85%, rgba(0,0,0,0.1) 100%)'
            }}
          />
        </div>
      </div>
    </section>
  )
}
