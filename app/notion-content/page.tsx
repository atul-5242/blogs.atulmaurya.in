// app/notion-content/page.tsx
import { fetchRecordMap } from "@/lib/notion";
import Link from "next/link";
import NotionRendererWrapper from "@/components/NotionRenderer";

// Server component - can be async
export default async function NotionContentPage() {
  const notionUrl = process.env.NOTION_PAGE_URL;
  if (!notionUrl) {
    return (
      <main style={{ padding: 24 }}>
        <h1>Set NOTION_PAGE_URL in .env.local</h1>
        <p>Example:</p>
        <pre>NOTION_PAGE_URL=https://atulmaurya.notion.site/Let-s-learn-DevOps-29d76b1df1a88072a9bfcc78d1c7d881?source=copy_link</pre>
      </main>
    );
  }

  const recordMap = await fetchRecordMap(notionUrl);

  return (
    <div>
      {/* Back to Home Button */}
      <div className="max-w-920 mx-auto px-6 py-4">
        <Link 
          href="/"
          className="inline-flex items-center text-black hover:text-gray-700 dark:text-white dark:hover:text-gray-200 font-bold mb-6 transition-colors duration-200 opacity-100 text-lg"
          style={{ color: '#000000' }}
        >
          <svg className="w-7 h-7 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </div>
      
      <main style={{ maxWidth: 920, margin: "0 auto", padding: 24 }}>
        <NotionRendererWrapper recordMap={recordMap} fullPage={true} darkMode={false} />
      </main>
    </div>
  );
}