import  { createContext, useState } from "react";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookingDetails, setBookingDetails] = useState({});

  const addBookingDetails = (details) => {
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      ...details,
    }));
  };

  return (
    <BookingContext.Provider value={{ bookingDetails, addBookingDetails }}>
      {children}
    </BookingContext.Provider>
  );
};



