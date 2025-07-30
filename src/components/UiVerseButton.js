'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'  // Optional Icon (remove if not needed)

export default function UiVerseButton({ href, children, icon = false }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, rotate: -0.5 }}
      whileTap={{ scale: 0.96 }}
      className="relative inline-block group"
    >
      {/* Frosted Glass Effect */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-xl border border-blue-500 opacity-50 group-hover:opacity-70 transition duration-300"></div>

      {/* Light Glow Layer */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-blue-600/20 via-transparent to-blue-600/20 opacity-0 group-hover:opacity-100 blur-md transition duration-500 pointer-events-none"></div>

      <Link
        href={href}
        className="relative inline-flex items-center justify-center px-6 py-3 text-blue-600 font-semibold rounded-xl border border-blue-500 shadow-lg group-hover:shadow-xl bg-white/60 backdrop-blur-md transition-all duration-300"
      >
        {children}
        {icon && <ArrowRight className="ml-2" size={18} />}
      </Link>
    </motion.div>
  )
}
