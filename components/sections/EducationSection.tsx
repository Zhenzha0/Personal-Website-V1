'use client'

import { Section } from '@/components/ui/Section'
import { EducationTimeline } from '@/components/ui/EducationTimeline'
import { GraduationCap, Award, BookOpen } from 'lucide-react'

const educationData = [
  {
    id: 'nus',
    institution: 'National University of Singapore',
    degree: 'Bachelor of Engineering in Computer Engineering',
    period: 'Aug 2024 – Present',
    status: 'current' as const,
    description: [],
    icon: GraduationCap,
    location: 'Singapore'
  },
  {
    id: 'hcjc',
    institution: 'Hwa Chong Junior College',
    degree: 'GCE A-Levels',
    period: '2020 – 2021',
    status: 'completed' as const,
    description: [],
    icon: Award,
    location: 'Singapore'
  },
  {
    id: 'hci',
    institution: 'Hwa Chong Institution',
    degree: 'Integrated Program',
    period: '2016 – 2019',
    status: 'completed' as const,
    description: [],
    icon: BookOpen,
    location: 'Singapore'
  }
]

export function EducationSection() {
  return (
    <Section 
      id="education" 
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%)' }}
    >
      <div className="container-max section-padding relative z-10">
        <div>
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-4 mb-6 p-4 bg-gradient-to-r from-accent-blue/10 to-accent-mint/10 rounded-2xl border border-accent-blue/20 backdrop-blur-sm">
              <GraduationCap size={32} className="text-accent-blue" />
              <span className="text-accent-mint font-medium text-lg">Academic Excellence</span>
            </div>
            
            <h2 
              className="heading text-4xl md:text-5xl lg:text-6xl mb-6 text-white"
              style={{
                textShadow: '0 0 30px rgba(96, 165, 250, 0.3)',
                background: 'linear-gradient(135deg, #FFFFFF 0%, #60A5FA 50%, #34D399 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Educational Journey
            </h2>
          </div>

          {/* Education Timeline */}
          <div>
            <EducationTimeline items={educationData} />
          </div>
        </div>
      </div>
    </Section>
  )
}
