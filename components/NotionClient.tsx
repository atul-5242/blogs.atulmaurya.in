"use client";

import { NotionRenderer } from "react-notion-x";
import type { ExtendedRecordMap } from "notion-types";

export default function NotionClient({ recordMap }: { recordMap: ExtendedRecordMap }) {
  return (
    <div style={{ maxWidth: 920, margin: "0 auto", padding: 24 }}>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={false}
        mapPageUrl={(id) => (id ? `/p/${id}` : "#")}
        rootPageId={Object.keys(recordMap.block)[0]}
      />
    </div>
  );
}