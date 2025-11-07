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
  description: "Atul Maurya - Blogs | A collection of my thoughts and experiences | Your tech knowledge here.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://pbs.twimg.com/profile_images/1939736840627761152/m6XhoE3-_400x400.jpg" type="image/png" />
        <link rel="icon" href="https://pbs.twimg.com/profile_images/1939736840627761152/m6XhoE3-_400x400.jpg" sizes="32x32" />
        <link rel="icon" href="https://pbs.twimg.com/profile_images/1939736840627761152/m6XhoE3-_400x400.jpg" sizes="16x16" />
        <link rel="apple-touch-icon" href="https://pbs.twimg.com/profile_images/1939736840627761152/m6XhoE3-_400x400.jpg" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`} style={{ background: "#fff", color: "#000" }}>{children}</body>
    </html>
  );
}

