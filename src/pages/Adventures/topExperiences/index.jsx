import { experience1, experience2, experience3, experienceheader } from '../../../assets';
import { Navbar } from '../../../components/landingPage';
import styles from './design.module.css'

export const TopExperiences = () => {
  return (
    <div>
    <Navbar />

<section className={styles["header-image"]}>
  <img src={experienceheader} alt="Top Experiences Header" />
</section>

<div className={styles["top-experience"]}>
  <h1>Top Experiences</h1>
</div>

<section className={styles["top-experiences"]}>
  <div className={styles["experience"]}>
    <div className={styles["experience-content"]}>
      <h2>Nike Art Centre, Lagos</h2>
      <p>
        This is one of Nigeria&apos;s hidden treasures. Located in Lekki, Lagos, the four-story building comprises<br></br> 
        an art gallery and textile museum featuring over 7,000 pieces and soon to have a coffee shop.<br></br> 
        The Centre has a diverse collection of art by a multitude of artists, celebrating Nigeria&apos;s talent, offering visitors 
        an insight into all cultures of Nigeria through the medium of art. It can take up to a full day to<br></br>
         discover all the Nike Art Centre has to offer.
      </p>
      <button className={styles["save-btn"]}>
      
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21L10.55 19.7C8.86667 18.1833 7.475 16.875 6.375 15.775C5.275 14.675 4.4 13.6917 3.75 12.825C3.1 11.9417 2.64167 11.1333 2.375 10.4C2.125 9.66666 2 8.91666 2 8.14999C2 6.58333 2.525 5.27499 3.575 4.22499C4.625 3.17499 5.93333 2.64999 7.5 2.64999C8.36667 2.64999 9.19167 2.83333 9.975 3.19999C10.7583 3.56666 11.4333 4.08333 12 4.74999C12.5667 4.08333 13.2417 3.56666 14.025 3.19999C14.8083 2.83333 15.6333 2.64999 16.5 2.64999C18.0667 2.64999 19.375 3.17499 20.425 4.22499C21.475 5.27499 22 6.58333 22 8.14999C22 8.91666 21.8667 9.66666 21.6 10.4C21.35 11.1333 20.9 11.9417 20.25 12.825C19.6 13.6917 18.725 14.675 17.625 15.775C16.525 16.875 15.1333 18.1833 13.45 19.7L12 21ZM12 18.3C13.6 16.8667 14.9167 15.6417 15.95 14.625C16.9833 13.5917 17.8 12.7 18.4 11.95C19 11.1833 19.4167 10.5083 19.65 9.92499C19.8833 9.325 20 8.73333 20 8.14999C20 7.14999 19.6667 6.31666 19 5.65C18.3333 4.98333 17.5 4.64999 16.5 4.64999C15.7167 4.64999 14.9917 4.87499 14.325 5.32499C13.6583 5.75833 13.2 6.31666 12.95 6.99999H11.05C10.8 6.31666 10.3417 5.75833 9.675 5.32499C9.00833 4.87499 8.28333 4.64999 7.5 4.64999C6.5 4.64999 5.66667 4.98333 5 5.65C4.33333 6.31666 4 7.14999 4 8.14999C4 8.73333 4.11667 9.325 4.35 9.92499C4.58333 10.5083 5 11.1833 5.6 11.95C6.2 12.7 7.01667 13.5917 8.05 14.625C9.08333 15.6417 10.4 16.8667 12 18.3Z" fill="#FEFEFE"/>
      </svg>

      Save
      </button>
    </div>
    <img src={experience1} alt="Nike Art Centre, Lagos" />
  </div>
  <div className={styles["experience"]}>
    <div className={styles["experience-content"]}>
      <h2>Bature Brewery, Abuja</h2>
      <p>First craft brewery in West Africa; we are inspired by the spices, flavours and hustle of Nigeria.
         Come down and try the freshest beers in the country and some great banter.
         Contact us for what&apos;s on at the brewery or for organising a brewery tour.</p>
      <button className={styles["save-btn"]}>
     
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21L10.55 19.7C8.86667 18.1833 7.475 16.875 6.375 15.775C5.275 14.675 4.4 13.6917 3.75 12.825C3.1 11.9417 2.64167 11.1333 2.375 10.4C2.125 9.66666 2 8.91666 2 8.14999C2 6.58333 2.525 5.27499 3.575 4.22499C4.625 3.17499 5.93333 2.64999 7.5 2.64999C8.36667 2.64999 9.19167 2.83333 9.975 3.19999C10.7583 3.56666 11.4333 4.08333 12 4.74999C12.5667 4.08333 13.2417 3.56666 14.025 3.19999C14.8083 2.83333 15.6333 2.64999 16.5 2.64999C18.0667 2.64999 19.375 3.17499 20.425 4.22499C21.475 5.27499 22 6.58333 22 8.14999C22 8.91666 21.8667 9.66666 21.6 10.4C21.35 11.1333 20.9 11.9417 20.25 12.825C19.6 13.6917 18.725 14.675 17.625 15.775C16.525 16.875 15.1333 18.1833 13.45 19.7L12 21ZM12 18.3C13.6 16.8667 14.9167 15.6417 15.95 14.625C16.9833 13.5917 17.8 12.7 18.4 11.95C19 11.1833 19.4167 10.5083 19.65 9.92499C19.8833 9.325 20 8.73333 20 8.14999C20 7.14999 19.6667 6.31666 19 5.65C18.3333 4.98333 17.5 4.64999 16.5 4.64999C15.7167 4.64999 14.9917 4.87499 14.325 5.32499C13.6583 5.75833 13.2 6.31666 12.95 6.99999H11.05C10.8 6.31666 10.3417 5.75833 9.675 5.32499C9.00833 4.87499 8.28333 4.64999 7.5 4.64999C6.5 4.64999 5.66667 4.98333 5 5.65C4.33333 6.31666 4 7.14999 4 8.14999C4 8.73333 4.11667 9.325 4.35 9.92499C4.58333 10.5083 5 11.1833 5.6 11.95C6.2 12.7 7.01667 13.5917 8.05 14.625C9.08333 15.6417 10.4 16.8667 12 18.3Z" fill="#FEFEFE"/>
        </svg>

        Save
      </button>
    </div>
    <img src={experience2} alt="Bature Brewery, Abuja" />
  </div>
  <div className={styles["experience"]}>
    <div className={styles["experience-content"]}>
      <h2>Aju Festival, Enugu</h2>
      <p>In Ugbo land, Agwu, Enugu State, the Aju festival is a highly anticipated event that<br></br>
       takes place every three years. This significant rite of passage marks the transition of young males
        to manhood, honoring the Ugbo spirit and uniting sons and daughters from far and near.</p>
      <button className={styles["save-btn"]}>
      
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21L10.55 19.7C8.86667 18.1833 7.475 16.875 6.375 15.775C5.275 14.675 4.4 13.6917 3.75 12.825C3.1 11.9417 2.64167 11.1333 2.375 10.4C2.125 9.66666 2 8.91666 2 8.14999C2 6.58333 2.525 5.27499 3.575 4.22499C4.625 3.17499 5.93333 2.64999 7.5 2.64999C8.36667 2.64999 9.19167 2.83333 9.975 3.19999C10.7583 3.56666 11.4333 4.08333 12 4.74999C12.5667 4.08333 13.2417 3.56666 14.025 3.19999C14.8083 2.83333 15.6333 2.64999 16.5 2.64999C18.0667 2.64999 19.375 3.17499 20.425 4.22499C21.475 5.27499 22 6.58333 22 8.14999C22 8.91666 21.8667 9.66666 21.6 10.4C21.35 11.1333 20.9 11.9417 20.25 12.825C19.6 13.6917 18.725 14.675 17.625 15.775C16.525 16.875 15.1333 18.1833 13.45 19.7L12 21ZM12 18.3C13.6 16.8667 14.9167 15.6417 15.95 14.625C16.9833 13.5917 17.8 12.7 18.4 11.95C19 11.1833 19.4167 10.5083 19.65 9.92499C19.8833 9.325 20 8.73333 20 8.14999C20 7.14999 19.6667 6.31666 19 5.65C18.3333 4.98333 17.5 4.64999 16.5 4.64999C15.7167 4.64999 14.9917 4.87499 14.325 5.32499C13.6583 5.75833 13.2 6.31666 12.95 6.99999H11.05C10.8 6.31666 10.3417 5.75833 9.675 5.32499C9.00833 4.87499 8.28333 4.64999 7.5 4.64999C6.5 4.64999 5.66667 4.98333 5 5.65C4.33333 6.31666 4 7.14999 4 8.14999C4 8.73333 4.11667 9.325 4.35 9.92499C4.58333 10.5083 5 11.1833 5.6 11.95C6.2 12.7 7.01667 13.5917 8.05 14.625C9.08333 15.6417 10.4 16.8667 12 18.3Z" fill="#FEFEFE"/>
      </svg>
      Save
      </button>
    </div>
    <img src={experience3} alt="Aju Festival, Enugu" />
  </div>
</section>
</div>
);
}