"use client"; // This enables client-side functionality
import React, { useState } from 'react';
import MainWindow from '@/components/mainWindow/mainWindow';
import Navbar from '../components/navigationBar/navigationBar';
import ContentRow from '@/components/contentRow/contentRow';
import ContentBox from '@/components/contentBox/contentBox';
import Button from '../components/button/button';
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
      <MainWindow stateValue={stateValue} />
      <Footer/>
    </div>
  );
};

export default App;