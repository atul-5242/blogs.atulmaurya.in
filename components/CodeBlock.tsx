"use client"

import { useEffect } from "react";

interface CodeBlockProps {
  block: any;
  language?: string;
  caption?: string;
}

// Generic Code component for handling code blocks across all Notion content
const CodeBlock = ({ block, language, caption }: CodeBlockProps) => {
  useEffect(() => {
    // Load Prism.js for syntax highlighting if not already loaded
    if (typeof window !== 'undefined' && !window.Prism) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js';
      script.async = true;
      document.head.appendChild(script);
      
      script.onload = () => {
        // Load additional language support if needed
        if (language && language !== 'javascript' && language !== 'css' && language !== 'html') {
          const langScript = document.createElement('script');
          langScript.src = `https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-${language}.min.js`;
          langScript.async = true;
          document.head.appendChild(langScript);
        }
        
        // Highlight code blocks
        if (window.Prism) {
          window.Prism.highlightAll();
        }
      };
    } else if (window.Prism) {
      // If Prism is already loaded, just highlight
      window.Prism.highlightAll();
    }
  }, [language]);

  // Extract code content from the block
  const getCodeContent = () => {
    if (block?.properties?.title) {
      return block.properties.title[0][0] || '';
    }
    if (block?.properties?.code) {
      return block.properties.code[0][0] || '';
    }
    if (typeof block === 'string') {
      return block;
    }
    return '';
  };

  const codeContent = getCodeContent();
  const detectedLanguage = language || 'javascript';

  return (
    <div className="notion-code-block">
      <pre className={`language-${detectedLanguage} notion-code`}>
        <code className={`language-${detectedLanguage}`}>
          {codeContent}
        </code>
      </pre>
      {caption && (
        <div className="notion-code-caption">
          {caption}
        </div>
      )}
    </div>
  );
};

export default CodeBlock;