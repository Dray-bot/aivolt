'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Modal from './Modal'
import ContactForm from './ContactForm'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Industries', href: '/industries' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Case Studies', href: '/case-studies' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/80 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <Link href="/" className="text-3xl font-extrabold text-blue-600">
            AIVOLT
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative group text-gray-700 hover:text-blue-600 transition"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex space-x-4">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0px 0px 12px rgba(59, 130, 246, 0.5)' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Get a Quote
            </motion.button>

            <Link href="/sign-up" className="inline-block">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0px 0px 12px rgba(59, 130, 246, 0.5)' }}
                whileTap={{ scale: 0.98 }}
                className="bg-transparent border border-blue-600 text-blue-600 px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition"
              >
                Sign Up
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-8 h-8 flex items-center justify-center"
          >
            <motion.div
              initial={false}
              animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
              className="absolute w-6 h-0.5 bg-gray-800"
            />
            <motion.div
              initial={false}
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="absolute w-6 h-0.5 bg-gray-800"
            />
            <motion.div
              initial={false}
              animate={isOpen ? { rotate: -45 } : { rotate: 0 }}
              className="absolute w-6 h-0.5 bg-gray-800"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 backdrop-blur-md shadow-md overflow-hidden"
            >
              <nav className="flex flex-col space-y-6 px-6 py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 hover:text-blue-600 transition text-lg"
                  >
                    {link.name}
                  </Link>
                ))}

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => { setIsModalOpen(true); setIsOpen(false); }}
                  className="bg-blue-600 text-white text-center px-6 py-3 rounded-lg shadow-md text-lg hover:bg-blue-700 transition"
                >
                  Get a Quote
                </motion.button>

                <Link href="/sign-up" onClick={() => setIsOpen(false)}>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="border border-blue-600 text-blue-600 text-center px-6 py-3 rounded-lg shadow-md text-lg hover:bg-blue-600 hover:text-white transition"
                  >
                    Sign Up
                  </motion.button>
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ContactForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </>
  )
}
