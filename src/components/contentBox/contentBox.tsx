import React, { Dispatch, SetStateAction } from "react";
import InfoComponent from "../info/info";
import { useNavigate } from 'react-router-dom';
import './contentBox.css';

interface ContentBoxProps {
  title: string;
  content: React.ReactNode;
  route: string;
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  info?: boolean;
}

const ContentBox: React.FC<ContentBoxProps> = ({ title, content, route, setState, info }) => {
  // const navigate = useNavigate();

  const handleClick = () => {
    console.log('secret click')
  };

  return (
    <div className="content-box" onClick={handleClick}>
      <div className="title-container">
        <p className="content-box-title">{title}</p>
        {info && <InfoComponent information="Built using https://open-meteo.com/" />}
      </div>
      <div className="content-box-content">
        {content}
      </div>
    </div>
  );
};

export default ContentBox;
