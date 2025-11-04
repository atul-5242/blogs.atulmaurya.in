import { fetchRecordMap } from "@/lib/notion";
import Link from "next/link";
import NotionRendererWrapper from "@/components/NotionRenderer";

export default async function DevOpsSeriesPage() {
  const notionUrl = "https://atulmaurya.notion.site/Let-s-learn-DevOps-29d76b1df1a88072a9bfcc78d1c7d881?source=copy_link";
  
  let recordMap;
  try {
    recordMap = await fetchRecordMap(notionUrl);
  } catch (error) {
    console.error('Error fetching DevOps series:', error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Error Loading DevOps Series</h1>
          <p className="text-gray-600 mb-4">Failed to load content</p>
          <Link href="/" className="text-blue-600 hover:text-blue-700">Back to Home</Link>
        </div>
      </div>
    );
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
  );
}