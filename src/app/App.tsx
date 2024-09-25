"use client"; // This enables client-side functionality
import React from 'react';
import Navbar from '../components/navigationBar/navigationBar';
import Button from '../components/button/button';

const App: React.FC = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div style={{ paddingTop: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Navbar />
      <Button text="Click Me!" onClick={handleClick} variant="primary" />
    </div>
  );
};

export default App;