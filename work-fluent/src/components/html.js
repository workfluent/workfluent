import React from "react";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        {/* ...existing code... */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* ...existing code... */}
      </head>
      <body {...props.bodyAttributes}>
        {/* ...existing code... */}
      </body>
    </html>
  );
}
