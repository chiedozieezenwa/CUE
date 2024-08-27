import { useBooking } from "../../../context/bookingDetails/useBooking";
import styles from "./styles.module.css"
// import { useBooking } from "../../../context/bookingDetails";

export const RetailCart = () => {
 const { bookingDetails } = useBooking();
 const carRental = bookingDetails.carRental;

 console.log(carRental)
  return (
    <div>index


<div className={styles.retailCartContainer}>
      <h2>Your Cart</h2>

      {carRental ? (
        <div className={styles.cartItem}>
          <h3>Car Rental Details</h3>
          <p><strong>Car Name:</strong> {carRental.name}</p>
          <p><strong>Rental Start Date:</strong> {carRental.startDate}</p>
          <p><strong>Rental End Date:</strong> {carRental.endDate}</p>
          <p><strong>Total Price:</strong> ${carRental.totalPrice}</p>
        </div>
      ) : (
        <p>No car rental details found.</p>
      )}

    </div>

    </div>
  )
};