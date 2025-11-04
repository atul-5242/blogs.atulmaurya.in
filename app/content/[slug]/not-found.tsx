import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">Content Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
          The content you're looking for doesn't exist or hasn't been configured yet.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center px-6 py-3 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors duration-200"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  )
}