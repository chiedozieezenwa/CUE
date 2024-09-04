// import { darkman } from "../../../assets";
import { features } from "../../../assets/video";
import styles from "./styles.module.css";

export const TopFeatures = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["hero-content"]}>
        {/* <img src={darkman} alt="Traveler Image" /> */}
        <div className={styles["hero-video"]}>
        <video autoPlay loop muted className={styles.video} >
          <source src={features} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
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
              <p>Luxury Rentals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
