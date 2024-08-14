
import styles from "./styles.module.css";

export const Destination = ({ destinationImage, description, title, subject, rating, destinationImg, review, hasTag}) => {
  console.log({hasTag})
  return (
    <div className={styles.destination}>
      <div className={styles.destinationCards}>
        
        <div className={styles.cards}>
        <img src={destinationImage} alt="" className={hasTag?styles.destIMG:styles.destImage} /> 
           { hasTag &&<div className={styles.subject}>
                  <p>{subject}</p>
            </div>}
             <div className={hasTag?styles.cardDetails:styles.cardDetail2}>
             <p className={styles.destTitle}>{title}</p>
             <p className={styles.destLocatio}>{description}</p>
             <p ><img src={rating} alt="" className={styles.rating2}/> <span>{review}</span></p>
             <img src={destinationImg} alt="" className={styles.heart}/>
             </div>
        </div>
      </div>
    </div>
  );
};