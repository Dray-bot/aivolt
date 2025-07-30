'use client'

import { motion } from 'framer-motion'
import { Code2, BrainCircuit, Workflow, BarChart3, ShieldCheck, Sparkles, Globe2, Bot } from 'lucide-react'

const solutions = [
  {
    title: 'Custom Software Development',
    description: 'Tailored applications designed to solve unique business challenges with scalable, future-proof solutions.',
    icon: <Code2 size={32} className="text-blue-600 shrink-0" />,
  },
  {
    title: 'AI Integration & Consulting',
    description: 'Embedding intelligent AI-driven workflows into your operations to maximize efficiency and innovation.',
    icon: <BrainCircuit size={32} className="text-blue-600 shrink-0" />,
  },
  {
    title: 'Business Process Automation',
    description: 'Reducing manual workloads by automating repetitive business tasks and processes.',
    icon: <Workflow size={32} className="text-blue-600 shrink-0" />,
  },
  {
    title: 'Advanced Data Analytics',
    description: 'Leverage data science to extract actionable insights and optimize decision-making.',
    icon: <BarChart3 size={32} className="text-blue-600 shrink-0" />,
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Protecting your business with AI-powered security protocols and real-time threat detection.',
    icon: <ShieldCheck size={32} className="text-blue-600 shrink-0" />,
  },
  {
    title: 'AI-Powered Chatbots',
    description: 'Enhancing customer engagement with intelligent, 24/7 conversational AI bots.',
    icon: <Bot size={32} className="text-blue-600 shrink-0" />,
  },
  {
    title: 'Global Cloud Deployments',
    description: 'Deploying scalable cloud infrastructures tailored to your business growth.',
    icon: <Globe2 size={32} className="text-blue-600 shrink-0" />,
  },
  {
    title: 'Innovation Lab Services',
    description: 'Collaborating with your team to co-create cutting-edge AI prototypes and MVPs.',
    icon: <Sparkles size={32} className="text-blue-600 shrink-0" />,
  },
]

export default function SolutionsPage() {
  return (
    <main className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 xl:px-10 max-w-7xl mx-auto overflow-hidden">
      
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 px-2 sm:px-0"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
          AI-Driven Solutions Built for Growth
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
          From startups to enterprises, AIVOLT designs and deploys AI-powered software solutions that transform businesses across industries.
        </p>
      </motion.div>

      {/* Solutions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition group cursor-pointer border border-gray-200"
          >
            <div className="flex items-start space-x-4 mb-4">
              {solution.icon}
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
                {solution.title}
              </h2>
            </div>
            <p className="text-gray-600 text-sm sm:text-base">{solution.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <section className="mt-20 sm:mt-24 text-center px-2 sm:px-0">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
        >
          Why Businesses Choose AIVOLT
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto"
        >
          We don't just build software — we build <span className="font-semibold">future-proof AI ecosystems</span> that scale with your business.
          With a focus on automation, data-driven strategies, and secure infrastructures, AIVOLT becomes your partner in digital transformation.
        </motion.p>
      </section>

      {/* CTA Banner */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-20 sm:mt-24 bg-blue-600 rounded-xl text-white py-10 sm:py-12 px-6 sm:px-10 flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-6"
      >
        <div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2">Ready to Transform Your Business?</h3>
          <p className="text-white/80 text-sm sm:text-base">Let's build AI-powered solutions that give you a competitive edge.</p>
        </div>
        <a
          href="/contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition text-sm sm:text-base"
        >
          Get a Free Consultation
        </a>
      </motion.section>
    </main>
  )
}
