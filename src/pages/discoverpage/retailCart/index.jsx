import { useState, useEffect } from "react";
import { fan, marker01, naira, phone } from "../../../assets";
import { Button, Navbar } from "../../../components";
import { PaymentModal } from "../../../components/paymentComponent/paymentModal";
import { SignUpYet } from "../../../components/paymentComponent/singUpYet";

import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { useBooking } from "../../../context/bookingDetails/useBooking";

export const RetailCart = () => {
  const navigate = useNavigate();
  const { bookingDetails } = useBooking();
  const [carRental, setCarRental] = useState({});
  const [lodging, setLodging] = useState({});

  
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
  const [isSignUpOverlayOpen, setSignUpOverlayOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null); 
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);


  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setCurrentUser(parsedUser);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
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
      setCarRental(bookingDetails || {});
      setLodging(bookingDetails.lodging || {});
      localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));
    }
  }, [bookingDetails]);

  const handleChoosePaymentMethod = () => {
    if (isLoggedIn) {

      console.log("Opening PaymentModal...");
      setPaymentModalOpen(true);
    } else {
      console.log("Opening SignUpYet overlay...");

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

      console.log("User", currentUser?.user);

      const fullname = currentUser?.user?.fullname || "Solotech";
      const email = currentUser?.user?.email || "u.ali@genesystechhub.com";

      const amount = bookingDetails?.bookingItem?.totalPrice || 0;

      const response = await fetch(
        "https://cue-backend.onrender.com/api/v1/payments/startPayment",
        {
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
        }
      );


      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server responded with an error:", errorData);
        throw new Error("Failed to initiate payment.");
      }

      const data = await response.json();

      console.log("Payment initiation successful1:", data);
      const authorizationUrl = data?.data?.data?.authorization_url;
      console.log("Payment initiation successful auth:", authorizationUrl);

      if (authorizationUrl) {
        window.location.href = authorizationUrl;
      } else {
        navigate("/paymentConfirmation");

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

            <div className={styles.cartItemBTN}>
            <img src={lodging.image_url[0]} alt="Lodging_img" id={styles.cartCar} />
             </div>
            <div className={styles.cartItemList}>
              <h2>
                <strong></strong> {lodging.name}
              </h2>
              <div className={styles.cartItemList1}>
                <p>
                  <img src={marker01} alt="" /> {lodging.city}
                </p>
                <p>
                  <img src={phone} alt="" />
                  Number of Days{" "}
                  {bookingDetails?.bookingItem?.numberOfDays || "N/A"}
                </p>
                <p>
                  <img src={phone} alt="" />
                  Number of Guests {bookingDetails?.guests || "N/A"}
                </p>

              </div>
              <p className={styles.bookingPrice}>
                <img src={naira} alt="" /> <strong>Total Price: </strong>{" "}
                {lodgingTotal.toLocaleString()}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className={styles.retailCartContainer}>

        {carRental ? (

        {bookingDetails && (

          <div className={styles.cartItem}>
            <div className={styles.cartItemBTN}>
             <img src={bookingDetails.image_url} alt="Car_img" id={styles.cartCar} />
             </div>
            <div className={styles.cartItemList}>

              <h2>
                <strong></strong> {carRental.car}
              </h2>
              <div className={styles.cartItemList1}>
                <p>
                  <img src={marker01} alt="" />{" "}
                  {carRental.parking ? " Parking" : " No Parking"}
                </p>
                <p>
  <img src={phone} alt="" />
  {carRental.seats ? `${carRental.seats} Seats` : "Seats"}
</p>

                <p>
                  <img src={fan} alt="" />
                  Air Conditioning {carRental.airConditioned ? "Yes" : "No"}
                </p>

              </div>
              <p className={styles.bookingPrice}>
                <img src={naira} alt="" />{" "}
                {carRental.price
                  ? carRental.price.toLocaleString()
                  : "Price not available"}
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