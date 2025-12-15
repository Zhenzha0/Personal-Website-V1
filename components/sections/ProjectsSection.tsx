'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Github, ExternalLink, Play, X, Globe, Smartphone, Brain } from 'lucide-react'

const projects = [
  {
    id: 'psa-code-sprint',
    title: 'PSA L2 Ops AI-Copilot',
    category: 'Web App',
    period: 'Oct 2025',
    event: '@PSA Code Sprint',
    award: '🏆 3rd Runner Up (top 4 of 400+ teams)',
    description: 'AI diagnostic assistant analyzes alerts and generates actionable root-cause reports.',
    longDescription: 'An AI-powered co-pilot for Level 2 port operations, built to automate incident triage, diagnosis, and resolution planning. It ingests unstructured alerts from email, SMS, and phone logs, extracts ticket context, and correlates evidence across application logs, SOPs, and historical cases to surface probable root causes with confidence scores.',
    tech: ['Flask', 'Azure OpenAI', 'Postgres', 'React', 'TypeScript'],
    githubUrl: null,
    demoUrl: null,
    demoVideoUrl: '/PSA-code-sprint-demo-video.mp4',
    coverImage: '/Cover Image/PSA.png',
    isConfidential: true
  },
  {
    id: 'silver-sigma',
    title: 'SilverSigma',
    category: 'Web App',
    period: 'Sep 2025',
    event: '@SUTD WTH 2025',
    award: null,
    description: 'Digital hub for seniors to connect, explore hobbies, and chat with an AI companion.',
    longDescription: 'Part of a team of 5 to build a web-app platform for seniors, featuring real-time interactive AI avatar companionship, hobby discovery hub, and a safe social media network.',
    tech: ['React', 'Node.js', 'AI/ML', 'WebSocket'],
    githubUrl: 'https://github.com/Path-yang/SilverSigma',
    demoUrl: 'https://silver-sigma.vercel.app/',
    coverImage: '/Cover Image/silversigma.png'
  },
  {
    id: 'sentinel-ai',
    title: 'SentinelAI',
    category: 'AI/ML',
    period: 'Aug 2025 - Sep 2025',
    event: '@IDP IDEATE 2025',
    award: null,
    description: 'AI system that turns IP cameras into real-time detectors for falls and emergencies.',
    longDescription: 'Part of a team of 5 to develop an AI-powered system that transforms IP cameras into real-time anomaly detectors for falls, emergencies, and safety hazards.',
    tech: ['Python', 'FastAPI', 'Next.js', 'TypeScript', 'Docker'],
    githubUrl: 'https://github.com/Path-yang/SentinelAI',
    demoUrl: 'https://sentinel-ai-web-ll3v.vercel.app/',
    pitchVideoUrl: 'https://www.youtube.com/watch?v=mX03emoBGes',
    coverImage: '/Cover Image/sentinelai.png'
  },
  {
    id: 'lifehack',
    title: 'SigmaHealth',
    category: 'Mobile App',
    period: 'July 2025',
    event: '@NUS LIFEHACK 2025',
    award: '🏆 Finalist (top 10 of 60+ teams) • Best Usage of Data Award',
    description: 'Public health app with live data, GPT-based guidance, and community reporting.',
    longDescription: 'An AI-powered, multilingual React Native app that integrates real-time Singapore health data, GPT-based health guidance, and community reporting.',
    tech: ['React Native', 'GPT Integration', 'Real-time Data'],
    githubUrl: 'https://github.com/clemenong1/SigmaHealth',
    demoUrl: 'https://www.youtube.com/watch?v=y4ql2yiB7j4',
    demoVideoUrl: '/SigmaHealth-demo-video.mp4',
    coverImage: '/Cover Image/sigmahealth.png'
  },
  {
    id: 'dsta-brainhack',
    title: 'SigmaShield',
    category: 'Mobile App',
    period: 'June 2025 - July 2025',
    event: '@DSTA BRAINHACK CODE EXP 2025',
    award: '🏆 Finalist (top 20 of 80+ teams)',
    description: 'AI app for URL analysis, scam education, and community reporting.',
    longDescription: 'An AI-powered mobile app that helps users detect, understand, and prevent online scams with real-time URL analysis and educational content.',
    tech: ['React Native', 'AI/ML', 'Cybersecurity'],
    githubUrl: 'https://github.com/Path-yang/DSTA-Code-Exp-2025',
    demoUrl: 'https://www.canva.com/design/DAGqDBMHrzE/HRmg8WpRrwy6EB30zSUjJg/edit',
    demoVideoUrl: '/SigmaShield-demo-video.mp4',
    coverImage: '/Cover Image/Sigmashield.png'
  },
  {
    id: 'hackomania',
    title: 'NoFap',
    category: 'Web App',
    period: 'Feb 2025',
    event: '@HACKOMANIA 2025',
    award: null,
    description: 'Social motivation app featuring donation incentives and peer support.',
    longDescription: 'A modern web app designed to help users stay motivated through progress tracking, achievements, and community support.',
    tech: ['Next.js', 'TypeScript', 'MySQL', 'Open Payments API'],
    githubUrl: 'https://github.com/Path-yang/Hackomania_2025',
    demoUrl: 'https://geekshackinghackathon-8ygu.vercel.app/',
    coverImage: '/Cover Image/nofap.jpg'
  },
  {
    id: 'maritime-hackathon',
    title: 'Ship Vessel Risk Detection Model',
    category: 'AI/ML',
    period: 'Jan 2025',
    event: '@MARITIME HACKATHON 2025',
    award: '🏆 Top 3',
    description: 'A two-stage AI pipeline predicting vessel deficiency severity from inspection text.',
    longDescription: 'A two-stage AI pipeline to predict vessel deficiency severity from Port State Control inspection text using DistilBERT.',
    tech: ['Python', 'Machine Learning', 'Data Analysis'],
    githubUrl: 'https://github.com/Path-yang/Maritime-Hackathon-2025',
    demoUrl: null,
    coverImage: '/Cover Image/ShipVexsselRiskDetectionModel.png'
  }
]

