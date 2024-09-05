import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import design from "./design.module.css";
import { Navbar } from "../../../../components";

export const Receipt = () => {
  const [lodging, setLodging] = useState({});
  const [carRental, setCarRental] = useState({});
  const [bookingDetails, setBookingDetails] = useState({});
  const [guestName, setGuestName] = useState("Guest");

  useEffect(() => {
    // Retrieve booking details from localStorage
    const storedBookingDetails = localStorage.getItem("bookingDetails");
    const storedUser = localStorage.getItem("currentUser");

    if (storedBookingDetails) {
      const parsedDetails = JSON.parse(storedBookingDetails);
      setLodging(parsedDetails.lodging || {});
      setCarRental(parsedDetails || {});
      setBookingDetails(parsedDetails.bookingItem || {});
    }

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setGuestName(parsedUser?.user?.fullname || "Guest");
    }
  }, []);

  const lodgingTotal = bookingDetails?.totalPrice || 0;
  const carRentalTotal = carRental?.price || 0;
  const totalPrice = lodgingTotal + carRentalTotal;

  return (
    <>
      <Navbar />
      <div className={design.container}>
        <main className={design.mainSection}>
          <section className={design.subSection}>
            <div className={design.header}>
              <p className={design.title}>Customer Receipt</p>
              <p className={design.subHeading}>
                Your reservation is now confirmed!
              </p>
            </div>
            <div className={design.bookDetails}>
              <p>Guest</p>
              <span className={design.span}>{guestName}</span>
            </div>
            <div className={design.bookDetails}>
              <p>Lodging Booked</p>
              <span className={design.span}>{lodging.address || "N/A"}</span>
            </div>
            <div className={design.bookDetails}>
              <p>Nights</p>
              <span className={design.span}>
                {bookingDetails?.numberOfDays || "N/A"}
              </span>
            </div>
            <div className={design.bookDetails}>
              <p>Rentals</p>
              <span className={design.span}>{carRental?.car || "N/A"}</span>
            </div>
          </section>

          <div className={design.divider}></div>

          <section className={design.subSection}>
            <div className={design.bookDetails}>
              <p>Pick-up</p>
              <p>Check-out</p>
            </div>
            <div className={design.bookDetails}>
              <span className={design.span}>
                {bookingDetails?.pickupDate || "N/A"}
              </span>
              <span className={design.span}>
                {bookingDetails?.returnDate || "N/A"}
              </span>
            </div>
            <div className={design.bookDetails}>
              <p>Pick-up Location</p>
              <span className={design.span}>
                {carRental?.pickupLocation || "N/A"}
              </span>
            </div>
          </section>

          <div className={design.divider}></div>

          <section className={design.subSection}>
            <div className={design.bookDetails}>
              <p>Rental Total</p>
              <span className={design.span}>
                &#8358;{carRentalTotal.toLocaleString()}
              </span>
            </div>
            <div className={design.bookDetails}>
              <p>Lodging Total</p>
              <span className={design.span}>
                &#8358;{lodgingTotal.toLocaleString()}
              </span>
            </div>
            <div className={design.bookDetails}>
              <span>Total</span>
              <span className={design.total}>
                &#8358;{totalPrice.toLocaleString()}
              </span>
            </div>
          </section>

          <Link to="/itinerary">
            <button className={design.receiptBtn}>Go to Itinerary</button>
          </Link>
        </main>
      </div>
    </>
  );
};