import { darkman, event, Framebottomleft, Frametopright, lock04, schedule } from "../../../assets"
import styles from "./features.module.css"

export const Keyfeatures = () => {
    return (
        <div>
        <div className={styles["hero-section"]}>
        <div className={styles["hero-content"]}>
            <div className={styles["hero-image"]}>
                <img src={darkman} alt="Traveler Image" />
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
                        <p>Security Hotline</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className={styles["features-section"]}>
        <div className={styles["features-content"]}>
            <div className={styles["features-text"]}>
                <h3>Key Features</h3>
                <h2>We Offer The Best Services</h2>
                <div className={styles["feature-list"]}>
                    <div className={styles["feature-item"]}>
                        <div className={styles["icon"]}>
                            <img src={schedule} alt="Schedule Icon" />
                        </div>
                        <div className={styles["feature-details"]}>
                            <h4>Schedule Your Trip</h4>
                            <p>Easily Plan And Manage Your Trip.</p>
                        </div>
                    </div>
                    <div className={styles["feature-item"]}>
                        <div className={styles["icon"]}>
                            <img src={event} alt="Events Update Icon" />
                        </div>
                        <div className={styles["feature-details"]}>
                            <h4>Events Update</h4>
                            <p>Get Events Updates And Personalized Recommendation.</p>
                        </div>
                    </div>
                    <div className="feature-item">
                        <div className="icon">
                            <img src={lock04} alt="Security Icon" />
                        </div>
                        <div className={styles["feature-details"]}>
                            <h4>Security</h4>
                            <p>Security Options To Make You Feel Safe.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles["features-images"]}>
                <img src={Framebottomleft} alt="Image 1" />
                <img src={Frametopright} alt="Image 2" />
            </div>
        </div>
    </div>
</div>
)
}
