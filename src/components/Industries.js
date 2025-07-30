'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { industriesData } from '@/data/industriesData' // We'll create this data file next
import Image from 'next/image'

export default function Industries() {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 relative">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900"
        >
          Industries We Transform
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          We provide AI-powered solutions tailored for various industries, helping businesses automate, innovate, and scale.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {industriesData.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-2xl hover:scale-105 transition transform cursor-pointer relative overflow-hidden"
            >
              {/* Light glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 blur-md transition duration-500 pointer-events-none"></div>

              <div className="flex justify-center mb-4">
                <Image src={industry.icon} alt={industry.name} width={60} height={60} className="group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{industry.name}</h3>
              <p className="mt-2 text-gray-600 text-sm">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* unDraw Background Accent */}
      <div className="absolute bottom-0 right-0 opacity-10 z-0">
        <Image 
          src="/undraw_ai_team.svg" 
          alt="AI Illustration" 
          width={300} 
          height={300} 
        />
      </div>
    </section>
  )
}
