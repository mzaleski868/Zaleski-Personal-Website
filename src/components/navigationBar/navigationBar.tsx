import React, { Dispatch, SetStateAction } from "react";
import { useNavigate } from 'react-router-dom';
import './navigationBar.css';

interface NavbarProps {
  brandName: string;
  links: { href: string; label: string;}[];
  state: string;
  setState: Dispatch<SetStateAction<string>>;
}

const Navbar: React.FC<NavbarProps> = ({ brandName, links, setState, state }) => {
  const handleClick = (link: any) => {
    navigate(link.href)
    setState(link.label)
  }
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar-brand">{brandName}</div>
      <div className="navbar-links-container">
        <ul className="navbar-links">
          {links.map((link, index) => (
            <li key={index} onClick={()=> handleClick(link)} className={state === link.label ? "li-active" : "li-inactive"}>
              <p>{link.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar