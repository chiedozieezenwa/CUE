import { useState } from "react";
import { currency, currency2, currencyeth, paystack } from "../../../assets";
import styles from "./styles.module.css";

export const PaymentModal = ({ isOpen, onClose }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null); 

  if (!isOpen) return null;

  const handleNextClick = () => {
    if (selectedPaymentMethod === "paystack") {
      console.log("Navigating to Paystack payment page...");
    } else if (selectedPaymentMethod === "crypto") {
      console.log("Navigating to Crypto payment page...");
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
          <h4>Select Payment Method</h4>
          <div className={styles.paymentOptions}>
            {/* Paystack Button */}
            <button
              className={`${styles.paymentOption1} ${selectedPaymentMethod === "paystack" ? styles.selected : ""}`}
              onClick={() => setSelectedPaymentMethod("paystack")}
            >
              <img src={paystack} alt="Paystack" />
            </button>

            {/* Crypto Button */}
            <button
              className={`${styles.paymentOption2} ${selectedPaymentMethod === "crypto" ? styles.selected : ""}`}
              onClick={() => setSelectedPaymentMethod("crypto")}
            >
              <div>
                <p>Crypto </p>
                <div className={styles.currency}>
                  <img src={currency} alt="Bitcoin" />
                  <img src={currencyeth} alt="Ethereum" />
                  <img src={currency2} alt="Other Crypto" />
                </div>
              </div>
            </button>

            {/* Next Button */}
            <button 
              className={styles.paymentOption}
              onClick={handleNextClick}
              disabled={!selectedPaymentMethod} 
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
