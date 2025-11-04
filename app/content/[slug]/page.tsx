import { fetchRecordMap } from "@/lib/notion";
import Link from "next/link";
import NotionRendererWrapper from "@/components/NotionRenderer";
import { notFound } from "next/navigation";

// Content mapping - add your Notion URLs here
const contentMap = {
  "devops-mastery": {
    title: "DevOps Mastery Series",
    notionUrl: "https://atulmaurya.notion.site/Let-s-learn-DevOps-29d76b1df1a88072a9bfcc78d1c7d881?source=copy_link"
  },
  "cloud-fundamentals": {
    title: "Cloud Computing Fundamentals", 
    notionUrl: "" // TODO(stagewise): Add your cloud series Notion URL here
  },
  "kubernetes-deep-dive": {
    title: "Kubernetes Deep Dive",
    notionUrl: "" // TODO(stagewise): Add your Kubernetes series Notion URL here
  },
  "docker-best-practices": {
    title: "Docker Best Practices for Production",
    notionUrl: "" // TODO(stagewise): Add your Docker blog Notion URL here
  },
  "ci-cd-pipeline": {
    title: "Building Robust CI/CD Pipelines", 
    notionUrl: "" // TODO(stagewise): Add your CI/CD blog Notion URL here
  }
}

interface ContentPageProps {
  params: {
    slug: string
  }
}

export default async function ContentPage({ params }: ContentPageProps) {
  const { slug } = params
  const content = contentMap[slug as keyof typeof contentMap]
  
  if (!content || !content.notionUrl) {
    return notFound()
  }

  const recordMap = await fetchRecordMap(content.notionUrl)

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
  )
}

export async function generateStaticParams() {
  return Object.keys(contentMap).map((slug) => ({
    slug: slug,
  }))
}