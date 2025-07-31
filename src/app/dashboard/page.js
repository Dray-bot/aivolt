'use client';

import { UserButton, useUser } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function DashboardPage() {
  const { isSignedIn, isLoaded, user } = useUser();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-600">Loading dashboard...</p>
      </div>
    );
  }

  if (!isSignedIn) return null;

  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-blue-50 via-white to-blue-100 flex flex-col md:flex-row">
      
      {/* Mobile Topbar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white/70 backdrop-blur-md shadow-md z-10">
        <h2 className="text-2xl font-extrabold text-blue-600">AiVolt</h2>
        <Menu className="w-8 h-8 text-blue-600" onClick={() => setSidebarOpen(!sidebarOpen)} />
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full w-64 bg-white/80 backdrop-blur-md shadow-xl p-6 z-20 transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <h2 className="text-2xl font-extrabold text-blue-600 mb-10">AiVolt</h2>
        <nav className="flex flex-col space-y-6 text-gray-700">
          <Link href="/dashboard" className="hover:text-blue-600">Dashboard</Link>
          <Link href="/analytics" className="hover:text-blue-600">Analytics</Link>
          <Link href="/projects" className="hover:text-blue-600">Projects</Link>
          <Link href="/billing" className="hover:text-blue-600">Billing</Link>
          <Link href="/settings" className="hover:text-blue-600">Settings</Link>
        </nav>
        <div className="mt-auto pt-10">
          <UserButton afterSignOutUrl="/" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col p-4 sm:p-6 md:p-12 mt-16 md:mt-0">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl font-extrabold text-gray-800"
        >
          Welcome, {user.firstName}
        </motion.h1>

        <p className="text-base sm:text-lg text-gray-600 mt-2 mb-10">
          Here’s an overview of your AiVolt Control Center.
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Active Users', value: '1,245', change: '+12%' },
            { title: 'Projects Automated', value: '87', change: '+5' },
            { title: 'Monthly Revenue', value: '₦4.8M', change: '+18%' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-blue-100"
            >
              <h3 className="text-xl font-semibold text-blue-600">{stat.title}</h3>
              <p className="text-3xl font-bold text-gray-800 mt-2">{stat.value}</p>
              <p className="text-sm text-green-500 mt-1">{stat.change} this month</p>
            </motion.div>
          ))}
        </div>

        {/* Illustration Section */}
        <div className="mt-16 flex flex-col-reverse lg:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Automate your workflow with AiVolt</h2>
            <p className="text-gray-600 mb-6">
              Our AI-powered solutions streamline repetitive tasks, boost efficiency, and scale your business faster than ever before.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition">
              Launch Automation
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center"
          >
            <Image
              src="/illustrations/digitalwork.svg"
              alt="Automation Illustration"
              width={500}
              height={400}
              className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain"
            />
          </motion.div>
        </div>
      </main>
    </div>
  );
}
