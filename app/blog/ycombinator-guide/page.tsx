import { fetchRecordMap } from "@/lib/notion";
import Link from "next/link";
import NotionRendererWrapper from "@/components/NotionRenderer";
import { notFound } from "next/navigation";

export default async function YCombinatorGuide() {
  const notionUrl = "https://atulmaurya.notion.site/Get-500-000-for-Your-Startup-Idea-Full-Y-Combinator-Guide-for-Indian-Founders-2a476b1df1a880a5b3c3c6172a41641f";
  const recordMap = await fetchRecordMap(notionUrl);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center text-black hover:text-gray-700 dark:text-white dark:hover:text-gray-200 font-medium mb-6 transition-colors duration-200"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <NotionRendererWrapper recordMap={recordMap} fullPage={true} darkMode={false} />
      </div>
    </div>
  );
}

export async function generateMetadata() {
  return {
    title: "Get $500,000 for Your Startup Idea - Full Y Combinator Guide for Indian Founders",
    description: "A comprehensive guide for Indian founders on how to secure funding from Y Combinator",
    openGraph: {
      images: [{
        url: "https://img.notionusercontent.com/ext/https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fb%2Fb2%2FY_Combinator_logo.svg%2F1200px-Y_Combinator_logo.svg.png/size/?exp=1762538321&sig=u7xxA6O_dXX_6sZibIiUL_9c-oqZ_vAXmI0HjtJmvmo&id=2a476b1d-f1a8-80a5-b3c3-c6172a41641f&table=block",
        width: 1200,
        height: 630,
        alt: "Y Combinator Guide",
      }],
    },
  };
}
