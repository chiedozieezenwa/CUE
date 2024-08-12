import { apple, google, logo } from "../../../assets";
import styles from "./styles.module.css";

export const Footer = () => {
  return (
    <footer>
      {/* <div className={styles.aboutUS}>
        <h3>
          {" "}
          <img src={line1} alt="" className={styles.line1} /><span> ABOUT US </span><img src={line2} alt="" className={styles.line1}/>
        </h3>
      </div> */}

      <div className={styles.footterDetails}>
        <div className={styles.footerCue}>
          <img src={logo} alt="" />
          <p id={styles.plan}>
            Let us plan a memorable travel experience for you in the comfort of
            one App. Book tours and get personalized tips. Download Cue now for
            an unforgettable journey!
          </p>
          <div>
            <img src={apple} alt="apple" className={styles.cueIMG}/>
            <img src={google} alt="google" className={styles.cueIMG}  id={styles.cueIMG}/>
          </div>
          <p id={styles.reserved}>© 2024 Cue. All rights reserved.</p>
        </div>

        <div className={styles.footterDetailsList}>
          <div>
            <h4>About</h4>
            <p>How To Book</p>
            <p>Contact Us</p>
            <p>Help Center</p>
          </div>
          <div>
            <h4>Products</h4>
            <p>Hotels</p>
            <p>Airbnb</p>
            <p>Apartments</p>
            <p>Security</p>
            <p>Rentals</p>
          </div>
          <div>
            <h4>Other</h4>
            <p>Blog</p>
            <p>FAQ</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
