import React from 'react';
import './contentContainer.css';

interface BodyProps {
  children: React.ReactNode;
}

const contentWindow: React.FC<BodyProps> = ({ children }) => {
  return (
    <div className="content-container">
      {children}
    </div>
  );
};

export default contentWindow;