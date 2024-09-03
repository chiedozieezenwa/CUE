import { useState, useEffect } from 'react';

const LiveDateTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    
    return () => clearInterval(timerId);
  }, []);

  const formatDate = (date) => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthsOfYear = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const day = daysOfWeek[date.getDay()];
    const month = monthsOfYear[date.getMonth()];
    const dayOfMonth = date.getDate();

    // Get the correct suffix for the date
    const daySuffix = (dayOfMonth) => {
      if (dayOfMonth >= 11 && dayOfMonth <= 13) return 'th';
      switch (dayOfMonth % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };

    return `${day}, ${month} ${dayOfMonth}${daySuffix(dayOfMonth)}`;
  };

  return (
    <div>
      <h2>{formatDate(currentTime)}</h2>
    </div>
  );
};

export default LiveDateTime;
