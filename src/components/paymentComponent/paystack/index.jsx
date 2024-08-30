import { featured, paystack } from "../../../assets";
import { Button } from "../../button";
import styles from "./styles.module.css";

export const PaystackOverlay = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div className={styles.paystackContent}>
        <Button img={paystack} className={styles.paystckBTN}/>
        <img src={featured} alt="" />
          <div className={styles.paystackContent1}>
            <div className={styles.paystackContentInfo}>
              <p>Name on card</p>
              <input type="text" placeholder="Olivia Rhye" />
            </div>
            <div className={styles.paystackContentInfo1}>
              <p>Expiry</p>
              <input type="number" placeholder="06 / 2024" />
            </div>
          </div>
          <div className={styles.paystackContent1}>
            <div className={styles.paystackContentInfo}>
              <p>Card number</p>
              <input type="number" placeholder="1234 1234 1234 1234" />
            </div>
            <div className={styles.paystackContentInfo1}>
              <p>CVV</p>
              <input type="number" placeholder="•••" />
            </div>
          </div>
          <button className={styles.confirmButton} onClick={onClose}>
            Confirm Payment
          </button>
        </div>
      </div>
    </div>
  );
};
