import * as React from "react"
import { Link } from "react-router-dom"
import { cn } from "../lib/utils"
import { ChevronRight } from "lucide-react"
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
            <h1 className="text-sm text-white font-semibold group px-5 py-2 bg-gradient-to-tr from-zinc-300/20 via-gray-400/20 to-transparent dark:from-zinc-300/5 dark:via-gray-400/5 border-[2px] border-black/5 dark:border-white/5 rounded-3xl w-fit backdrop-blur-sm">
              {title}
              <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
            </h1>
            <h2 className="text-4xl tracking-tighter font-geist bg-clip-text text-transparent md:text-6xl bg-[linear-gradient(180deg,_#FFFFFF_0%,_rgba(255,_255,_255,_0.9)_100%)] dark:bg-[linear-gradient(180deg,_#FFFFFF_0%,_rgba(255,_255,_255,_0.85)_100%)]">
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
          </div>
        </div>
      </section>
    </UnicornBackground>
  )
})

HeroSection.displayName = "HeroSection"

export { HeroSection }
