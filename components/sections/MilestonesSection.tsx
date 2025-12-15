'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Briefcase, GraduationCap, Calendar, Download } from 'lucide-react'

const experiences = [
  {
    id: 'massivue',
    title: 'AI Engineer Intern',
    company: 'Massivue',
    period: 'May 2025 – Aug 2025',
    description: 'Developed AI-powered process workflow analysis platform with process mining and RAG-enhanced insights. Implemented dual AI architecture (cloud GPT-4/local Gemma-3B) with React/TypeScript dashboards for workflow optimization.',
    logo: '/logos/massivue.jpg'
  },
  {
    id: 'amcor',
    title: 'Data Automation Intern',
    company: 'Amcor Flexibles',
    period: 'Feb 2024 – May 2024',
    description: 'Developed Excel-based automation tools for HR processes, including safety certification tracking with automated alerts. Automated payroll tasks using VBA, improving data accuracy and compliance monitoring across teams.',
    logo: '/logos/amcor.png'
  },
  {
    id: 'spf',
    title: 'National Service',
    company: 'Singapore Police Force',
    period: 'April 2022 – Feb 2024',
    description: 'Police Special Operations Command - K9',
    logo: '/logos/spf.jpg'
  }
]

const education = [
  {
    id: 'nus',
    institution: 'National University of Singapore',
    degree: 'Bachelor of Engineering in Computer Engineering',
    period: 'Aug 2024 – Present',
    status: 'current',
    logo: '/logos/national-university-of-singapore-nus-logo-singapore.jpg'
  },
  {
    id: 'hcjc',
    institution: 'Hwa Chong Junior College',
    degree: 'GCE A-Levels',
    period: '2020 – 2021',
    status: 'completed',
    logo: '/logos/HC.jpg'
  },
  {
    id: 'hci',
    institution: 'Hwa Chong Institution',
    degree: 'Integrated Program',
    period: '2016 – 2019',
    status: 'completed',
    logo: '/logos/HC.jpg'
  }
]

