import { createContext, useContext, useState } from "react";

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookingDetails, setBookingDetails] = useState(() => {
    // Retrieve initial state from local storage
    const savedBookingDetails = localStorage.getItem("bookingDetails");
    return savedBookingDetails ? JSON.parse(savedBookingDetails) : {};
  });

  const addBookingDetails = (details) => {
    setBookingDetails(details);
    // Save booking details to local storage
    localStorage.setItem("bookingDetails", JSON.stringify(details));
  };

  return (
    <BookingContext.Provider value={{ bookingDetails, addBookingDetails }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);
