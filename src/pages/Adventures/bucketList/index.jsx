import { bucketlist1, bucketlist2, bucketlist3, bucketlistheader } from '../../../assets';
import { Navbar } from '../../../components/landingPage';
import styles from './styles.module.css'


export const BucketList = () => {
  return (
    <div>
        <Navbar />

    <section className={styles["bucketheader-image"]}>
      <img src={bucketlistheader} alt="Bucket List Header" />
    </section>

    <div className={styles["bucketlist"]}>
      <h1>Bucket List</h1>
    </div>

    <section className={styles["bucket-list"]}>
      <div className={styles["bucket"]}>
        <div className={styles["bucket-content"]}>
          <h2>Osun-Oshogbo Sacred Groove, Osun</h2>
          <p>
          The dense forest of the Osun Sacred Grove, on the outskirts of the city of Osogbo, is one of the last remnants of primary high forest in southern Nigeria.
           Regarded as the abode of the goddess of fertility Osun, one of the pantheon of Yoruba gods, the landscape of the grove and its meandering river is dotted
          with sanctuaries and shrines, sculptures and art works in honour of Osun and other deities.
          </p>
          <button className={styles["bucketsave-btn"]}>         
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21L10.55 19.7C8.86667 18.1833 7.475 16.875 6.375 15.775C5.275 14.675 4.4 13.6917 3.75 12.825C3.1 11.9417 2.64167 11.1333 2.375 10.4C2.125 9.66666 2 8.91666 2 8.14999C2 6.58333 2.525 5.27499 3.575 4.22499C4.625 3.17499 5.93333 2.64999 7.5 2.64999C8.36667 2.64999 9.19167 2.83333 9.975 3.19999C10.7583 3.56666 11.4333 4.08333 12 4.74999C12.5667 4.08333 13.2417 3.56666 14.025 3.19999C14.8083 2.83333 15.6333 2.64999 16.5 2.64999C18.0667 2.64999 19.375 3.17499 20.425 4.22499C21.475 5.27499 22 6.58333 22 8.14999C22 8.91666 21.8667 9.66666 21.6 10.4C21.35 11.1333 20.9 11.9417 20.25 12.825C19.6 13.6917 18.725 14.675 17.625 15.775C16.525 16.875 15.1333 18.1833 13.45 19.7L12 21ZM12 18.3C13.6 16.8667 14.9167 15.6417 15.95 14.625C16.9833 13.5917 17.8 12.7 18.4 11.95C19 11.1833 19.4167 10.5083 19.65 9.92499C19.8833 9.325 20 8.73333 20 8.14999C20 7.14999 19.6667 6.31666 19 5.65C18.3333 4.98333 17.5 4.64999 16.5 4.64999C15.7167 4.64999 14.9917 4.87499 14.325 5.32499C13.6583 5.75833 13.2 6.31666 12.95 6.99999H11.05C10.8 6.31666 10.3417 5.75833 9.675 5.32499C9.00833 4.87499 8.28333 4.64999 7.5 4.64999C6.5 4.64999 5.66667 4.98333 5 5.65C4.33333 6.31666 4 7.14999 4 8.14999C4 8.73333 4.11667 9.325 4.35 9.92499C4.58333 10.5083 5 11.1833 5.6 11.95C6.2 12.7 7.01667 13.5917 8.05 14.625C9.08333 15.6417 10.4 16.8667 12 18.3Z" fill="#FEFEFE"/>
          </svg>

          Save
          </button>
        </div>
        <img src={bucketlist1} alt="Sacred groover Osun" />
      </div>
      <div className={styles["bucket"]}>
        <div className={styles["bucket-content"]}>
          <h2>Kajuru Castle, Kaduna</h2>
          <p>Kajuru Castle is a private destination. It admits visitors one at a time. You become the master when you&apos;re in the building .There is a five bedroom building ,
             a dragon tower , a swimming pool , the master&apos;s quarters and many more. The medieval Structure has won for itself the best tourist attraction in Nigeria.
             It has a rooftop room for couples , where they can do anything with just the sky being their cover . Lol.If you&apos;re a party rocker ,
             it can hold up to 40 persons at a go , you could party cook, eat ,dance, wine, chill and sleep.You want to run away from stress.</p>
          <button className={styles["bucketsave-btn"]}>
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21L10.55 19.7C8.86667 18.1833 7.475 16.875 6.375 15.775C5.275 14.675 4.4 13.6917 3.75 12.825C3.1 11.9417 2.64167 11.1333 2.375 10.4C2.125 9.66666 2 8.91666 2 8.14999C2 6.58333 2.525 5.27499 3.575 4.22499C4.625 3.17499 5.93333 2.64999 7.5 2.64999C8.36667 2.64999 9.19167 2.83333 9.975 3.19999C10.7583 3.56666 11.4333 4.08333 12 4.74999C12.5667 4.08333 13.2417 3.56666 14.025 3.19999C14.8083 2.83333 15.6333 2.64999 16.5 2.64999C18.0667 2.64999 19.375 3.17499 20.425 4.22499C21.475 5.27499 22 6.58333 22 8.14999C22 8.91666 21.8667 9.66666 21.6 10.4C21.35 11.1333 20.9 11.9417 20.25 12.825C19.6 13.6917 18.725 14.675 17.625 15.775C16.525 16.875 15.1333 18.1833 13.45 19.7L12 21ZM12 18.3C13.6 16.8667 14.9167 15.6417 15.95 14.625C16.9833 13.5917 17.8 12.7 18.4 11.95C19 11.1833 19.4167 10.5083 19.65 9.92499C19.8833 9.325 20 8.73333 20 8.14999C20 7.14999 19.6667 6.31666 19 5.65C18.3333 4.98333 17.5 4.64999 16.5 4.64999C15.7167 4.64999 14.9917 4.87499 14.325 5.32499C13.6583 5.75833 13.2 6.31666 12.95 6.99999H11.05C10.8 6.31666 10.3417 5.75833 9.675 5.32499C9.00833 4.87499 8.28333 4.64999 7.5 4.64999C6.5 4.64999 5.66667 4.98333 5 5.65C4.33333 6.31666 4 7.14999 4 8.14999C4 8.73333 4.11667 9.325 4.35 9.92499C4.58333 10.5083 5 11.1833 5.6 11.95C6.2 12.7 7.01667 13.5917 8.05 14.625C9.08333 15.6417 10.4 16.8667 12 18.3Z" fill="#FEFEFE"/>
          </svg>
          Save
          </button>
        </div>
        <img src={bucketlist2} alt="Kajuru Kaduna" />
      </div>
      <div className={styles["bucket"]}>
        <div className={styles["bucket-content"]}>
          <h2>Royal Palace Of Oba Of Benin, Benin</h2>
          <p>The oba&apos;s vast palace complex is the administrative and religious heart of the Benin Kingdom. It has stood in the same location in Benin City for at least 700 years, though
             its size has expanded and contracted over time. As the home of a long succession of divine rulers, it is a sacred place. From here the oba oversees the kingdom&apos;s affairs
             with the assistance of chiefs, religious specialists, court officials, and attendants.</p>
          <button className={styles["bucketsave-btn"]}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21L10.55 19.7C8.86667 18.1833 7.475 16.875 6.375 15.775C5.275 14.675 4.4 13.6917 3.75 12.825C3.1 11.9417 2.64167 11.1333 2.375 10.4C2.125 9.66666 2 8.91666 2 8.14999C2 6.58333 2.525 5.27499 3.575 4.22499C4.625 3.17499 5.93333 2.64999 7.5 2.64999C8.36667 2.64999 9.19167 2.83333 9.975 3.19999C10.7583 3.56666 11.4333 4.08333 12 4.74999C12.5667 4.08333 13.2417 3.56666 14.025 3.19999C14.8083 2.83333 15.6333 2.64999 16.5 2.64999C18.0667 2.64999 19.375 3.17499 20.425 4.22499C21.475 5.27499 22 6.58333 22 8.14999C22 8.91666 21.8667 9.66666 21.6 10.4C21.35 11.1333 20.9 11.9417 20.25 12.825C19.6 13.6917 18.725 14.675 17.625 15.775C16.525 16.875 15.1333 18.1833 13.45 19.7L12 21ZM12 18.3C13.6 16.8667 14.9167 15.6417 15.95 14.625C16.9833 13.5917 17.8 12.7 18.4 11.95C19 11.1833 19.4167 10.5083 19.65 9.92499C19.8833 9.325 20 8.73333 20 8.14999C20 7.14999 19.6667 6.31666 19 5.65C18.3333 4.98333 17.5 4.64999 16.5 4.64999C15.7167 4.64999 14.9917 4.87499 14.325 5.32499C13.6583 5.75833 13.2 6.31666 12.95 6.99999H11.05C10.8 6.31666 10.3417 5.75833 9.675 5.32499C9.00833 4.87499 8.28333 4.64999 7.5 4.64999C6.5 4.64999 5.66667 4.98333 5 5.65C4.33333 6.31666 4 7.14999 4 8.14999C4 8.73333 4.11667 9.325 4.35 9.92499C4.58333 10.5083 5 11.1833 5.6 11.95C6.2 12.7 7.01667 13.5917 8.05 14.625C9.08333 15.6417 10.4 16.8667 12 18.3Z" fill="#FEFEFE"/>
            </svg>
            Save
          </button>
        </div>
        <img src={bucketlist3} alt="Oba of benin" />
      </div>
    </section>
  </div>
);
}