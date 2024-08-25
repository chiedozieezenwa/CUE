import  { createContext, useState, useContext } from "react";

const BookingContext = createContext();

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

export const useBooking = () => {
  return useContext(BookingContext);
};

