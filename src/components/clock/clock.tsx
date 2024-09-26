import React, { useState, useEffect } from 'react';

const Clock: React.FC = () => {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
      <h1>Current Time:</h1>
      <p>{time}</p>
    </div>
  );
};

export default Clock;