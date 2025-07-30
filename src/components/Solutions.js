'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { LayoutDashboard, Cpu, Repeat, BarChart3 } from 'lucide-react'

const solutions = [
  {
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to solve your unique business challenges.',
    icon: LayoutDashboard,
  },
  {
    title: 'AI Integration & Consulting',
    description: 'Seamless integration of AI tools to automate workflows and enhance efficiency.',
    icon: Cpu,
  },
  {
    title: 'Business Process Automation',
    description: 'Streamlining repetitive tasks to boost productivity and reduce operational costs.',
    icon: Repeat,
  },
  {
    title: 'Advanced Data Analytics',
    description: 'Transforming raw data into actionable insights through AI-powered analytics.',
    icon: BarChart3,
  },
]

export default function Solutions() {
  return (
    <section className="relative bg-gray-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-900"
        >
          Our AI-Powered Solutions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          From custom software to advanced AI integrations, we build solutions that deliver real business results.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              whileHover={{ y: -10, scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform cursor-pointer"
            >
              <div className="flex justify-center mb-4">
                <solution.icon className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{solution.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{solution.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Link
            href="/solutions"
            className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition shadow-md hover:shadow-lg"
          >
            Explore Solutions
          </Link>
        </motion.div>
      </div>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-patternpad opacity-5"></div>
      </div>
    </section>
  )
}
