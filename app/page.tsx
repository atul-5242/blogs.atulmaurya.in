"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

// Type definition for content items
type ContentItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
  notionUrl: string;
}

// TODO(stagewise): Replace with real series data from your backend/CMS
const mockSeries: ContentItem[] = [
  {
    id: "devops-series",
    title: "DevOps Mastery Series",
    description: "Complete guide to DevOps practices, tools, and methodologies. Learn CI/CD, containerization, monitoring, and more.",
    image: "https://img.youtube.com/vi/s5OaI4sMdaw/maxresdefault.jpg",
    slug: "devops-series", // This creates URL: /devops-series
    notionUrl: "https://atulmaurya.notion.site/Let-s-learn-DevOps-29d76b1df1a88072a9bfcc78d1c7d881?source=copy_link"
  }
  // TODO(stagewise): Add more series here like:
  // {
  //   id: "openai-devday",
  //   title: "OpenAI DevDay Insights",
  //   description: "Latest updates and insights from OpenAI DevDay...",
  //   image: "your-image-url",
  //   slug: "openai-devday", // URL will be: /openai-devday
  //   notionUrl: "your-notion-url-here"
  // }
]

// TODO(stagewise): Replace with real blog data
// Blog posts data
const mockBlogs: ContentItem[] = [
  {
    id: "ycombinator-guide",
    title: "Get $500,000 for Your Startup Idea - Full Y Combinator Guide",
    description: "A comprehensive guide for Indian founders on how to secure funding from Y Combinator",
    image: "https://img.notionusercontent.com/ext/https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fb%2Fb2%2FY_Combinator_logo.svg%2F1200px-Y_Combinator_logo.svg.png/size/?exp=1762538321&sig=u7xxA6O_dXX_6sZibIiUL_9c-oqZ_vAXmI0HjtJmvmo&id=2a476b1d-f1a8-80a5-b3c3-c6172a41641f&table=block",
    slug: "blog/ycombinator-guide",
    notionUrl: "https://atulmaurya.notion.site/Get-500-000-for-Your-Startup-Idea-Full-Y-Combinator-Guide-for-Indian-Founders-2a476b1df1a880a5b3c3c6172a41641f"
  }
  // Add more blog posts here
]

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState<"series" | "blogs">("series")
  
  const currentContent = activeFilter === "series" ? mockSeries : mockBlogs

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl bg-white p-1 shadow-md border-2 border-blue-500">
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
              <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 tracking-tight">
                Hello, My blogs
                <span className="block text-blue-600 font-bold">Atul Maurya</span>
              </h1>
              <div className="bg-gray-50 border-l-4 border-orange-500 p-4 rounded-r-lg mb-4">
                <p className="text-sm text-gray-500 font-medium mb-2 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997L9.4041 13.5V10.4976z"/>
                  </svg>
                  ~ ChatGPT's take on Atul Maurya:
                </p>
                <p className="text-base text-gray-700 leading-relaxed font-normal italic">
                  "A passionate developer who loves turning ideas into real, impactful projects. 
                  He simplifies complex tech concepts and shares them in a way anyone can understand. 
                  Driven by curiosity and consistency, Atul's content helps learners grow with clarity and confidence."
                </p>
              </div>
              
              <p className="text-sm text-gray-600 mb-4">
                Visit <a href="https://atulmaurya.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium">atulmaurya.in</a> to get to know more about me.
              </p>
              
              {/* Social Links */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs text-gray-500 font-medium">Connect:</span>
                
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
          <div className="bg-white rounded-2xl p-1.5 shadow-xl border border-gray-100">
            <div className="flex relative">
              <button
                onClick={() => setActiveFilter("series")}
                className={`relative px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 z-10 overflow-hidden ${
                  activeFilter === "series"
                    ? "bg-gradient-to-r from-gray-800 to-black text-white shadow-lg shadow-black/25 transform scale-105"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                }`}
              >
                {/* Gradient bottom border for inactive button */}
                {activeFilter !== "series" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-60"></div>
                )}
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 7a2 2 0 012-2h10a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Series
                </span>
              </button>
              <button
                onClick={() => setActiveFilter("blogs")}
                className={`relative px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 z-10 overflow-hidden ${
                  activeFilter === "blogs"
                    ? "bg-gradient-to-r from-gray-800 to-black text-white shadow-lg shadow-black/25 transform scale-105"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                }`}
              >
                {/* Gradient bottom border for inactive button */}
                {activeFilter !== "blogs" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-60"></div>
                )}
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
        {currentContent.length === 0 ? (
          /* Empty State */
          <div className="text-center py-16">
            <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md mx-auto">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {activeFilter === 'blogs' ? 'Blogs are Planning for You' : 'No Series Yet'}
              </h3>
              <p className="text-gray-600">
                {activeFilter === 'blogs' 
                  ? 'Exciting blog posts are in the works! Stay tuned for amazing content.'
                  : 'New series content is coming soon. Check back later!'}
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.map((item) => (
            <Link
              key={item.id}
              href={item.notionUrl && item.notionUrl.trim() !== '' ? `/${item.slug}` : `/notion-content`}
              className="group block"
            >
              <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-2xl shadow-xl shadow-blue-100/50 hover:shadow-2xl hover:shadow-blue-200/60 overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer border border-gray-100">
                {/* Card Image */}
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                  {item?.image && item.image.startsWith('http') ? (
                    <img 
                      src={item.image} 
                      alt={item?.title || 'Content image'}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    /* TODO(stagewise): Replace with actual images */
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-6xl font-bold opacity-20">
                        {item?.title?.charAt(0) || '?'}
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {item?.title || 'Untitled'}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item?.description || 'No description available'}
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
        )}
      </section>
    </main>
  )
}