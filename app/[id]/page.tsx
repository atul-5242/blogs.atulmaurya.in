import { fetchRecordMap } from "@/lib/notion";
import Link from "next/link";
import NotionRendererWrapper from "@/components/NotionRenderer";
import { notFound } from "next/navigation";

// Content mapping - add your Notion URLs here
// TODO(stagewise): Add new content by adding entries here
// Note: devops-series is now handled by /app/devops-series/page.tsx
const contentMap: Record<string, { title: string; notionUrl: string }> = {
  // TODO(stagewise): Add more content like this:
  // "openai-devday": {
  //   title: "OpenAI DevDay Insights",
  //   notionUrl: "your-notion-url-here"
  // },
  // "cloud-series": {
  //   title: "Cloud Computing Fundamentals",
  //   notionUrl: "your-cloud-notion-url"
  // }
}

interface ContentPageProps {
  params: Promise<{ id: string }>
}

export default async function ContentPage({ params }: ContentPageProps) {
  const { id } = await params
  const content = contentMap[id]
  
  // If no content found or no Notion URL, show 404
  if (!content || !content.notionUrl || content.notionUrl.trim() === '') {
    return notFound()
  }

  let recordMap
  try {
    recordMap = await fetchRecordMap(content.notionUrl)
  } catch (error) {
    console.error('Error fetching Notion content:', error)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Error Loading Content</h1>
          <p className="text-gray-600 mb-4">Failed to load Notion content</p>
          <Link href="/" className="text-blue-600 hover:text-blue-700">Back to Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Back to Home Button */}
      <div className="max-w-920 mx-auto px-6 py-4">
        <Link 
          href="/"
          className="inline-flex items-center text-black hover:text-gray-700 font-bold mb-6 transition-colors duration-200 opacity-100 text-lg"
          style={{ color: '#000000' }}
        >
          <svg className="w-7 h-7 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </div>
      
      <main style={{ maxWidth: 920, margin: "0 auto", padding: 24 }}>
        <NotionRendererWrapper 
          recordMap={recordMap} 
          fullPage={true} 
          darkMode={false}
        />
      </main>
    </div>
  )
}

// Generate static params for all available content
export async function generateStaticParams() {
  return Object.keys(contentMap).map((id) => ({
    id: id,
  }))
}