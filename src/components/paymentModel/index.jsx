import { useState } from "react";
import { currency, currency2, currencyeth, logo, paystack } from "../../assets";
import styles from "./design.module.css";

export const PaymentModal = ({ isOpen, onClose, onSelectPaymentMethod }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handlePaymentOptionClick = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleNextClick = () => {
    if (selectedPaymentMethod) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        onSelectPaymentMethod(selectedPaymentMethod);
      }, 2000);
    } else {
      alert("Please select a payment method");
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {isLoading && (
          <div className={styles.loaderContainer}>
            <img src={logo} alt="Loading..." className={styles.loaderImage} />
          </div>
        )}
        <button className={styles.closeButton} onClick={onClose} disabled={isLoading}>
          &times;
        </button>
        <h4>Select Payment Method</h4>
        <div className={styles.paymentOptions}>
          <button
            className={`${styles.paymentOption1} ${selectedPaymentMethod === "paystack" ? styles.selected : ""}`}
            onClick={() => handlePaymentOptionClick("paystack")}
            disabled={isLoading}
          >
            <img src={paystack} alt="Paystack" />
          </button>
          <button
            className={`${styles.paymentOption2} ${selectedPaymentMethod === "crypto" ? styles.selected : ""}`}
            onClick={() => handlePaymentOptionClick("crypto")}
            disabled={isLoading}
          >
            <div>
              <p>Crypto</p>
              <div className={styles.currency}>
                <img src={currency} alt="Bitcoin" />
                <img src={currencyeth} alt="Ethereum" />
                <img src={currency2} alt="Other currencies" />
              </div>
            </div>
          </button>
        </div>
        <button
          className={styles.paymentOption}
          onClick={handleNextClick}
          disabled={isLoading || !selectedPaymentMethod}
        >
          {isLoading ? "Loading..." : "Next"}
        </button>
      </div>
    </div>
  );
};
