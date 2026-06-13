import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default styles

const MyCalendar: React.FC = () => {
  const [date, setDate] = useState<any>(new Date());

  const onChange = (newDate: any) => {
    setDate(newDate);
    console.log('Selected date:', newDate);
  };

  return (
    <div>
      <h1>My Calendar</h1>
      <Calendar
        onChange={onChange}
        value={date}
      />
      <p>Selected Date: {date instanceof Date ? date.toDateString() : 'No date selected'}</p>
    </div>
  );
};

export default MyCalendar;
