import { useContext } from "react";
import { BookingContext } from "./BookingContext";

export const useBooking = () => {
    return useContext(BookingContext);
  };