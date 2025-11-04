"use client"

import { NotionRenderer } from "react-notion-x";

interface NotionRendererWrapperProps {
  recordMap: any;
  fullPage?: boolean;
  darkMode?: boolean;
}

export default function NotionRendererWrapper({ recordMap, fullPage = true, darkMode = false }: NotionRendererWrapperProps) {
  // Define mapPageUrl inside the client component - use devops-series context
  const mapPageUrl = (id: string) => (id ? `/devops-series/${id}` : "#");
  
  return (
    <NotionRenderer 
      recordMap={recordMap} 
      fullPage={fullPage} 
      darkMode={darkMode}
      mapPageUrl={mapPageUrl}
      rootPageId={Object.keys(recordMap.block)[0]}
    />
  );
}