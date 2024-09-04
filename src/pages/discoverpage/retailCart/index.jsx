import { useState, useEffect } from "react";
import { fan, marker01, naira, phone } from "../../../assets";
import { Button, Navbar } from "../../../components";
import { useBooking } from "../../../context/bookingDetails/useBooking";
import { PaymentModal } from "../../../components/paymentComponent/paymentModal";
import { SignUpYet } from "../../../components/paymentComponent/singUpYet";
// import { PaystackOverlay } from "../../../components/paymentComponent/paystack";
// import { CryptoOverlay } from "../../../components/paymentComponent/crypto";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

export const RetailCart = () => {
  const navigate = useNavigate();
  const { bookingDetails } = useBooking();
  const [carRental, setCarRental] = useState({});
  const [lodging, setLodging] = useState({});

  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
  const [isSignUpOverlayOpen, setSignUpOverlayOpen] = useState(false);

  // const [isPaystackOverlayOpen, setPaystackOverlayOpen] = useState(false);
  // const [isCryptoOverlayOpen, setCryptoOverlayOpen] = useState(false);
  // const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setCurrentUser(parsedUser);
      setIsLoggedIn(true);
      console.log("User is logged in.");
    } else {
      setIsLoggedIn(false);
      console.log("User is not logged in.");
    }

    const storedBookingDetails = localStorage.getItem("bookingDetails");
    if (storedBookingDetails) {
      const parsedDetails = JSON.parse(storedBookingDetails);
      setCarRental(parsedDetails.carRental || {});
      setLodging(parsedDetails.lodging || {});
    }
  }, []);

  useEffect(() => {
    if (bookingDetails) {
      setCarRental(bookingDetails.carRental || {});
      setLodging(bookingDetails.lodging || {});
      localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
    }
  }, [bookingDetails]);

  const handleChoosePaymentMethod = () => {
    if (isLoggedIn) {
      setPaymentModalOpen(true);
    } else {
      setSignUpOverlayOpen(true);
    }
  };

  const handleOpenPaymentModal = () => {
    setPaymentModalOpen(true);
    setSignUpOverlayOpen(false);
  };

  const handleClosePaymentModal = () => {
    setPaymentModalOpen(false);
  };

  const handleSelectPaymentMethod = (method) => {
    setSelectedPaymentMethod(method);
    setPaymentModalOpen(false);

    if (method === "paystack") {
      setPaystackOverlayOpen(true);
    } else if (method === "crypto") {
      setCryptoOverlayOpen(true);
    }
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
          amount,
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
        {lodging?.address && (
          <div className={styles.cartItem}>
            <img src={lodging.image_url?.[0]} alt="Lodging_img" id={styles.cartCar} />
            <div className={styles.cartItemList}>
              <h2><strong>Lodging Address: </strong>{lodging.address}</h2>
              <div className={styles.cartItemList1}>
                <p><img src={marker01} alt="" /> {lodging.city}</p>
                <p><img src={phone} alt="" /> Number of Days {bookingDetails?.bookingItem?.numberOfDays || "N/A"}</p>
                <p><img src={phone} alt="" /> Number of Guests {bookingDetails?.guests || "N/A"}</p>
              </div>
              <p className={styles.bookingPrice}>
                <img src={naira} alt="" /> <strong>Total Price: </strong> {lodgingTotal.toLocaleString()}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className={styles.retailCartContainer}>
        {bookingDetails && (
          <div className={styles.cartItem}>
            <img src={bookingDetails.image_url} alt="Car_img" id={styles.cartCar} />
            <div className={styles.cartItemList}>
              <h2><strong>{bookingDetails.car}</strong></h2>
              <div className={styles.cartItemList1}>
                <p><img src={marker01} alt="" /> {bookingDetails.parking ? " Parking" : " Parking"}</p>
                <p><img src={phone} alt="" />4 {bookingDetails.seats ? `${bookingDetails.seats} Seats` : "Seats"}</p>
                <p><img src={fan} alt="" /> Air Conditioning {bookingDetails.airConditioned}</p>
              </div>
              <p className={styles.bookingPrice}>
                <img src={naira} alt="" /> {bookingDetails.price ? bookingDetails.price.toLocaleString() : "Price not available"}
              </p>
            </div>
          </div>
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
              <img src={naira} alt="" /> 0
            </p>
          </div>
          <div className={styles.paymentMethodInfo}>
            <p className={styles.payment}>Total</p>
            <p className={styles.payment2}>
              <img src={naira} alt="" /> {subtotal.toLocaleString()}
            </p>
          </div>
          <div className={styles.paymentMethodBTN}>
            <Button
              content="Choose Payment Method"
              className={styles.paymentBTN}
              onClick={handleChoosePaymentMethod}
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
