"use client"; // This enables client-side functionality
import React, { useState } from 'react';
import HomePage from '@/components/homePage/homePage';
import Navbar from '../components/navigationBar/navigationBar';
import Footer from '@/components/footer/footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  const [stateValue, setStateValue] = useState<string>('Home');
  const links = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/',
    label: 'About',
  },
  {
    href: '/',
    label: 'Contact',
  },
  ]

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div style={{ paddingTop: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Navbar brandName={'MZ'} links={links} setState={setStateValue} state={stateValue}/>
            <HomePage stateValue={stateValue} setState={setStateValue}/>
            <Footer/>
          </div>
        }/>
        <Route path="smart-dashboard" element={
          <div style={{ paddingTop: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Navbar brandName={'MZ'} links={links} setState={setStateValue} state={stateValue}/>
          <Footer/>
        </div>
        }/>
      </Routes>
    </Router>
  );
};

export default App;