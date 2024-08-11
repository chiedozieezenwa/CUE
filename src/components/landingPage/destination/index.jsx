
import styles from "./styles.module.css";

export const Destination = (destinationList) => {
  return (
    <div className={styles.destination}>
      <div className={styles.destinationCards}>
        
        <div className={styles.cards}>
        <img src={destinationList.destinationImage} alt="" className={styles.destIMG} /> 
            <div className={styles.subject}>
                  <p>{destinationList.subject}</p>
            </div>
             <div className={styles.cardDetails}>
             <p className={styles.destTitle}>{destinationList.title}</p>
             <p className={styles.destLocatio}>{destinationList.description}</p>
             <p ><img src={destinationList.rating} alt="" className={styles.rating2}/> <span>{destinationList.review}</span></p>
             <img src={destinationList.destinationImg} alt="" className={styles.heart}/>
             </div>
        </div>
      </div>
    </div>
  );
};

{/* <div className={styles.ratingReview}>
             <img src={destinationList.rating} alt="" className={styles.rating}/>
             <p> {destinationList.review}</p>
             </div> */}

            //  className={styles.rating}