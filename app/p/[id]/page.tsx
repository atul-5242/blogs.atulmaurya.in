import NotionClient from "@/components/NotionClient";
import { NotionAPI } from "notion-client";

export const dynamic = "force-dynamic";

export default async function NotionDynamicPage({
  params,
}: {
  params: Promise<{ id: string }>; // Next 16: params is a Promise
}) {
  const { id } = await params;

  if (!id) {
    return <main style={{ padding: 24 }}>Invalid Notion page id.</main>;
  }

  const api = new NotionAPI();              // Server-side fetch (best for CORS)
  const recordMap = await api.getPage(id);  // dashed/undashed OK

  return (
    <main style={{ maxWidth: 920, margin: "0 auto", padding: 24 }}>
      <NotionClient recordMap={recordMap} /> {/* Client component below */}
    </main>
  );
}
