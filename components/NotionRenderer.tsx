"use client"

import { NotionRenderer } from "react-notion-x";

interface NotionRendererWrapperProps {
  recordMap: any;
  fullPage?: boolean;
  darkMode?: boolean;
}

export default function NotionRendererWrapper({ recordMap, fullPage = true, darkMode = false }: NotionRendererWrapperProps) {
  return <NotionRenderer recordMap={recordMap} fullPage={fullPage} darkMode={darkMode} />;
}