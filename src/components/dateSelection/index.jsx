// import { useState } from 'react';

// const DateTimeSelector = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10)); 
//   const [selectedTime, setSelectedTime] = useState(new Date().toISOString().slice(11, 16)); 

//   const handleDateChange = (e) => {
//     setSelectedDate(e.target.value);
//   };

//   const handleTimeChange = (e) => {
//     setSelectedTime(e.target.value);
//   };

//   const formatDateTime = (date, time) => {
//     const selectedDateTime = new Date(`${date}T${time}`);
//     const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     const monthsOfYear = [
//       "January", "February", "March", "April", "May", "June",
//       "July", "August", "September", "October", "November", "December"
//     ];

//     const day = daysOfWeek[selectedDateTime.getDay()];
//     const month = monthsOfYear[selectedDateTime.getMonth()];
//     const dayOfMonth = selectedDateTime.getDate();

//     const daySuffix = (dayOfMonth) => {
//       if (dayOfMonth >= 11 && dayOfMonth <= 13) return 'th';
//       switch (dayOfMonth % 10) {
//         case 1: return 'st';
//         case 2: return 'nd';
//         case 3: return 'rd';
//         default: return 'th';
//       }
//     };

//     return `${day}, ${month} ${dayOfMonth}${daySuffix(dayOfMonth)} at ${selectedDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
//   };

//   return (
//     <div>
//       <div>
//         <label htmlFor="date">Select Date:</label>
//         <input
//           type="date"
//           id="date"
//           value={selectedDate}
//           onChange={handleDateChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="time">Select Time:</label>
//         <input
//           type="time"
//           id="time"
//           value={selectedTime}
//           onChange={handleTimeChange}
//         />
//       </div>
//       <h2>{formatDateTime(selectedDate, selectedTime)}</h2>
//     </div>
//   );
// };

// export default DateTimeSelector;
