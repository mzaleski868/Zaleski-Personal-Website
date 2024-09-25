"use client"; // This enables client-side functionality
import React from 'react';
import Container from '../contentContainer/contentContainer'
import ContentRow from '../contentRow/contentRow';
import ContentBox from '../contentBox/contentBox';
import './homePage.css'; // Importing CSS for styling (optional)

const HomePage: React.FC<{ stateValue: any }> = ({ stateValue }) => {

  return (
    <Container>
      <ContentRow>
        <ContentBox title={'Project 1'} content={<></>} route={'/smart-dashboard'}/>
        <ContentBox title={'Project 2'} content={<></>} route={'/project2'}/>
      </ContentRow>
      <ContentRow>
        <ContentBox title={'Project 3'} content={<></>} route={'/project3'}/>
        <ContentBox title={'Project 4'} content={<></>} route={'/project4'}/>
      </ContentRow>
    </Container>
  )
};

export default HomePage;