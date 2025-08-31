import * as React from "react"
import { Link } from "react-router-dom"
import { cn } from "../lib/utils"
import { ChevronRight, Star } from "lucide-react"
import { UnicornBackground } from "./UnicornBackground"

const HeroSection = React.forwardRef(function HeroSection({
  className,
  title = "Master Web Development",
  subtitle = {
    regular: "Your complete roadmap to becoming a ",
    gradient: "full-stack developer.",
  },
  description = "",
  gridOptions,
  ...props
}, ref) {
  return (
    <UnicornBackground className={cn("min-h-screen", className)} ref={ref} {...props}>
      <section className="relative max-w-full mx-auto">
        <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 md:px-8">
          <div className="space-y-5 max-w-3xl leading-0 lg:leading-5 text-left">
            <h1 className="text-sm text-white font-semibold group px-5 py-2 bg-gradient-to-tr from-zinc-300/20 via-gray-400/20 to-transparent dark:from-zinc-300/5 dark:via-gray-400/5 border-[2px] border-black/5 dark:border-white/5 rounded-3xl w-fit backdrop-blur-sm text-left">
              {title}
              <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
            </h1>
            <h2 className="text-4xl tracking-tighter font-geist bg-clip-text text-transparent md:text-6xl bg-[linear-gradient(180deg,_#FFFFFF_0%,_rgba(255,_255,_255,_0.9)_100%)] dark:bg-[linear-gradient(180deg,_#FFFFFF_0%,_rgba(255,_255,_255,_0.85)_100%)] text-left">
              {subtitle.regular}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 dark:from-purple-200 dark:to-pink-200">
                {subtitle.gradient}
              </span>
            </h2>
            {description && (
              <p className="max-w-2xl text-gray-200 dark:text-gray-100 font-medium">
                {description}
              </p>
            )}
            
            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row items-start justify-start gap-4 mt-8">
              <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl">
                  <Link
                    to="/frontend"
                    className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/20 via-blue-400/30 to-transparent dark:from-zinc-300/5 dark:via-blue-400/20 text-gray-900 dark:text-white font-semibold border-input border-[1px] hover:bg-gradient-to-tr hover:from-zinc-300/30 hover:via-blue-400/40 hover:to-transparent dark:hover:from-zinc-300/10 dark:hover:via-blue-400/30 transition-all sm:w-auto py-3 px-8"
                  >
                    Frontend Roadmap
                  </Link>
                </div>
              </span>
              
              <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl">
                  <Link
                    to="/backend"
                    className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/20 via-green-400/30 to-transparent dark:from-zinc-300/5 dark:via-green-400/20 text-gray-900 dark:text-white font-semibold border-input border-[1px] hover:bg-gradient-to-tr hover:from-zinc-300/30 hover:via-green-400/40 hover:to-transparent dark:hover:from-zinc-300/10 dark:hover:via-green-400/30 transition-all sm:w-auto py-3 px-8"
                  >
                    Backend Roadmap
                  </Link>
                </div>
              </span>
              
              <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl">
                  <Link
                    to="/tech-stacks"
                    className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/20 via-purple-400/30 to-transparent dark:from-zinc-300/5 dark:via-purple-400/20 text-gray-900 dark:text-white font-semibold border-input border-[1px] hover:bg-gradient-to-tr hover:from-zinc-300/30 hover:via-purple-400/40 hover:to-transparent dark:hover:from-zinc-300/10 dark:hover:via-purple-400/30 transition-all sm:w-auto py-3 px-8"
                  >
                    Tech Stacks
                  </Link>
                </div>
              </span>
            </div>

            {/* GitHub Star Button */}
            <div className="mt-6">
              <a
                href="https://github.com/subhayudas/roadmap"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white font-semibold rounded-full border border-gray-600 hover:border-gray-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group"
              >
                <svg
                  className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <Star className="w-4 h-4" />
                <span>Star on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </UnicornBackground>
  )
})

HeroSection.displayName = "HeroSection"

export { HeroSection }
