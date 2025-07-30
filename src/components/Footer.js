'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-gray-300 pt-16 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Branding & Description */}
        <div>
          <h3 className="text-2xl font-bold text-white">AIVOLT</h3>
          <p className="mt-4 text-sm text-gray-400">
            AI-Powered Software Solutions crafted to automate, optimize, and elevate your business performance.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <Linkedin size={22} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <Twitter size={22} />
            </a>
            <a href="mailto:info@aivolt.com" className="hover:text-white transition">
              <Mail size={22} />
            </a>
          </div>
        </div>

        {/* Solutions Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Solutions</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/solutions" className="hover:text-white transition">Custom Software Development</Link></li>
            <li><Link href="/solutions" className="hover:text-white transition">AI Integration & Consulting</Link></li>
            <li><Link href="/solutions" className="hover:text-white transition">Business Automation</Link></li>
            <li><Link href="/solutions" className="hover:text-white transition">Data Analytics</Link></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/case-studies" className="hover:text-white transition">Case Studies</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            <li><Link href="/careers" className="hover:text-white transition">Careers</Link></li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
          <p className="text-sm text-gray-400 mb-4">
            Get insights on AI trends & business automation straight to your inbox.
          </p>
          <form className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-md text-gray-900 focus:ring-2 focus:ring-blue-600 focus:outline-none text-sm"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} AIVOLT. All rights reserved. Made by Dray</p>
      </div>

      {/* Optional Subtle BG (PatternPad) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-patternpad opacity-5"></div>
      </div>
    </footer>
  )
}
