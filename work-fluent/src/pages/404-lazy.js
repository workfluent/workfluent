import * as React from "react";

const NotFoundPage = () => {
  if (typeof window === "undefined") {
    // Return a simple static fallback for SSR
    return (
      <div>
        <h1>404: Not Found</h1>
        <p>This page could not be found.</p>
      </div>
    );
  }

  // Client-side rendering logic (if any)
  return (
    <div>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  );
};

export default NotFoundPage;
