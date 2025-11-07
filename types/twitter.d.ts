declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: () => void;
      };
    };
    Prism?: {
      highlightAll: () => void;
      highlightElement: (element: Element) => void;
    };
  }
}

export {};