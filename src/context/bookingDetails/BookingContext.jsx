import { createContext, useState, useContext } from "react";

// Create the BookingContext
export const BookingContext = createContext();

// Custom hook to use the BookingContext
export const useBooking = () => {
  return useContext(BookingContext);
};

// BookingProvider component to wrap your app and provide the context
export const BookingProvider = ({ children }) => {
  const [bookingDetails, setBookingDetails] = useState({});

  // Function to add or update general booking details
  const addBookingDetails = (details) => {
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      ...details,
    }));
  };

  // Function to add a booking item specifically
  const addBookingItem = (bookingItem) => {
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      bookingItem,
    }));
  };

  return (
    <BookingContext.Provider value={{ bookingDetails, addBookingDetails, addBookingItem }}>
      {children}
    </BookingContext.Provider>
  );
};
