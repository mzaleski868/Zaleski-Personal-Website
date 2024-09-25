import React from 'react';
import './navigationBar.css';

interface NavbarProps {
  brandName: string;
  links: { href: string; label: string }[];
  setLink: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: React.FC<NavbarProps> = ({ brandName, links, setLink }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">{brandName}</div>
      <ul className="navbar-links">
        {links.map((link, index) => (
          <li key={index}>
            <p onClick={()=> setLink(link.label)}>{link.label}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar