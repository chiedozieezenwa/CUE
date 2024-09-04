import { signUpYet } from "../../../assets";
import { Button } from "../../button";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

export const SignUpYet = ({ onSignUp }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/signUp"); 
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div>
          <img src={signUpYet} alt="" />
          <div className={styles.modalButton}>
            <Button 
              content="Log in" 
              onClick={handleLoginClick} 
              className={styles.modalBTN}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

