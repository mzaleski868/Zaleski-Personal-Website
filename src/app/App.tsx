"use client"; // This enables client-side functionality
import React from 'react';
import Navbar from '../components/navigationBar/navigationBar';
import Button from '../components/button/button';
import Container from '../components/contentContainer/contentContainer'

const App: React.FC = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  const links = [
  {
    href: '',
    label: 'Home',
  },
  {
    href: '',
    label: 'About',
  },
  {
    href: '',
    label: 'Contact',
  },
  ]

  return (
    <div style={{ paddingTop: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Navbar brandName={'MZ'} links={links}/>
      <Container>
        {/* <Button text="Click Me!" onClick={handleClick} variant="primary" /> */}
        <p>Home</p>
      </Container>
    </div>
  );
};

export default App;