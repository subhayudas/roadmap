import React from 'react'
import { cn } from '../lib/utils'
import { Code, Globe, Database, Server, Smartphone, Zap } from 'lucide-react'

const RoadmapSection = () => {
  const roadmapSteps = [
    {
      title: "Frontend Fundamentals",
      description: "Master HTML, CSS, and JavaScript basics",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      topics: ["HTML5", "CSS3", "JavaScript ES6+", "Responsive Design", "Accessibility"]
    },
    {
      title: "Frontend Frameworks",
      description: "Learn modern JavaScript frameworks",
      icon: Code,
      color: "from-purple-500 to-pink-500",
      topics: ["React", "Vue.js", "Angular", "State Management", "Component Architecture"]
    },
    {
      title: "Backend Development",
      description: "Build server-side applications",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      topics: ["Node.js", "Express", "Python/Django", "Ruby on Rails", "API Design"]
    },
    {
      title: "Database & Data",
      description: "Work with databases and data management",
      icon: Database,
      color: "from-orange-500 to-red-500",
      topics: ["SQL", "MongoDB", "PostgreSQL", "Redis", "Data Modeling"]
    },
    {
      title: "Mobile Development",
      description: "Create mobile applications",
      icon: Smartphone,
      color: "from-indigo-500 to-purple-500",
      topics: ["React Native", "Flutter", "Progressive Web Apps", "Mobile UI/UX"]
    },
    {
      title: "DevOps & Deployment",
      description: "Deploy and maintain applications",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      topics: ["Git", "Docker", "AWS/Azure", "CI/CD", "Performance Optimization"]
    }
  ]

  return (
    <section id="roadmap" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Your Learning Path
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Follow this comprehensive roadmap to become a full-stack web developer. 
            Each step builds upon the previous one, ensuring a solid foundation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roadmapSteps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className={cn(
                    "w-12 h-12 rounded-full bg-gradient-to-r flex items-center justify-center text-white shadow-lg",
                    step.color
                  )}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {step.description}
                  </p>
                  
                  <div className="space-y-2">
                    {step.topics.map((topic, topicIndex) => (
                      <div
                        key={topicIndex}
                        className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full inline-block mr-2 mb-2"
                      >
                        {topic}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4">
            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-600 dark:text-gray-300">Start from the top and work your way down</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoadmapSection

