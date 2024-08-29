import { useState } from "react";
import { fan, marker01, naira, phone } from "../../../assets";
import { Button, Navbar } from "../../../components";
import { useBooking } from "../../../context/bookingDetails/useBooking";
import { PaymentModal } from "../../../components/paymentComponent/paymentModal";
import { SignUpYet } from "../../../components/paymentComponent/singUpYet";
import styles from "./styles.module.css";

export const RetailCart = () => {
  const { bookingDetails } = useBooking();
  const carRental = bookingDetails?.carRental || {};
  const lodging = bookingDetails?.lodging || {};
  
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
  const [isSignUpOverlayOpen, setSignUpOverlayOpen] = useState(false);

  const handleOpenPaymentModal = () => {
    setPaymentModalOpen(true);
    setSignUpOverlayOpen(false); 
  };

  const handleClosePaymentModal = () => {
    setPaymentModalOpen(false);
  };

  const lodgingTotal = bookingDetails?.bookingItem?.totalPrice || 0;
  const carRentalTotal = carRental?.price || 0;
  const subtotal = lodgingTotal + carRentalTotal;

  return (
    <div>
      <Navbar />
      <div className={styles.retailCartContainer}>
        {lodging && lodging.address ? (
          <div className={styles.cartItem}>
            <img src={lodging.image_url} alt="Lodging_img" id={styles.cartCar} />
            <div className={styles.cartItemList}>
              <h2>
                <strong>Lodging Address: </strong> {lodging.address}
              </h2>
              <div className={styles.cartItemList1}>
                <p>
                  <img src={marker01} alt="" /> {lodging.city}
                </p>
                <p>
                  <img src={phone} alt="" />
                  Number of Days {bookingDetails.bookingItem.numberOfDays}
                </p>
                <p>
                  <img src={phone} alt="" />
                  Number of Guests {bookingDetails.guests}
                </p>
              </div>
              <p className={styles.bookingPrice}>
                <img src={naira} alt="" /> <strong>Total Price: </strong>{" "}
                {lodgingTotal.toLocaleString()}
              </p>
            </div>
          </div>
        ) : (
          <p>No lodging details found.</p>
        )}
      </div>

      <div className={styles.retailCartContainer}>
        {bookingDetails ? (
          <div className={styles.cartItem}>
            <img src={bookingDetails.image_url} alt="Car_img" id={styles.cartCar} />
            <div className={styles.cartItemList}>
              <h2>
                <strong></strong> {bookingDetails.car}
              </h2>
              <div className={styles.cartItemList1}>
                <p>
                  {" "}
                  <img src={marker01} alt="" />{" "}
                  {bookingDetails.parking ? " Parking" : " Parking"}
                </p>
                <p>
                  {" "}
                  <img src={phone} alt="" />4{" "}
                  {bookingDetails.seats
                    ? `${bookingDetails.seats} Seats`
                    : "Seats"}
                </p>
                <p>
                  {" "}
                  <img src={fan} alt="" />
                  Air Conditioning {bookingDetails.airConditioned}
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
        ) : (
          <p>No car rental details found.</p>
        )}
      </div>

      <section className={styles.paymentMethod}>
        <div className={styles.paymentMethod2}>
          <div className={styles.paymentMethodInfo}>
            <p className={styles.payment}>Subtotal</p>
            <p className={styles.payment2}>
              <img src={naira} alt="" /> {subtotal.toLocaleString()}
            </p>
          </div>
          <div className={styles.paymentMethodInfo}>
            <p className={styles.payment}>Tax</p>
            <p className={styles.payment2}>
              {" "}
              <img src={naira} alt="" /> 0
            </p>
          </div>
          <div className={styles.paymentMethodInfo}>
            <p className={styles.payment}>Total</p>
            <p className={styles.payment2}>
              {" "}
              <img src={naira} alt="" /> {subtotal.toLocaleString()}
            </p>
          </div>
          <div className={styles.paymentMethodBTN}>
            <Button
              content="Choose Payment Method"
              className={styles.paymentBTN}
              onClick={() => setSignUpOverlayOpen(true)}
            />
          </div>
        </div>
      </section>

      {isSignUpOverlayOpen && <SignUpYet onProceedToPayment={handleOpenPaymentModal} />}

      <PaymentModal isOpen={isPaymentModalOpen} onClose={handleClosePaymentModal} />
    </div>
  );
};
