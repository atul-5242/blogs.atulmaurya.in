import Link from "next/link";
import Image from "next/image";

// Blog posts data
const blogPosts = [
  {
    slug: "ycombinator-guide",
    title: "Get $500,000 for Your Startup Idea - Full Y Combinator Guide for Indian Founders",
    description: "A comprehensive guide for Indian founders on how to secure funding from Y Combinator",
    image: "https://img.notionusercontent.com/ext/https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fb%2Fb2%2FY_Combinator_logo.svg%2F1200px-Y_Combinator_logo.svg.png/size/?exp=1762538321&sig=u7xxA6O_dXX_6sZibIiUL_9c-oqZ_vAXmI0HjtJmvmo&id=2a476b1d-f1a8-80a5-b3c3-c6172a41641f&table=block",
    date: "2025-11-08",
    readTime: "10 min read"
  }
  // Add more blog posts here
];

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Thoughts, stories and ideas about startups, technology, and more.
        </p>
      </header>

      <div className="space-y-8">
        {blogPosts.map((post) => (
          <article key={post.slug} className="group">
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    {post.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
