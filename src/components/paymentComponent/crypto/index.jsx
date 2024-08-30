import styles from "./styles.module.css"

export const CryptoOverlay = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
console.log(CryptoOverlay)

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h4>Crypto Payment</h4>
        <div className={styles.paymentDetails}>
          
        </div>
        <button
          className={styles.paymentButton}
          onClick={onClose}>
        </button>
      </div>
    </div>
  );
};
