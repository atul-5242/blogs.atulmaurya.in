import { NotionAPI } from "notion-client";
import Link from "next/link";
import NotionRendererWrapper from "@/components/NotionRenderer";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

interface DevOpsPageProps {
  params: Promise<{ pageId: string }>
}

export default async function DevOpsSubPage({ params }: DevOpsPageProps) {
  const { pageId } = await params;

  if (!pageId) {
    return notFound();
  }

  let recordMap;
  try {
    const api = new NotionAPI();
    recordMap = await api.getPage(pageId);
  } catch (error) {
    console.error('Error fetching Notion page:', error);
    return notFound();
  }

  return (
    <div>
      {/* Back to DevOps Series Button */}
      <div className="max-w-920 mx-auto px-6 py-4">
        <Link 
          href="/devops-series"
          className="inline-flex items-center text-black hover:text-gray-700 font-bold mb-6 transition-colors duration-200 opacity-100 text-lg"
          style={{ color: '#000000' }}
        >
          <svg className="w-7 h-7 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
          Back to DevOps Series
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