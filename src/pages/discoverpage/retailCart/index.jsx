
import { useState, useEffect } from "react";
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null); 

  useEffect(() => {
    const curentUser = localStorage.getItem("currentUser");
    console.log("Retrieved currentUser from localStorage:", curentUser);

    if (curentUser) {
      setIsLoggedIn(true);
      console.log("User is logged in.");
    } else {
      setIsLoggedIn(false);
      console.log("User is not logged in.");
    }
  }, []);

  const handleChoosePayment = () => {
    console.log("handleChoosePayment called");
    if (isLoggedIn) {
      console.log("Opening PaymentModal...");
      setPaymentModalOpen(true);
    } else {
      console.log("Opening SignUpYet overlay...");
      setSignUpOverlayOpen(true);
    }
  };

  const handleOpenPaymentModal = () => {
    console.log("Proceeding to PaymentModal...");
    setPaymentModalOpen(true);
    setSignUpOverlayOpen(false);
  };

  const handleClosePaymentModal = () => {
    setPaymentModalOpen(false);
  };

  const handleSelectPaymentMethod = (method) => { 
    setSelectedPaymentMethod(method); 
    handlePayment(method); 
  };

 
  const handlePayment = async (method) => {
    try {
     
      const fullname = bookingDetails?.user?.fullname || "Default Name"; 
      const email = bookingDetails?.user?.email || "default@example.com";
      const amount = bookingDetails?.bookingItem?.totalPrice || 0; 
  
      const response = await fetch("https://cue-backend.onrender.com/api/v1/payments/startPayment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bookingDetails,
          paymentMethod: method,
          fullname,  
          email,     
          amount     
        }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to initiate payment.");
      }
  
      const data = await response.json();
      console.log("Payment initiation successful:", data);
  
      if (data.paymentUrl) {
        window.location.href = data.paymentUrl; 
      }
    } catch (error) {
      console.error("Error initiating payment:", error);
    }
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
            <img src={lodging.image_url[0]} alt="Lodging_img" id={styles.cartCar} />
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
                  <img src={marker01} alt="" />{" "}
                  {bookingDetails.parking ? " Parking" : " Parking"}
                </p>
                <p>
                  <img src={phone} alt="" />4{" "}
                  {bookingDetails.seats
                    ? `${bookingDetails.seats} Seats`
                    : "Seats"}
                </p>
                <p>
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
              onClick={handleChoosePayment}
            />
          </div>
        </div>
      </section>

      {isSignUpOverlayOpen && (
        <SignUpYet onProceedToPayment={handleOpenPaymentModal} />
      )}
      {isPaymentModalOpen && (
        <PaymentModal
          isOpen={isPaymentModalOpen}
          onClose={handleClosePaymentModal}
          onSelectPaymentMethod={handleSelectPaymentMethod} 
        />
      )}
    </div>
  );
};