export function MilestonesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (rect) {
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
    }
  }

  return (
    <section 
      ref={sectionRef} 
      id="milestones" 
      className="py-28 md:py-36 lg:py-48 bg-mono-white relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Subtle dot grid texture */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
      
      {/* Subtle diagonal lines - top right */}
      <div 
        className="absolute top-0 right-0 w-1/3 h-1/3 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 8px,
            #000 8px,
            #000 9px
          )`
        }}
      />
      
      {/* Subtle horizontal lines - bottom */}
      <div 
        className="absolute bottom-0 left-0 w-full h-1/4 opacity-[0.015]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 20px,
            #000 20px,
            #000 21px
          )`
        }}
      />
      
      {/* Large ZZ monogram background with animation - positioned at top for visibility */}
      <div 
        className="absolute top-20 left-0 right-0 flex justify-center pointer-events-none select-none z-[1]"
        aria-hidden="true"
      >
        <span 
          className="font-zz-monogram text-[45vw] md:text-[40vw] lg:text-[35vw] leading-none animate-zz-breathe"
          style={{ color: 'rgba(0, 0, 0, 0.12)' }}
        >
          ZZ
        </span>
      </div>
      
      {/* Subtle gradient overlays for depth - higher z-index than ZZ but transparent enough to show it */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-mono-white/80 to-transparent z-[2]" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-mono-white/80 to-transparent z-[2]" />

      <div className="max-w-6xl mx-auto px-6 lg:px-16 relative z-10">
        {/* Section Header - BIGGER with animation */}
        <div className={`mb-20 lg:mb-28 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="heading text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-mono-black mb-6">
            MILESTONES<span className="text-warm-600">.</span>
          </h2>
          <div className={`h-2 bg-warm-600 mx-auto transition-all duration-700 delay-300 ${isVisible ? 'w-24' : 'w-0'}`} />
        </div>

        {/* Experience Section - SINGLE COLUMN */}
        <div className={`mb-24 lg:mb-32 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
          <div className="flex items-center gap-4 mb-12 lg:mb-16">
            <Briefcase size={36} className="text-warm-600 lg:w-12 lg:h-12" />
            <h3 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-mono-black">Experience</h3>
          </div>

          <div className="relative">
            {/* Timeline line with gradient */}
            <div className="absolute left-10 lg:left-14 top-0 bottom-0 w-1 bg-gradient-to-b from-warm-500 via-warm-400 to-mono-300 rounded-full shadow-[0_0_8px_rgba(234,88,12,0.3)]" />

            <div className="space-y-12 lg:space-y-16">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.id} 
                  className={`relative pl-28 lg:pl-36 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${300 + index * 150}ms` }}
                >
                  {/* Timeline dot with logo - BIGGER circle, LARGER logo inside */}
                  <div className="absolute left-0 top-0 w-20 h-20 lg:w-28 lg:h-28 rounded-full bg-mono-white border-3 border-warm-500 flex items-center justify-center overflow-hidden shadow-lg">
                    {exp.logo ? (
                      <div className="w-[85%] h-[85%] relative">
                        <Image
                          src={exp.logo}
                          alt={exp.company}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <Briefcase size={32} className="text-mono-500" />
                    )}
                  </div>
                  
                  {/* Card */}
                  <div className="pt-2 lg:pt-4">
                    {/* Period */}
                    <div className="flex items-center gap-3 text-mono-500 text-lg lg:text-xl mb-3">
                      <Calendar size={20} className="lg:w-6 lg:h-6" />
                      <span>{exp.period}</span>
                    </div>

                    {/* Company & Title */}
                    <h4 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-mono-black">{exp.company}</h4>
                    <p className="text-warm-600 font-medium text-xl lg:text-2xl mb-4">{exp.title}</p>

                    {/* Description */}
                    <p className="text-mono-600 text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-4xl">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section - SINGLE COLUMN */}
        <div className={`mb-20 lg:mb-24 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
          <div className="flex items-center gap-4 mb-12 lg:mb-16">
            <GraduationCap size={36} className="text-warm-600 lg:w-12 lg:h-12" />
            <h3 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-mono-black">Education</h3>
          </div>

          <div className="relative">
            {/* Timeline line with gradient */}
            <div className="absolute left-10 lg:left-14 top-0 bottom-0 w-1 bg-gradient-to-b from-warm-400 via-mono-400 to-mono-300 rounded-full shadow-[0_0_8px_rgba(234,88,12,0.2)]" />

            <div className="space-y-12 lg:space-y-16">
              {education.map((edu, index) => (
                <div 
                  key={edu.id} 
                  className={`relative pl-28 lg:pl-36 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${600 + index * 150}ms` }}
                >
                  {/* Timeline dot - BIGGER circle, LARGER logo inside */}
                  <div className={`absolute left-0 top-0 w-20 h-20 lg:w-28 lg:h-28 rounded-full border-3 flex items-center justify-center overflow-hidden shadow-lg ${
                    edu.status === 'current' 
                      ? 'bg-mono-white border-warm-500' 
                      : 'bg-mono-white border-mono-400'
                  }`}>
                    {edu.logo ? (
                      <div className="w-[85%] h-[85%] relative">
                        <Image
                          src={edu.logo}
                          alt={edu.institution}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <GraduationCap size={40} className={`lg:w-12 lg:h-12 ${edu.status === 'current' ? 'text-warm-600' : 'text-mono-500'}`} />
                    )}
                  </div>
                  
                  {/* Card */}
                  <div className="pt-2 lg:pt-4">
                    {/* Period */}
                    <div className="flex items-center gap-3 text-mono-500 text-lg lg:text-xl mb-3">
                      <Calendar size={20} className="lg:w-6 lg:h-6" />
                      <span>{edu.period}</span>
                      {edu.status === 'current' && (
                        <span className="px-4 py-1.5 bg-warm-100 text-warm-600 text-base lg:text-lg rounded-full font-medium">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Institution */}
                    <h4 className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-mono-black">
                      {edu.institution}
                    </h4>
                    <p className="text-mono-600 text-lg lg:text-xl xl:text-2xl">
                      {edu.degree}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resume Download - BIGGER & Centered */}
        <div className="text-center">
          <a
            href="/Yang-Zhenzhao-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-10 py-5 bg-warm-600 text-white font-semibold text-xl lg:text-2xl rounded-2xl hover:bg-warm-500 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            <Download size={28} className="lg:w-8 lg:h-8" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
