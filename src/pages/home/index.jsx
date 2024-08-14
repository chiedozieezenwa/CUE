import {
  heart,
  ogbudu,
  ogbunike,
  rating,
  ratingStars,
  yankari,
} from "../../assets";
import {
  Destination,
  Footer,
  Hero,
  Navbar,
  Testimonial,
} from "../../components";
import styles from "./styles.module.css";

const destinationLists = [
  {
    destinationImage: ogbudu,
    subject: "Agbokim Waterfalls",
    title: "Agbokim Waterfalls",
    description: "Cross River State",
    rating: rating,
    review: "4.0 (40 Reviews)",
    destinationImg: heart,
  },
  {
    destinationImage: ogbunike,
    subject: "Ogbunike Cave",
    title: "Ogbunike Cave",
    description: "Anambra State",
    rating: ratingStars,
    review: "5.0 (109 Reviews)",
    destinationImg: heart,
  },
  {
    destinationImage: yankari,
    subject: "Yankari Reserve",
    title: "Yankari Reserve",
    description: "Bauchi State",
    rating: rating,
    review: "5.0 (109 Reviews)",
    destinationImg: heart,
  },
];

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <div className={styles.explore}>
        <h1>Explore The Hidden Wonders Of Nigeria.</h1>
        <div className={styles.homeCards}>
          {destinationLists.map((destinationList, index) => {
            return (
              <Destination
                key={index}
                hasTag={true}
                destinationImage={destinationList.destinationImage}
                subject={destinationList.subject}
                title={destinationList.title}
                description={destinationList.description}
                rating={destinationList.rating}
                review={destinationList.review}
                destinationImg={destinationList.destinationImg}
              />
            );
          })}
        </div>
      </div>

      <Testimonial />
      <Footer />
    </div>
  );
};
