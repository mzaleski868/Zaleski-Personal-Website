"use client"; // This enables client-side functionality
import React, { Dispatch, SetStateAction } from "react";
import Container from '../contentContainer/contentContainer'
import ContentRow from '../contentRow/contentRow';
import ContentBox from '../contentBox/contentBox';
import './homePage.css'; // Importing CSS for styling (optional)

const HomePage: React.FC<{ stateValue: any, setState: Dispatch<SetStateAction<string>>; }> = ({ stateValue, setState }) => {
  return (
    <Container>
      <ContentRow>
        <ContentBox title={'Project 1'} content={<></>} route={'/smart-dashboard'} setState={setState} state={stateValue}/>
        <ContentBox title={'Project 2'} content={<></>} route={'/project2'} setState={setState} state={stateValue}/>
      </ContentRow>
      <ContentRow>
        <ContentBox title={'Project 3'} content={<></>} route={'/project3'} setState={setState} state={stateValue}/>
        <ContentBox title={'Project 4'} content={<></>} route={'/project4'} setState={setState} state={stateValue}/>
      </ContentRow>
    </Container>
  )
};

export default HomePage;