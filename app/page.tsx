"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

// TODO(stagewise): Replace with real series data from your backend/CMS
const mockSeries = [
  {
    id: "devops-series",
    title: "DevOps Mastery Series",
    description: "Complete guide to DevOps practices, tools, and methodologies. Learn CI/CD, containerization, monitoring, and more.",
    image: "/series-devops.jpg",
    slug: "devops-mastery"
  }
]

// TODO(stagewise): Replace with real blog data
const mockBlogs = [
  {
    id: "docker-best-practices",
    title: "Docker Best Practices for Production",
    description: "Essential Docker practices for building secure, efficient containers in production environments.",
    image: "/blog-docker.jpg",
    slug: "docker-best-practices"
  },
  {
    id: "ci-cd-pipeline",
    title: "Building Robust CI/CD Pipelines",
    description: "Step-by-step guide to creating reliable continuous integration and deployment workflows.",
    image: "/blog-cicd.jpg",
    slug: "ci-cd-pipeline"
  }
]

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState<"series" | "blogs">("series")
  
  const currentContent = activeFilter === "series" ? mockSeries : mockBlogs

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-white p-1 shadow-md">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <img 
                    src="https://pbs.twimg.com/media/G4u5uZMXoAAGcGf?format=jpg&name=medium" 
                    alt="Atul Maurya" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Intro Text */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-4 tracking-tight">
                Hello, My blogs
                <span className="block text-blue-600 dark:text-blue-400 font-bold">Atul Maurya</span>
              </h1>
              <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium mb-4">
                Welcome to my tech journey! Discover insights into DevOps, Cloud Computing, and modern development practices. 
                Let's learn and grow together.
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Visit <a href="https://atulmaurya.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium">atulmaurya.in</a> to get to know more about me.
              </p>
              
              {/* Social Links */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Connect:</span>
                
                {/* GitHub */}
                <a href="https://github.com/atul-5242" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-all duration-300" title="GitHub">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
                
                {/* LinkedIn */}
                <a href="https://lnkd.in/gyNXgr3B" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300" title="LinkedIn">
                  <span className="text-xs font-bold">in</span>
                </a>
                
                {/* Twitter/X */}
                <a href="https://twitter.com/atulmaurya5242" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 bg-black hover:bg-gray-800 text-white rounded-lg transition-all duration-300" title="Twitter/X">
                  <span className="text-xs font-bold">X</span>
                </a>
                
                {/* YouTube */}
                <a href="https://lnkd.in/gxChWpsn" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-8 h-8 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-300" title="YouTube">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                
                {/* Email */}
                <a href="mailto:atulfzdlko2002@gmail.com" className="flex items-center justify-center w-8 h-8 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300" title="Email">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="max-w-6xl mx-auto px-6 mb-8">
        <div className="flex justify-center">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-1.5 shadow-xl border border-gray-100 dark:border-gray-800">
            <div className="flex relative">
              <button
                onClick={() => setActiveFilter("series")}
                className={`relative px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 z-10 ${
                  activeFilter === "series"
                    ? "bg-gradient-to-r from-gray-800 to-black text-white shadow-lg shadow-black/25 transform scale-105"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/20"
                }`}
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 7a2 2 0 012-2h10a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Series
                </span>
              </button>
              <button
                onClick={() => setActiveFilter("blogs")}
                className={`relative px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 z-10 ${
                  activeFilter === "blogs"
                    ? "bg-gradient-to-r from-gray-800 to-black text-white shadow-lg shadow-black/25 transform scale-105"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/20"
                }`}
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Blogs
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Cards */}
      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentContent.map((item) => (
            <Link
              key={item.id}
              href={`/notion-content`}
              className="group block"
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                {/* Card Image */}
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                  {item.id === 'devops-series' ? (
                    <img 
                      src="https://img.youtube.com/vi/s5OaI4sMdaw/maxresdefault.jpg" 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    /* TODO(stagewise): Replace with actual images */
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-6xl font-bold opacity-20">
                        {item.title.charAt(0)}
                      </span>
                    </div>
                  )}
                  
                  {/* Overlay Arrow */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg 
                      className="w-5 h-5 text-gray-800 transform group-hover:translate-x-0.5 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2.5} 
                        d="M13 7l5 5m0 0l-5 5m5-5H6" 
                      />
                    </svg>
                  </div>
                </div>
                
                {/* Card Content */}
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  {/* Bottom Arrow */}
                  <div className="flex justify-end">
                    <div className="w-8 h-8 bg-blue-600 group-hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <svg 
                        className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2.5} 
                          d="M9 5l7 7-7 7" 
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}