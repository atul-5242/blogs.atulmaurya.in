"use client"

import { NotionRenderer } from "react-notion-x";
import { useEffect } from "react";
import TweetEmbed from "./TweetEmbed";
import CodeBlock from "./CodeBlock";
import dynamic from "next/dynamic";

// Dynamically import Code component to avoid SSR issues
const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then((m) => m.Code),
  { ssr: false, loading: () => <CodeBlock block="Loading..." /> }
);

interface NotionRendererWrapperProps {
  recordMap: any;
  fullPage?: boolean;
  darkMode?: boolean;
}

export default function NotionRendererWrapper({ recordMap, fullPage = true, darkMode = false }: NotionRendererWrapperProps) {
  // Define mapPageUrl inside the client component - use devops-series context
  const mapPageUrl = (id: string) => (id ? `/devops-series/${id}` : "#");
  
  // Load Twitter widgets script and process any remaining embeds
  useEffect(() => {
    const processRemainingEmbeds = () => {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        if (window.twttr?.widgets) {
          window.twttr.widgets.load();
        }
      }, 500);
    };

    processRemainingEmbeds();
  }, [recordMap]);
  
  return (
    <NotionRenderer 
      recordMap={recordMap} 
      fullPage={fullPage} 
      darkMode={darkMode}
      mapPageUrl={mapPageUrl}
      rootPageId={Object.keys(recordMap.block)[0]}
      components={{
        Tweet: TweetEmbed,
        Code: CodeBlock,
      }}
    />
  );
}