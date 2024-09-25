"use client"; // This enables client-side functionality
import React, { useState } from 'react';
import Navbar from '../components/navigationBar/navigationBar';
// import Button from '../components/button/button';
import Footer from '@/components/footer/footer';
import Container from '../components/contentContainer/contentContainer'

const App: React.FC = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  const [stateValue, setStateValue] = useState<string>('Home');

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
      <Navbar brandName={'MZ'} links={links} setLink={setStateValue}/>
      <Container>
        {/* <Button text="Click Me!" onClick={handleClick} variant="primary" /> */}
        <h1 style={{ color: '#7db1be' }}>{stateValue}</h1>
      </Container>
      <Footer/>
    </div>
  );
};

export default App;