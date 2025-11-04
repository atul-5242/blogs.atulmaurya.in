import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// Notion styles first
import "react-notion-x/src/styles.css";
import "katex/dist/katex.min.css";
import "prismjs/themes/prism.css";

// Then our custom styles to override
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "Atul Maurya - Blogs",
  description: "Atul Maurya - Blogs | A collection of my thoughts and experiences | Your tech knowledge is here.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ background: "#fff", color: "#000" }}>{children}</body>
    </html>
  );
}

