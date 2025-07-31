'use client';

import { MessageCircleMore, PhoneCall, BookOpen, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();


  return (
    <>
      {/* Optional Overlay when Open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="flex flex-col items-end space-y-3 mb-4"
            >
              <ActionButton
                icon={<PhoneCall size={18} />}
                label="Contact Support"
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              />
              <ActionButton
                icon={<MessageCircleMore size={18} />}
                label="AI Chatbot"
                onClick={() => alert('AI Chatbot Coming Soon!')}
              />
              <ActionButton
                icon={<BookOpen size={18} />}
                label="Help Docs"
                onClick={() => router.push('/docs')}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main FAB */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative bg-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition group"
        >
          {isOpen ? <X size={24} /> : <MessageCircleMore size={24} />}
          <span className="absolute -top-2 -right-2 w-3 h-3 bg-green-400 rounded-full animate-ping"></span>
          {/* Glow Aura */}
          <div className="absolute inset-0 rounded-full bg-blue-600 blur opacity-30 group-hover:opacity-50 group-hover:blur-md transition" />
        </motion.button>
      </div>
    </>
  );
}

function ActionButton({ icon, label, onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="flex items-center gap-2 bg-white/80 backdrop-blur-md text-gray-800 px-4 py-2 rounded-xl shadow-md hover:bg-white transition"
    >
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </motion.button>
  );
}
