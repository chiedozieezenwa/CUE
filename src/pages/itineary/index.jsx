import {
  AIlogo,
  amico,
  art,
  bar,
  car,
  component,
  component2,
  heart,
  lodge,
  marker01,
  outdoor,
  plus,
  ratingStars,
  time,
} from "../../assets";
import { Button, Destination, Navbar } from "../../components";
import styles from "./styles.module.css";

export const Itineary = () => {
  const destinationLists = [
    {
      destinationImage: outdoor,
      title: "Breeze Lounge",
      description: "Enugu State",
      rating: ratingStars,
      review: "5.0 (210 Reviews)",
      destinationImg: heart,
    },
    {
      destinationImage: art,
      title: "Center For Memories",
      description: "Enugu State",
      rating: ratingStars,
      review: "5.0 (109 Reviews)",
      destinationImg: heart,
    },
    {
      destinationImage: bar,
      title: "Stanford Laze ",
      description: "Enugu State",
      rating: ratingStars,
      review: "5.0 (302 Reviews)",
      destinationImg: heart,
    },
  ];

  return (
    <>
      <Navbar />

      <main className={styles.ItinearyHome}>
        <section className={styles.itinearyInfo}>
          <ul id={styles.itinearyInfos}>
            <li className={styles.itinearyInfos}>
              <p>
                <img src={AIlogo} alt="AI Assistant" /> AI Assistant
              </p>
            </li>
            <li className={styles.itinearyInfos}>
              <p>
                <img src={component} alt="Notes" /> Notes
              </p>
            </li>
            <li className={styles.itinearyInfos}>
              <p>
                <img src={component2} alt="Places to visit" /> Places to visit
              </p>
            </li>
            <li className={styles.itinearyInfos}>
              <p>
                <img src={marker01} alt="Itinerary" /> Itinerary
              </p>
            </li>
          </ul>
        </section>

        <div>
          <article className={styles.enuguCity}>
            <header className={styles.coalCity}>
              <h2>Trip to Enugu, Nigeria</h2>
            </header>
          </article>
          <h1>Explore.</h1>
          <section className={styles.itinearyExplore}>
            <div className={styles.itinearyCards}>
              {destinationLists.map((destinationList, index) => (
                <Destination
                  key={index}
                  hasTag={false}
                  destinationImage={destinationList.destinationImage}
                  title={destinationList.title}
                  description={destinationList.description}
                  rating={destinationList.rating}
                  review={destinationList.review}
                  destinationImg={destinationList.destinationImg}
                />
              ))}
            </div>
          </section>

          <section className={styles.rentals}>
            <h3>Reservations and Rentals</h3>
            <div className={styles.rentalsCards}>
              <div>
                <p>
                  {" "}
                  <img src={lodge} alt="" /> Lodging
                </p>
              </div>
              <div>
                <p>
                  {" "}
                  <img src={car} alt="" /> Vacation Rentals
                </p>
              </div>
              <div>
                <p>
                  {" "}
                  <img src={time} alt="" /> Security
                </p>
              </div>
            </div>
          </section>

          <section className={styles.reservation}>
            <h4>Itinerary</h4>
            <time dateTime="2024-08-30">Friday, August 30th</time>
          </section>

          <section className={styles.ItinearyNote}>
            <h4>Note</h4>
            <div>
              <input type="text" placeholder="Write anything here" />
            </div>
          </section>

          <section className={styles.reservationVisit}>
            <h4>Places To Visit</h4>
            <div>
              <input type="text" placeholder="Add a place e.g restaurant" />
            </div>
          </section>

          <section>
            <Button content="Add new list" img={plus} className={styles.BTN} />
            <div className={styles.lodging}>
              <div className={styles.lodgingDetails}>
                <p id={styles.lodge}>Need a place to stay?</p>
                <p id={styles.hotels}>
                  Check out hotels and apartments in the city
                </p>
                <Button content="Book Lodging" className={styles.lodgingBTN} />
              </div>
              <img src={amico} alt="Lodging Image" />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};
