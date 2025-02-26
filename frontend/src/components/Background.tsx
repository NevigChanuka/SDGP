import React, { ReactNode } from "react";

interface BackgroundProps {
  children: ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-300 to-blue-300 z-0">
      {children}
    </div>
  );
};

export default Background;
