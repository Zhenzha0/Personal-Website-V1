'use client'

import { useEffect, useState } from 'react'

export function PageTransition() {
  const [isLoading, setIsLoading] = useState(true)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // Initial page load animation
    const timer = setTimeout(() => {
      setIsExiting(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 800)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      {/* Main curtain panels */}
      <div 
        className={`absolute inset-0 flex transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isExiting ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        {/* Left panel */}
        <div 
          className="w-1/2 h-full bg-mono-950 relative overflow-hidden"
          style={{ transitionDelay: '0ms' }}
        >
          {/* Gradient shine effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-warm-600/20 via-transparent to-transparent" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-warm-500/10 to-transparent" />
        </div>
        
        {/* Right panel */}
        <div 
          className="w-1/2 h-full bg-mono-900 relative overflow-hidden"
          style={{ transitionDelay: '50ms' }}
        >
          {/* Gradient shine effect */}
          <div className="absolute inset-0 bg-gradient-to-bl from-mono-700/30 via-transparent to-transparent" />
        </div>
      </div>

      {/* Logo/Name reveal in center */}
      <div 
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
          isExiting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        <div className="text-center">
          <h1 className="cursive text-5xl md:text-7xl lg:text-8xl text-white mb-4">
            Zhenzhao
          </h1>
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-0.5 bg-warm-500" />
            <span className="text-mono-400 text-sm tracking-widest uppercase">Portfolio</span>
            <div className="w-8 h-0.5 bg-warm-500" />
          </div>
        </div>
      </div>

      {/* Bottom wipe line */}
      <div 
        className={`absolute bottom-0 left-0 right-0 h-1 bg-warm-500 transition-transform duration-500 origin-left ${
          isExiting ? 'scale-x-0' : 'scale-x-100'
        }`}
        style={{ transitionDelay: '200ms' }}
      />
    </div>
  )
}
