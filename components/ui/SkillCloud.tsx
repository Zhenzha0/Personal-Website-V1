'use client'

interface SkillCloudProps {
  skills: string[]
  categoryColor?: string
  categoryBorder?: string
}

export function SkillCloud({ skills, categoryColor = 'from-slate-500/20 to-gray-500/20', categoryBorder = 'border-slate-400/30' }: SkillCloudProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 px-2 sm:px-4">
      {skills.map((skill) => (
        <button
          key={skill}
          className={`px-6 py-3 bg-gradient-to-br ${categoryColor} backdrop-blur-sm border ${categoryBorder} rounded-full text-sm font-medium text-slate-300 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:ring-offset-2 focus:ring-offset-dark-bg`}
        >
          <span>{skill}</span>
        </button>
      ))}
    </div>
  )
}
