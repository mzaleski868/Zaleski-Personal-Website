import React, { Dispatch, SetStateAction } from "react";
import { useNavigate } from 'react-router-dom';
import './contentBox.css';

interface ContentBoxProps {
  title: string;
  content: React.ReactNode;
  route: string;
  state: string;
  setState: Dispatch<SetStateAction<string>>;
}

const ContentBox: React.FC<ContentBoxProps> = ({ title, content, route, setState, state }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setState(route)
    navigate(route); //navigate to the specified route
  };

  return (
    <div className="content-box" onClick={handleClick}>
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
