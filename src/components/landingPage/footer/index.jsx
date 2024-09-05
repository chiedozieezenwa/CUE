import { apple, google, logoMobile } from "../../../assets";
import styles from "./styles.module.css";
import {motion} from "framer-motion"

const footerVariants = {
  hide: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      stiffness: 200,
    },
  },
};

export const Footer = () => {
  return (
    <footer className={styles.footer}>

      <motion.div className={styles.footterDetails}variants={footerVariants}
          initial="hide"
          whileInView="show"
          exit="hide">
        <div className={styles.footerCue}>
          <img src={logoMobile} alt="" />
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
      </motion.div>
    </footer>
  );
};
