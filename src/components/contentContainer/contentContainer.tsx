import React from 'react';
import './contentContainer.css';

interface BodyProps {
  children: React.ReactNode;
}

const contentWindow: React.FC<BodyProps> = ({ children }) => {
  console.log(process.env.NEXT_PUBLIC_POLYGON_API_KEY)
  return (
    <div className="content-container">
      {children}
    </div>
  );
};

export default contentWindow;