// Get category icon
const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Web App': return Globe
    case 'Mobile App': return Smartphone
    case 'AI/ML': return Brain
    default: return Globe
  }
}

export function ProjectsSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set())
  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map())

  // Intersection observer for card animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-project-id')
            if (id) {
              setVisibleCards((prev) => new Set([...prev, id]))
            }
          }
        })
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-28 md:py-36 lg:py-44 bg-mono-100 relative overflow-hidden">
      {/* Subtle crosshatch pattern - left side */}
      <div 
        className="absolute top-0 left-0 w-1/2 h-full opacity-[0.02]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 12px, #000 12px, #000 13px),
            repeating-linear-gradient(-45deg, transparent, transparent 12px, #000 12px, #000 13px)
          `
        }}
      />
      
      {/* Subtle dot grid - right side */}
      <div 
        className="absolute top-0 right-0 w-2/3 h-full opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle, #000 1.5px, transparent 1.5px)`,
          backgroundSize: '32px 32px'
        }}
      />
      
      {/* Subtle vertical lines accent */}
      <div 
        className="absolute top-1/4 right-10 w-px h-1/2 bg-gradient-to-b from-transparent via-mono-400/20 to-transparent"
      />
      <div 
        className="absolute top-1/3 left-10 w-px h-1/3 bg-gradient-to-b from-transparent via-mono-400/15 to-transparent"
      />
      
      {/* Large ZZ monogram background with animation - positioned lower and more translucent */}
      <div 
        className="absolute top-1/3 left-0 right-0 flex justify-center pointer-events-none select-none z-[1]"
        aria-hidden="true"
      >
        <span 
          className="font-zz-monogram text-[45vw] md:text-[40vw] lg:text-[35vw] leading-none animate-zz-breathe"
          style={{ color: 'rgba(0, 0, 0, 0.05)', animationDelay: '3s' }}
        >
          ZZ
        </span>
      </div>
      
      {/* Subtle gradient overlays for depth - semi-transparent to show ZZ */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-mono-100/80 to-transparent z-[2]" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-mono-100/80 to-transparent z-[2]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header - Larger */}
        <div className="mb-20 lg:mb-24">
          <h2 className="heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-mono-black mb-6">
            PROJECTS<span className="text-warm-600">.</span>
          </h2>
          <div className="w-20 h-1.5 bg-warm-600" />
        </div>

        {/* Projects Grid - Larger cards with cover images */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => {
            const CategoryIcon = getCategoryIcon(project.category)
            const isVisible = visibleCards.has(project.id)
            
            return (
              <div
                key={project.id}
                data-project-id={project.id}
                ref={(el) => {
                  if (el) cardRefs.current.set(project.id, el)
                }}
                className={`group relative bg-mono-white rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Gradient border effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-warm-400 via-warm-500 to-mono-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                <div className="absolute inset-[2px] rounded-2xl bg-mono-white -z-10 group-hover:bg-mono-white" />
                
                {/* Card shadow and border */}
                <div className="absolute inset-0 rounded-2xl border border-mono-200 group-hover:border-transparent transition-colors duration-500" />
                <div className="absolute inset-0 rounded-2xl shadow-lg opacity-0 group-hover:opacity-100 group-hover:shadow-2xl transition-all duration-500" />
                {/* Cover Image with smooth hover animation */}
                {project.coverImage && (
                  <div className="relative w-full aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-mono-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}

                {/* Card Content */}
                <div className="p-6 lg:p-8">
                  {/* Category, Period & Event */}
                  <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1.5 px-3 py-1 bg-mono-100 text-mono-600 text-sm font-medium rounded-full border border-mono-200">
                        <CategoryIcon size={14} />
                        {project.category}
                      </span>
                      {project.event && (
                        <span className="px-3 py-1 bg-mono-100 text-mono-500 text-sm font-medium rounded-full border border-mono-200">
                          {project.event}
                        </span>
                      )}
                    </div>
                    <span className="text-mono-500 text-sm lg:text-base">
                      {project.period}
                    </span>
                  </div>

                  {/* Award Badge */}
                  {project.award && (
                    <div className="mb-3 px-3 py-1.5 bg-warm-50 border border-warm-200 rounded-lg text-warm-600 text-sm font-medium inline-block">
                      {project.award}
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-semibold text-mono-black mb-2 group-hover:text-warm-600 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-mono-600 text-sm lg:text-base leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-mono-50 text-mono-500 text-xs lg:text-sm rounded-md border border-mono-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer - Links */}
                <div className="px-6 lg:px-8 pb-6 lg:pb-8 pt-4 border-t border-mono-100 flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 px-3 py-2 bg-mono-100 hover:bg-mono-200 text-mono-700 text-sm rounded-lg transition-all"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 px-3 py-2 bg-warm-50 hover:bg-warm-100 text-warm-600 text-sm rounded-lg transition-all border border-warm-200"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                  {project.pitchVideoUrl && (
                    <a
                      href={project.pitchVideoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 px-3 py-2 bg-mono-800 hover:bg-mono-700 text-white text-sm rounded-lg transition-all"
                    >
                      <Play size={16} />
                      Pitch
                    </a>
                  )}
                  {project.isConfidential && (
                    <span className="text-mono-400 text-sm italic">
                      Code & demo confidential
                    </span>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-mono-black/80 backdrop-blur-sm p-4 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-mono-white rounded-2xl overflow-hidden my-8 animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-mono-white/90 hover:bg-mono-100 rounded-full transition-colors"
            >
              <X size={24} className="text-mono-600" />
            </button>

            {/* Cover Image */}
            {selectedProject.coverImage && (
              <div className="relative w-full aspect-video">
                <Image
                  src={selectedProject.coverImage}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Content */}
            <div className="p-8">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  {(() => {
                    const Icon = getCategoryIcon(selectedProject.category)
                    return (
                      <span className="flex items-center gap-1.5 px-3 py-1 bg-mono-100 text-mono-600 text-sm font-medium rounded-full">
                        <Icon size={14} />
                        {selectedProject.category}
                      </span>
                    )
                  })()}
                  {selectedProject.event && (
                    <span className="px-3 py-1 bg-mono-100 text-mono-500 text-sm font-medium rounded-full">
                      {selectedProject.event}
                    </span>
                  )}
                  <span className="text-mono-500 text-sm">{selectedProject.period}</span>
                </div>
                
                {selectedProject.award && (
                  <div className="mb-3 px-3 py-1.5 bg-warm-50 border border-warm-200 rounded-lg text-warm-600 text-sm font-medium inline-block">
                    {selectedProject.award}
                  </div>
                )}
                
                <h3 className="text-2xl lg:text-3xl font-bold text-mono-black">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Long Description */}
              <p className="text-mono-600 text-base lg:text-lg leading-relaxed mb-6">
                {selectedProject.longDescription || selectedProject.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-mono-500 mb-3 uppercase tracking-wide">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-mono-100 text-mono-600 text-sm rounded-lg border border-mono-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Demo Video */}
              {selectedProject.demoVideoUrl && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-mono-500 mb-3 uppercase tracking-wide">Demo Video</h4>
                  <div className="aspect-video bg-mono-100 rounded-xl overflow-hidden">
                    <video
                      src={selectedProject.demoVideoUrl}
                      className="w-full h-full"
                      controls
                      playsInline
                    />
                  </div>
                </div>
              )}

              {/* Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-mono-200">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 bg-mono-900 hover:bg-mono-800 text-white text-base rounded-xl transition-all"
                  >
                    <Github size={20} />
                    View Code
                  </a>
                )}
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 bg-warm-600 hover:bg-warm-500 text-white text-base rounded-xl transition-all"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                )}
                {selectedProject.pitchVideoUrl && (
                  <a
                    href={selectedProject.pitchVideoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 bg-mono-200 hover:bg-mono-300 text-mono-700 text-base rounded-xl transition-all"
                  >
                    <Play size={20} />
                    Watch Pitch
                  </a>
                )}
                {selectedProject.isConfidential && (
                  <span className="text-mono-400 text-sm italic">
                    Live site and code are confidential and cannot be shared publicly.
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
