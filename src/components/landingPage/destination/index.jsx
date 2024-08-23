import Rating from "../rating";
import styles from "./styles.module.css";

export const Destination = ({ destinationImage, description, title, subject, rating, review, hasTag, name}) => {
  console.log({hasTag})
  return (
    <div className={styles.destination}>
      <div className={styles.destinationCards}>
        <div className={styles.cards}>
          <img
            src={destinationImage}
            alt=""
            className={hasTag ? styles.destIMG:styles.destImage}
          />
          {hasTag && (
            <div className={ styles.subject}>
              <p>{subject}</p>
            </div>
          )}
          <div className={hasTag ? styles.cardDetails : styles.cardDetail2}>
            <p className={styles.destTitle}>{name}</p>
            <p className={styles.destTitle}>{title}</p>
            <p className={styles.destLocation}>{description}</p>
            <p className={styles.rating2}>
            <Rating rating={rating} /><span className={styles.ratings2}>{review}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};