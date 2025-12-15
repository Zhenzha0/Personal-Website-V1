'use client'

interface TimelineItem {
  id: string
  title: string
  company: string
  period: string
  description: string[]
  logo?: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-1">
        <svg 
          className="w-full h-full" 
          viewBox="0 0 4 100" 
          preserveAspectRatio="none"
        >
          <path
            d="M2 0 L2 100"
            stroke="url(#timelineGradient)"
            strokeWidth="3"
            fill="none"
          />
          
          <defs>
            <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.9" />
              <stop offset="30%" stopColor="#34D399" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#60A5FA" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#34D399" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Timeline Items */}
      <div className="space-y-12">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative pl-20"
          >
            {/* Timeline Node */}
            <div 
              className="absolute left-5 top-2 w-6 h-6 rounded-full border-4 border-dark-bg"
              style={{
                background: 'linear-gradient(45deg, #60A5FA, #34D399)',
                boxShadow: '0 0 20px rgba(96, 165, 250, 0.4)'
              }}
            >
              <div className="absolute inset-1 bg-white rounded-full opacity-80" />
            </div>

            {/* Content Card */}
            <div 
              className="relative bg-gradient-to-br from-dark-card/60 to-dark-card/30 backdrop-blur-sm border border-dark-border rounded-2xl p-6"
              style={{
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
              }}
            >
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="heading text-xl md:text-2xl font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-5">
                      {item.logo && (
                        <div className="w-32 h-24 flex items-center justify-center bg-white rounded-xl p-3 shadow-lg border border-gray-100 overflow-hidden">
                          <img 
                            src={item.logo} 
                            alt={`${item.company} logo`}
                            className="max-w-full max-h-full object-contain"
                            style={{ minWidth: '80px', minHeight: '60px' }}
                            loading="lazy"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                        </div>
                      )}
                      <p className="text-accent-blue font-medium text-lg">
                        {item.company}
                      </p>
                    </div>
                  </div>
                  <span className="text-slate-400 text-sm md:text-base mt-2 md:mt-0 whitespace-nowrap">
                    {item.period}
                  </span>
                </div>
                
                <div className="space-y-3">
                  {item.description.map((desc, descIndex) => (
                    <p 
                      key={descIndex} 
                      className="text-slate-300 leading-relaxed"
                    >
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
