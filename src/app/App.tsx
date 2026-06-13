"use client"; // This enables client-side functionality
import React, { useState } from 'react';
import HomePage from '@/components/homePage/homePage';
import Navbar from '../components/navigationBar/navigationBar';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

const App: React.FC = () => {
  const [stateValue, setStateValue] = useState<string>('Home');

  const links = [
    { href: '/', label: 'Home' },
    { href: '/', label: 'About' },
    { href: '/', label: 'Contact' },
  ];

  return (
    <div>
      <Navbar brandName={'MZ'} links={links} setState={setStateValue} state={stateValue} />
      <Header title="Matt Zaleski's Development Portfolio" />
      <HomePage stateValue={stateValue} setState={setStateValue} />
      <Footer />
    </div>
  );
};

export default App;
