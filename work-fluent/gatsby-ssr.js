import React from "react";
import { wrapRootElement as wrap } from '../wrapRootElement';

// Set HTML attributes (e.g., language)
export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` });
};

// Wrap problematic dependencies in a browser check
export const wrapRootElement = ({ element }) => {
  if (typeof window === "undefined") {
    return <>{element}</>; // Return element as-is for SSR
  }

  // Client-side logic (if any)
  return <>{element}</>;
};
