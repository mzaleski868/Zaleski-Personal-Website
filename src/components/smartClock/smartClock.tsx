import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import './smartClock.css';

const SmartClock: React.FC = () => {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  const today = new Date();
  const formattedDate = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;

  return (
    <div className="smart-clock-container">
      <div className="time-container">
        <FaClock className="clock-icon" />
        <p>{time}</p>
      </div>
      <div className="date-container">
        <FaCalendarAlt className="calendar-icon" />
        <span>{formattedDate}</span>
      </div>
    </div>
  );
};

export default SmartClock;
