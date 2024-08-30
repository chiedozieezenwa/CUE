import {
  Footer,
  Hero,
  Keyfeatures,
  Navbar,
  // Proplan,
  Testimonial,
  TopFeatures,
} from "../../components";
import { Explore } from "../../components/landingPage/explore";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
<<<<<<< HEAD

      {/* <Proplan /> */}
      
      <div className={styles.explore}>
        <div className={styles.explore2}>
        <h1>Explore The Hidden Wonders Of Nigeria.</h1>
        <Button
        content="See all"
        className={styles.exploreBTN}
        />
        </div>
        
        <div className={styles.homeCards}>
          {destinations.length > 0 ? (
            destinations
              .slice(0, 3)
              .map((destination, index) => (
                <Destination
                  key={index}
                  hasTag={true}
                  destinationImage={destination.image_url}
                  subject={destination.name}
                  name={destination.name}
                  title={destination.title}
                  description={destination.state}
                  rating={destination.ratingS}
                  review={destination.review}
                  destinationImg={destination.destinationImg}
                />
              ))
          ) : (
            <p>No destinations to display</p>
          )}
        </div>
      </div>
=======
      <Proplan />
      <Explore />
      <TopFeatures />
>>>>>>> 4a03df67507ef78fdff5e9e602227d0ee170fa49
      <Keyfeatures />
      <Testimonial />
      <Footer />
    </div>
  );
};
