import React from 'react';
import './contentBox.css';

interface ContentBoxProps {
  title: string;
  content: React.ReactNode;
}

const ContentBox: React.FC<ContentBoxProps> = ({ title, content }) => {
  return (
    <div className="content-box">
      <div className="title-container">
        <p className="content-box-title">{title}</p>
      </div>
      <div className="content-box-content">
        {content}
      </div>
    </div>
  );
};

export default ContentBox;
