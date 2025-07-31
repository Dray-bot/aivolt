'use client';

import { useUser } from '@clerk/nextjs';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { PlusCircle, CheckCircle, Clock3, Search } from 'lucide-react';
import { useState, useMemo } from 'react';

export default function ProjectsPage() {
  const { isSignedIn, isLoaded, user } = useUser();

  const projects = [
    {
      name: 'E-commerce AI Bot',
      status: 'Active',
      progress: 80,
      updatedAt: '2 days ago',
    },
    {
      name: 'Healthcare Automation',
      status: 'In Progress',
      progress: 55,
      updatedAt: '5 hours ago',
    },
    {
      name: 'Inventory AI Sync',
      status: 'Completed',
      progress: 100,
      updatedAt: '1 week ago',
    },
  ];

  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesFilter = filter === 'All' || project.status === filter;
      const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, searchQuery, projects]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-600">Loading projects...</p>
      </div>
    );
  }

  if (!isSignedIn) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center bg-gradient-to-tr from-blue-50 via-white to-blue-100 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-extrabold text-gray-800 mb-10 text-center"
      >
        Your Projects
      </motion.h1>

      {/* Top Controls */}
      <div className="w-full max-w-5xl flex flex-col sm:flex-row sm:justify-between items-center gap-4 mb-8 ">
        <div className="flex items-center bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-200 w-full sm:w-auto">
          <Search className="w-5 h-5 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="outline-none bg-transparent text-gray-700 w-full sm:w-64"
          />
        </div>

        <div className="flex gap-2">
          {['All', 'Active', 'In Progress', 'Completed'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                filter === tab
                  ? 'bg-blue-600 text-white'
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <Link
          href="#"
          className="flex items-center bg-blue-600 text-white px-5 py-3 rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          <PlusCircle className="w-5 h-5 mr-2" /> New Project
        </Link>
      </div>

      {/* Project List */}
      <div className="w-full max-w-5xl space-y-6">
        <AnimatePresence>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/70 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-blue-100 flex flex-col sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">{project.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">Last updated {project.updatedAt}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                    <div
                      className={`h-2.5 rounded-full ${
                        project.progress === 100 ? 'bg-green-500' : 'bg-blue-500'
                      }`}
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 flex items-center gap-3">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Active'
                        ? 'bg-green-100 text-green-600'
                        : project.status === 'In Progress'
                        ? 'bg-yellow-100 text-yellow-600'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {project.status === 'Active' && <CheckCircle className="w-4 h-4 mr-1" />}
                    {project.status === 'In Progress' && <Clock3 className="w-4 h-4 mr-1" />}
                    {project.status === 'Completed' && <CheckCircle className="w-4 h-4 mr-1" />}
                    {project.status}
                  </span>
                  <Link
                    href="#"
                    className="bg-white border border-blue-600 text-blue-600 px-4 py-2 rounded-xl shadow-sm hover:bg-blue-50 transition text-sm"
                  >
                    Manage
                  </Link>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col items-center text-center text-gray-500 py-20"
            >
              <Image
                src="/illustrations/empty.svg"
                alt="No Projects Found"
                width={300}
                height={300}
                className="mb-6"
              />
              <p className="text-lg font-medium">No projects found</p>
              <p className="text-sm">Try adjusting your filters or search query.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
