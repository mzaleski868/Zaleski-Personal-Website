import React from 'react';
import './navigationBar.css';

interface NavbarProps {
  brandName: string;
  links: { href: string; label: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ brandName, links }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">{brandName}</div>
      <ul className="navbar-links">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar