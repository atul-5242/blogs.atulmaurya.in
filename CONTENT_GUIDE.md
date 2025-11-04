# Content Management Guide 📚

This guide explains how to add new series and blogs to your website. Follow these simple steps to expand your content.

## 🎯 Quick Overview

Your website supports two types of content:
- **Series** (Multi-part content with internal navigation)
- **Blogs** (Individual articles)

## 📝 Adding New Series

### Step 1: Add Series to Homepage
Edit `app/page.tsx` and add your new series to the `mockSeries` array:

```javascript
const mockSeries: ContentItem[] = [
  {
    id: "devops-series",
    title: "DevOps Mastery Series",
    description: "Complete guide to DevOps practices, tools, and methodologies. Learn CI/CD, containerization, monitoring, and more.",
    image: "https://img.youtube.com/vi/s5OaI4sMdaw/maxresdefault.jpg",
    slug: "devops-series", // This becomes the URL: /devops-series
    notionUrl: "https://atulmaurya.notion.site/Let-s-learn-DevOps-29d76b1df1a88072a9bfcc78d1c7d881?source=copy_link"
  },
  // 👇 ADD YOUR NEW SERIES HERE
  {
    id: "cloud-series",
    title: "Cloud Computing Fundamentals", 
    description: "Master AWS, Azure, and GCP. Learn cloud architecture, deployment strategies, and cost optimization.",
    image: "https://your-image-url.jpg", // Replace with your image
    slug: "cloud-series", // URL will be: /cloud-series
    notionUrl: "https://your-notion-url-here" // Replace with your Notion URL
  }
]
```

### Step 2: Create Series Page Structure
Create the folder structure for your new series:

```
app/
├── cloud-series/           👈 Create this folder
│   ├── page.tsx           👈 Create this file
│   └── [pageId]/          👈 Create this folder
│       └── page.tsx       👈 Create this file
```

### Step 3: Create Main Series Page
Create `app/cloud-series/page.tsx`:

```javascript
import { fetchRecordMap } from "@/lib/notion";
import Link from "next/link";
import NotionRendererWrapper from "@/components/NotionRenderer";

export default async function CloudSeriesPage() {
  const notionUrl = "https://your-cloud-notion-url-here"; // 👈 Replace with your URL
  
  let recordMap;
  try {
    recordMap = await fetchRecordMap(notionUrl);
  } catch (error) {
    console.error('Error fetching Cloud series:', error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Error Loading Cloud Series</h1>
          <p className="text-gray-600 mb-4">Failed to load content</p>
          <Link href="/" className="text-blue-600 hover:text-blue-700">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Back to Home Button */}
      <div className="max-w-920 mx-auto px-6 py-4">
        <Link 
          href="/"
          className="inline-flex items-center text-black hover:text-gray-700 font-bold mb-6 transition-colors duration-200 opacity-100 text-lg"
          style={{ color: '#000000' }}
        >
          <svg className="w-7 h-7 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
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
```

### Step 4: Create Sub-pages Handler
Create `app/cloud-series/[pageId]/page.tsx`:

```javascript
import { NotionAPI } from "notion-client";
import Link from "next/link";
import NotionRendererWrapper from "@/components/NotionRenderer";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

interface CloudPageProps {
  params: Promise<{ pageId: string }>
}

export default async function CloudSubPage({ params }: CloudPageProps) {
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
      {/* Back to Cloud Series Button */}
      <div className="max-w-920 mx-auto px-6 py-4">
        <Link 
          href="/cloud-series" // 👈 Update this to match your series slug
          className="inline-flex items-center text-black hover:text-gray-700 font-bold mb-6 transition-colors duration-200 opacity-100 text-lg"
          style={{ color: '#000000' }}
        >
          <svg className="w-7 h-7 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Cloud Series {/* 👈 Update this text */}
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
```

### Step 5: Update Notion Renderer
Edit `components/NotionRenderer.tsx` to handle the new series URLs:

```javascript
export default function NotionRendererWrapper({ recordMap, fullPage = true, darkMode = false }: NotionRendererWrapperProps) {
  // Update mapPageUrl to handle multiple series
  const mapPageUrl = (id: string) => {
    if (!id) return "#";
    
    // Get current path to determine which series we're in
    const currentPath = window.location.pathname;
    
    if (currentPath.startsWith('/devops-series')) {
      return `/devops-series/${id}`;
    } else if (currentPath.startsWith('/cloud-series')) {
      return `/cloud-series/${id}`; // 👈 Add your new series
    }
    
    // Default fallback
    return `/p/${id}`;
  };
  
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
```

## 📄 Adding New Blogs

### Step 1: Add Blog to Homepage
Edit `app/page.tsx` and uncomment/add to the `mockBlogs` array:

```javascript
const mockBlogs: ContentItem[] = [
  // 👇 ADD YOUR NEW BLOGS HERE
  {
    id: "docker-best-practices",
    title: "Docker Best Practices for Production",
    description: "Essential Docker practices for building secure, efficient containers in production environments.",
    image: "https://your-image-url.jpg", // Replace with your image
    slug: "docker-best-practices", // URL will be: /docker-best-practices
    notionUrl: "https://your-notion-blog-url" // Replace with your Notion URL
  },
  {
    id: "openai-devday-recap",
    title: "OpenAI DevDay 2024 Recap", 
    description: "Key takeaways and insights from OpenAI DevDay conference.",
    image: "https://your-image-url.jpg",
    slug: "openai-devday-recap", // URL will be: /openai-devday-recap
    notionUrl: "https://your-notion-blog-url"
  }
]
```

### Step 2: Add Blog to Content Mapping
Edit `app/[id]/page.tsx` and add your blog to the `contentMap`:

```javascript
const contentMap: Record<string, { title: string; notionUrl: string }> = {
  // 👇 ADD YOUR NEW BLOGS HERE
  "docker-best-practices": {
    title: "Docker Best Practices for Production",
    notionUrl: "https://your-notion-blog-url"
  },
  "openai-devday-recap": {
    title: "OpenAI DevDay 2024 Recap",
    notionUrl: "https://your-notion-blog-url" 
  }
}
```

## 🌐 URL Structure

After following this guide, your URLs will be:

### Series URLs:
- `/devops-series` → DevOps main page
- `/devops-series/page-id` → DevOps sub-pages
- `/cloud-series` → Cloud main page  
- `/cloud-series/page-id` → Cloud sub-pages

### Blog URLs:
- `/docker-best-practices` → Individual blog post
- `/openai-devday-recap` → Individual blog post

## 📋 Checklist for New Content

### For Series:
- [ ] Add to `mockSeries` array in `app/page.tsx`
- [ ] Create `app/your-series/page.tsx`
- [ ] Create `app/your-series/[pageId]/page.tsx`  
- [ ] Update `components/NotionRenderer.tsx` mapPageUrl
- [ ] Replace placeholder URLs with your actual Notion URLs
- [ ] Add your series image URL

### For Blogs:
- [ ] Add to `mockBlogs` array in `app/page.tsx`
- [ ] Add to `contentMap` in `app/[id]/page.tsx`
- [ ] Replace placeholder URLs with your actual Notion URLs
- [ ] Add your blog image URL

## 🎨 Customization Tips

### Images:
- Use high-quality images (recommended: 1200x630px)
- YouTube thumbnails work great: `https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg`
- Ensure images are publicly accessible

### Descriptions:
- Keep descriptions concise (2-3 sentences)
- Focus on what readers will learn
- Use action words like "Master", "Learn", "Discover"

### Slugs:
- Use kebab-case (lowercase with hyphens)
- Keep them short but descriptive
- Avoid special characters

## 🚀 Testing Your New Content

1. **Add content** following the steps above
2. **Restart your dev server**: `npm run dev`
3. **Test navigation**:
   - Homepage → Content card → Main page
   - Internal links → Sub-pages  
   - Back navigation (browser and buttons)
4. **Check URLs** are clean and professional

## 💡 Pro Tips

- **Consistent Naming**: Use similar patterns for IDs, titles, and slugs
- **Image Optimization**: Compress images for faster loading
- **SEO Friendly**: Use descriptive titles and descriptions
- **Test Mobile**: Ensure content works on all devices
- **Backup URLs**: Keep a list of your Notion URLs organized

## 🆘 Troubleshooting

**Content not showing?**
- Check Notion URL is public and accessible
- Verify all required fields are filled
- Restart dev server after changes

**404 errors?**
- Ensure folder structure matches exactly
- Check file names are correct (`page.tsx`)
- Verify slugs match between homepage and routes

**Internal links not working?**
- Check `mapPageUrl` includes your series
- Ensure `[pageId]` route exists for your series

---

**Need Help?** Check the existing DevOps series implementation as a reference! 🎯