"use client"
// app/page.tsx
import { NotionRenderer } from "react-notion-x";
import { fetchRecordMap } from "@/lib/notion";

// App Router default: server component → safe to do async here
export default async function Page() {
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
    <main style={{ maxWidth: 920, margin: "0 auto", padding: 24 }}>
      <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />
    </main>
  );
}
