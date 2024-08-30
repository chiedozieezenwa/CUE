import { darkman } from "../../../assets";
import styles from "./styles.module.css";

export const TopFeatures = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["hero-content"]}>  
          <img src={darkman} alt="Traveler Image" />
        <div className={styles["hero-text"]}>
          <h2>We Help You Plan Your Trip Without Stress</h2>
          <div className={styles["stats-container"]}>
            <div className={styles.stat}>
              <h3>200+</h3>
              <p>Holiday Package</p>
            </div>
            <div className={styles["stat"]}>
              <h3>5K+</h3>
              <p>Happy Customers</p>
            </div>
            <div className={styles["stat"]}>
              <h3>2.5k+</h3>
              <p>Luxury Accommodations</p>
            </div>
            <div className={styles["stat"]}>
              <h3>500+</h3>
              <p>Security Hotline</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
