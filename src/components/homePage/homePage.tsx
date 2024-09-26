"use client"; // This enables client-side functionality
import React, { Dispatch, SetStateAction } from "react";
import Container from '../contentContainer/contentContainer'
import ContentRow from '../contentRow/contentRow';
import ContentBox from '../contentBox/contentBox';
import SmartClock from "../smartClock/smartClock";
import WeatherComponent from "../weather/weatherForecast";
import Calendar from "react-calendar";
import './homePage.css';

const HomePage: React.FC<{ stateValue: any, setState: Dispatch<SetStateAction<string>>; }> = ({ stateValue, setState }) => {
  return (
    <div className="home-page">
      <Container>
        <ContentRow>
          <ContentBox title={'Weather'} content={<WeatherComponent/>} route={'/smart-dashboard'} setState={setState} state={stateValue} info={true}/>
          <ContentBox title={'Running Clock'} content={<SmartClock/>} route={'/smart-dashboard'} setState={setState} state={stateValue}/>
          <ContentBox title={'Calendar'} content={<Calendar/>} route={'/smart-dashboard'} setState={setState} state={stateValue}/>
        </ContentRow>
      </Container>
      <Container>
        <ContentRow>
          <ContentBox title={'Project 2'} content={<></>} route={'/project2'} setState={setState} state={stateValue}/>
        </ContentRow>
        <ContentRow>
          <ContentBox title={'Project 3'} content={<></>} route={'/project3'} setState={setState} state={stateValue}/>
          <ContentBox title={'Project 4'} content={<></>} route={'/project4'} setState={setState} state={stateValue}/>
        </ContentRow>
      </Container>
      <Container>
        <ContentRow>
          <ContentBox title={'Project 2'} content={<></>} route={'/project2'} setState={setState} state={stateValue}/>
        </ContentRow>
        <ContentRow>
          <ContentBox title={'Project 3'} content={<></>} route={'/project3'} setState={setState} state={stateValue}/>
          <ContentBox title={'Project 4'} content={<></>} route={'/project4'} setState={setState} state={stateValue}/>
        </ContentRow>
      </Container>
      <Container>
        <ContentRow>
          <ContentBox title={'Project 2'} content={<></>} route={'/project2'} setState={setState} state={stateValue}/>
        </ContentRow>
        <ContentRow>
          <ContentBox title={'Project 3'} content={<></>} route={'/project3'} setState={setState} state={stateValue}/>
          <ContentBox title={'Project 4'} content={<></>} route={'/project4'} setState={setState} state={stateValue}/>
        </ContentRow>
      </Container>
    </div>
  )
};

export default HomePage;