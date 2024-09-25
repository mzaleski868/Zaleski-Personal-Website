import React from 'react';
import './contentRow.css';

interface ContentBoxContainerProps {
  children: React.ReactNode;
}

const ContentRow: React.FC<ContentBoxContainerProps> = ({ children }) => {
  return <div className="content-box-container">{children}</div>;
};

export default ContentRow;