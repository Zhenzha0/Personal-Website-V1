'use client'

import { Section } from '@/components/ui/Section'
import { SkillCloud } from '@/components/ui/SkillCloud'
import { Code, Database, Cpu, Terminal, Zap, Brain, Palette, Wrench } from 'lucide-react'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'TypeScript'],
    color: 'from-blue-500/20 to-indigo-500/20',
    borderColor: 'border-blue-400/30',
    iconColor: 'text-blue-400'
  },
  {
    title: 'Frameworks & Libraries',
    icon: Terminal,
    skills: ['TensorFlow', 'Scikit-learn', 'NumPy', 'Flask', 'React', 'Next.js', 'React Native'],
    color: 'from-green-500/20 to-emerald-500/20',
    borderColor: 'border-green-400/30',
    iconColor: 'text-green-400'
  },
  {
    title: 'Data & Analytics',
    icon: Database,
    skills: ['Machine Learning', 'Data Analysis', 'Excel', 'Exploratory Data Analysis', 'Process Mining'],
    color: 'from-purple-500/20 to-violet-500/20',
    borderColor: 'border-purple-400/30',
    iconColor: 'text-purple-400'
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: ['Git', 'AutoCAD Fusion', 'Replit', 'Cursor', 'Figma', 'MySQL', 'Node.js'],
    color: 'from-orange-500/20 to-red-500/20',
    borderColor: 'border-orange-400/30',
    iconColor: 'text-orange-400'
  },
  {
    title: 'Embedded & Hardware',
    icon: Cpu,
    skills: ['Arduino', 'Raspberry Pi', 'FPGA (Vivado)', 'Circuit Design', 'Sensor Integration'],
    color: 'from-cyan-500/20 to-teal-500/20',
    borderColor: 'border-cyan-400/30',
    iconColor: 'text-cyan-400'
  },
  {
    title: 'Core Concepts',
    icon: Brain,
    skills: ['Object-Oriented Programming', 'Data Structures & Algorithms', 'Networking Protocols', 'AI/ML Architecture', 'Full-Stack Development'],
    color: 'from-pink-500/20 to-rose-500/20',
    borderColor: 'border-pink-400/30',
    iconColor: 'text-pink-400'
  }
]

export function SkillsSection() {
  return (
    <Section 
      id="skills" 
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 100%)' }}
    >
      <div className="container-max section-padding relative z-10">
        <div>
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-4 mb-6 p-4 bg-gradient-to-r from-accent-blue/10 to-accent-mint/10 rounded-2xl border border-accent-blue/20 backdrop-blur-sm">
              <Zap size={32} className="text-accent-blue" />
              <span className="text-accent-mint font-medium text-lg">Technical Expertise</span>
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
              Technical Skills
            </h2>

            <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit spanning from low-level systems to cutting-edge AI, 
              built through hands-on projects and real-world applications.
            </p>
          </div>

          {/* Skills Categories Grid */}
          <div className="grid gap-12 md:gap-16">
            {skillCategories.map((category) => {
              const Icon = category.icon
              
              return (
                <div
                  key={category.title}
                  className="group px-3 sm:px-6"
                >
                  {/* Category Header */}
                  <div className="flex items-center justify-center gap-4 mb-8 px-4">
                    <div className={`px-4 py-3 sm:px-4 sm:py-3.5 bg-gradient-to-br ${category.color} ${category.borderColor} border rounded-xl backdrop-blur-sm shadow-lg`}>
                      <Icon size={24} className={category.iconColor} />
                    </div>
                    
                    <h3 
                      className="heading text-xl md:text-2xl font-semibold text-white"
                      style={{
                        textShadow: '0 0 20px rgba(96, 165, 250, 0.2)'
                      }}
                    >
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Cloud */}
                  <div>
                    <SkillCloud 
                      skills={category.skills} 
                      categoryColor={category.color}
                      categoryBorder={category.borderColor}
                    />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-accent-blue/10 to-accent-mint/10 rounded-full border border-accent-blue/20 backdrop-blur-sm">
              <Palette size={20} className="text-accent-mint" />
              <span className="text-slate-300 font-medium">
                Always learning, always building
              </span>
              <Zap size={16} className="text-accent-blue" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
