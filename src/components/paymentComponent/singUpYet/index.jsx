import { signUpYet } from "../../../assets";
import { Button } from "../../button";
import styles from "./styles.module.css";

export const SignUpYet = ({ onProceedToPayment, onSignUp }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div>
        <img src={signUpYet} alt="" />
        <div className={styles.modalButton}>
          <Button content="Yes" onClick={onProceedToPayment} className={styles.modalBTN}/>
          <Button content="No" onClick={onSignUp} className={styles.modalBTN}/>
        </div>
        </div>
      </div>
    </div>
  );
};
