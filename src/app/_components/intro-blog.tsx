"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

export function Intro() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden px-4 py-16 md:py-20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <svg className="absolute left-0 top-0 h-64 w-64 rotate-180 text-blue-500/5" viewBox="0 0 200 200">
          <path
            fill="currentColor"
            d="M30.5,-51.2C39.2,-46.9,45.7,-37.7,51.1,-27.9C56.6,-18.1,61.1,-7.5,58.6,1.4C56.1,10.4,46.6,17.7,39.6,26.2C32.5,34.7,27.9,44.3,20.7,49.8C13.5,55.3,3.8,56.8,-3.9,52.5C-11.7,48.2,-17.4,38.1,-22.5,30.7C-27.6,23.3,-32.1,18.5,-39.2,11.5C-46.3,4.4,-56,-4.8,-58.8,-16.1C-61.5,-27.4,-57.2,-40.7,-48.2,-45.8C-39.2,-50.8,-25.5,-47.5,-14.2,-46.1C-3,-44.7,5.9,-45.2,14.5,-46.1C23,-47,31.1,-48.4,30.5,-51.2Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="flex flex-col md:flex-row items-center md:justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="md:pr-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
              <span className="text-gray-900 dark:text-white">The Inner Join</span>
              <br />
              <span className="text-blue-600">Build Scalable Data Pipelines</span>
              <span className="text-gray-900 dark:text-white">.</span>
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-500 mt-4 md:mt-6"></div>
          </div>

          <h4 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Less NULLs. More value.
          </h4>
        </motion.div>
      </div>
    </section>
  )
}

