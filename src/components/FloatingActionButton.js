'use client'

import { MessageCircleMore, PhoneCall } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Main FAB */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        viewport={{ once: true }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative bg-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition group"
      >
        <MessageCircleMore size={24} />
        <span className="absolute -top-2 -right-2 w-3 h-3 bg-green-400 rounded-full animate-ping"></span>
        {/* Hover Glow Aura */}
        <div className="absolute inset-0 rounded-full bg-blue-600 blur opacity-40 group-hover:opacity-70 group-hover:blur-md transition"></div>
      </motion.button>

      {/* Expandable Options */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="mt-4 flex flex-col items-end space-y-3"
        >
          <button
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            className="flex items-center bg-white text-gray-800 px-4 py-2 rounded-md shadow hover:bg-gray-100 transition"
          >
            <PhoneCall className="mr-2" size={18} /> Contact Us
          </button>
          <button
            onClick={() => alert('AI Chatbot Coming Soon!')}
            className="flex items-center bg-white text-gray-800 px-4 py-2 rounded-md shadow hover:bg-gray-100 transition"
          >
            <MessageCircleMore className="mr-2" size={18} /> AI Chatbot
          </button>
        </motion.div>
      )}
    </div>
  )
}
