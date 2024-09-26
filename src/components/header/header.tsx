import React from "react";
import './header.css'; // Import the CSS file

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="header">
      <h1 className="header-title">{title}</h1>
    </header>
  );
};

export default Header;
