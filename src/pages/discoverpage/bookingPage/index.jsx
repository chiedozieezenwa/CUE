import { useLocation } from "react-router-dom";
import styles from "./styles.module.css";
import { Button, Navbar } from "../../../components";
import { useBooking } from "../../../context/bookingDetails";
import { fan, marker01, naira, phone } from "../../../assets";
import { Tab } from "../nav";
import { NavLink } from "react-router-dom";

export const BookingDetails = () => {
  const location = useLocation();
  const bookingDetails = location.state;
  const { addBookingDetails } = useBooking();

  const handleAddToCart = () => {
      addBookingDetails(bookingDetails);
      alert("Car rental details added to your cart!");
    };

  if (!bookingDetails) {
    return (
      <p>No booking details available. Please return to the rentals page.</p>
    );
  }

  return (
    <div className={styles.bookingContainer}>
      <div>
        <Navbar />
        <Tab/>
        <h1 className={styles.BookingH1}>
          Unlock Unique Rentals for Every Adventure
        </h1>
        <div className={styles.bookingDetails}>
          <div className={styles.bookingDetailsList}>
            <img
              src={bookingDetails.image_url}
              alt={bookingDetails.car}
              className={styles.bookingIMG}
            />
            <div className={styles.BookingList}>
              <h2 className={styles.bookingCar}>{bookingDetails.car}</h2>
              <div className={styles.bookingCarDetails}>
                <p> <img src={marker01} alt="" />
                 {" "}
                  {bookingDetails.parking ? " Parking" : " Parking"}
                </p>
                <p> <img src={phone} alt="" />
                  4 {" "}
                  {bookingDetails.seats
                    ? `${bookingDetails.seats} Seats`
                    : "Seats"}
                </p>
                <p> <img src={fan} alt="" />
                  Air Conditioning{" "}
                  {bookingDetails.airConditioned }
                </p>
              </div>
              <p className={styles.bookingPrice}>
                <img src={naira} alt="" />{" "}
                {bookingDetails.price
                  ? bookingDetails.price.toLocaleString()
                  : "Price not available"}
              </p>
            </div>
          </div>
          <div className={styles.bookingDetails1}>
            <div className={styles.bookingDetailsInfo}>
              <div>
                <h3>Pickup Details</h3>
              </div>
              <p>Pickup Date: {bookingDetails.date.toLocaleDateString()}</p>
              <p>Pickup Time: {bookingDetails.time.toLocaleTimeString()}</p>
              <p>Pickup Location: {bookingDetails.location}</p>
            </div>
          </div>
           <div className={styles.bookingButton}>
           <NavLink to="/lodging" >
           <Button
            content="Add to Payment Cart"
            className={styles.bookingBTN}
            onClick={handleAddToCart}
            />
          </NavLink>
           </div>
        </div>
      </div>
    </div>
  );
};
