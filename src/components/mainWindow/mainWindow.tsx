"use client"; // This enables client-side functionality
import React, { useState } from 'react';
import Button from '../button/button';
import Container from '../contentContainer/contentContainer'
import ContentRow from '../contentRow/contentRow';
import ContentBox from '../contentBox/contentBox';
import './MainWindow.css'; // Importing CSS for styling (optional)

const MainWindow: React.FC<{ stateValue: any }> = ({ stateValue }) => {

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <Container>
      <ContentRow>
        <ContentBox title={'Title'} content={<></>}/>
        <ContentBox title={'Title'} content={<></>}/>
      </ContentRow>
      <ContentRow>
        <ContentBox title={'Title'} content={<></>}/>
        <ContentBox title={'Title'} content={<></>}/>
        <ContentBox title={'Title'} content={<></>}/>
      </ContentRow>
      <ContentRow>
        <ContentBox title={'Title'} content={<></>}/>
        <ContentBox title={'Title'} content={<></>}/>
        <ContentBox title={'Title'} content={<></>}/>
        <ContentBox title={'Title'} content={<></>}/>
      </ContentRow>
    </Container>
  )
};

export default MainWindow;