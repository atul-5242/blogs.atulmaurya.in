"use client"

import { useEffect } from "react";

interface TweetEmbedProps {
  id: string;
}

// Generic Tweet component for handling Twitter embeds across all Notion content
const TweetEmbed = ({ id }: TweetEmbedProps) => {
  useEffect(() => {
    // Load Twitter widgets script if not already loaded
    if (!window.twttr) {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.charset = 'utf-8';
      document.head.appendChild(script);
      
      script.onload = () => {
        if (window.twttr?.widgets) {
          window.twttr.widgets.load();
        }
      };
    } else {
      // If script is already loaded, just render tweets
      window.twttr.widgets.load();
    }
  }, [id]);

  return (
    <div className="notion-tweet-embed">
      <blockquote 
        className="twitter-tweet" 
        data-dnt="true"
        data-theme={undefined} // Let it auto-detect theme
      >
        <a href={`https://twitter.com/x/status/${id}`}>
          Loading tweet...
        </a>
      </blockquote>
    </div>
  );
};

export default TweetEmbed;