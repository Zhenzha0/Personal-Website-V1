'use client'

import { Section } from '@/components/ui/Section'
import { Timeline } from '@/components/ui/Timeline'

const experiences = [
  {
    id: 'massivue',
    title: 'AI Engineer Intern',
    company: 'Massivue',
    period: 'May 2025 – Aug 2025',
    description: [
      'Developed AI-powered process workflow analysis platform with process mining and RAG-enhanced insights.',
      'Implemented dual AI architecture (cloud GPT-4/local Gemma-3B) with React/TypeScript dashboards for workflow optimization.'
    ],
    logo: '/logos/massivue.jpg'
  },
  {
    id: 'amcor',
    title: 'Data Automation Intern',
    company: 'Amcor Flexibles',
    period: 'Feb 2024 – May 2024',
    description: [
      'Developed Excel-based automation tools for HR processes, including safety certification tracking with automated alerts.',
      'Automated payroll tasks using VBA, improving data accuracy and compliance monitoring across teams.'
    ],
    logo: '/logos/amcor.png'
  },
  {
    id: 'spf',
    title: 'National Service',
    company: 'Singapore Police Force',
    period: 'April 2022 – Feb 2024',
    description: [
      'Police Special Operations Command - K9'
    ],
    logo: '/logos/spf.jpg'
  }
]

export function ExperienceSection() {
  return (
    <Section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container-max section-padding relative z-10">
        <h2 className="heading text-3xl md:text-4xl lg:text-5xl mb-16 text-center text-accent-blue">
          Professional Journey
        </h2>
        
        <Timeline items={experiences} />
      </div>
    </Section>
  )
}

