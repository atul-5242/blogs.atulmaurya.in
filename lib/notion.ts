// lib/notion.ts
import { NotionAPI } from "notion-client";

/**
 * Extracts a 32-char Notion page ID (without dashes) from a public URL or raw ID.
 * Works for links like:
 *   https://yourname.notion.site/Page-Title-43b9f9932d4c4e9b9304ad0f10e8c41a
 *   https://www.notion.so/Page-Title-43b9f9932d4c4e9b9304ad0f10e8c41a?pvs=4
 *   43b9f9932d4c4e9b9304ad0f10e8c41a
 *   43b9f993-2d4c-4e9b-9304-ad0f10e8c41a
 */
export function extractNotionPageId(input: string): string {
  // If it's a pure 32-hex or dashed UUID, normalize and return
  const uuidLike = input.match(/[0-9a-fA-F-]{32,36}/)?.[0] ?? "";

  if (uuidLike) {
    return uuidLike.replace(/-/g, "").toLowerCase();
  }

  // Otherwise try to get the last path segment that contains the id
  try {
    const url = new URL(input);
    const last = url.pathname.split("/").pop() || "";
    const id = last.match(/[0-9a-fA-F-]{32,36}/)?.[0] ?? "";
    if (id) return id.replace(/-/g, "").toLowerCase();
  } catch {
    // not a URL—fall through
  }

  throw new Error("Could not extract Notion page ID. Make sure you paste a public Notion link.");
}

export async function fetchRecordMap(pageIdOrUrl: string) {
  const api = new NotionAPI(); // works with PUBLIC pages, no token needed
  const id = extractNotionPageId(pageIdOrUrl);
  return api.getPage(id);
}
