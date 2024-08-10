import { lady, lady1, man, stars } from "../../../assets";
import styles from "./styles.module.css";

export const Testimonial = () => {
  return (
    <div id={styles.testimonial}>
      <div className={styles.Testimonial} id={styles.TestCards}>
        <p id={styles.testicol}>Testimonials</p>
        <h2>Trust Our Clients</h2>

        <div className={styles.TestCard}>
          <div className={styles.TestCards}>
            <div>
              <img src={lady} alt="" className={styles.images} />
            </div>
            <div>
              <p className={styles.content}>
                I love Cue, this is the best place to plan your trip and find
                your dream holiday home.
              </p>
              <img src={stars} alt="" className={styles.stars} />
              <p className={styles.testiName}>Claire Alfred</p>
            </div>
          </div>
          <div className={styles.TestCards}>
            <div>
              <img src={man} alt="" className={styles.images} />
            </div>
            <div>
              <p className={styles.content}>
                Their security feature is top notch, i really liked it
              </p>
              <img src={stars} alt="" className={styles.stars} />
              <p className={styles.testiName}>Samuel Uche</p>
            </div>
          </div>
          <div className={styles.TestCards}>
            <div>
              <img src={lady1} alt="" className={styles.images} />
            </div>
            <div>
              <p className={styles.content}>
                As a family woman, this app helped me to plan all my trips on
                one go without any stress and all in the comfort of one app.
              </p>
              <div className={styles.nameStar}>
                <img src={stars} alt="" className={styles.stars} />
                <p className={styles.testiName}>Claire Alfred</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// className={styles.Testimonial}
//
