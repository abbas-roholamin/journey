"use client";
import React from "react";

function globalError() {
  return (
    <html>
      <body className="text-red-400">
        <h1>Something went wrong</h1>
        <button onClick={() => window.location.reload()}>Try again</button>
      </body>
    </html>
  );
}

export default global - error;
