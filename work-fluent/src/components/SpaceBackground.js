import React, { useState, useEffect } from "react";
import "./SpaceBackground.css"; // Ensure the CSS file is imported correctly

const SpaceBackground = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(typeof window !== "undefined");
  }, []);

  return (
    isBrowser && (
      <div className="space-background">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>
    )
  );
};

export default SpaceBackground;
