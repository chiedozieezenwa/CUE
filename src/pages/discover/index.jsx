import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  heart,
  hotelIcon,
  // image,
  kambari,
  leading,
  ogbudu,
  ogbunike,
  plus,
  rating,
  ratingStars,
  rentalIcon,
  river,
  sacred,
  searchIcon,
  securityIcon,
  todoIcon,
  yankari,
  zuma,
} from "../../assets";
import { Button, Footer, Navbar, Destination } from "../../components";
import styles from "./styles.module.css";

const DestinationCarousel = ({ destinationLists }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3.1,
    slidesToScroll: 3,
    swipeToSlide: true,
    touchMove: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.exploreDiscover}>
      <h1>Explore Adventures</h1>
      <Slider {...settings} className={styles.discoveryHomeCards}>
        {destinationLists.map((destinationList, index) => (
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
        ))}
      </Slider>
    </div>
  );
};

export const Discover = () => {
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
    {
      destinationImage: sacred,
      subject: "Sacred Osun Grove",
      title: "Sacred Osun Grove",
      description: "Osun State",
      rating: rating,
      review: "3.5 (39 Reviews)",
      destinationImg: heart,
    },
    {
      destinationImage: river,
      subject: "River Ethiope",
      title: "River Ethiope",
      description: "Delta State",
      rating: rating,
      review: "5.0 (89 Reviews)",
      destinationImg: heart,
    },
    {
      destinationImage: zuma,
      subject: "Zuma Resort",
      title: "Zuma Rock And Resort",
      description: "Abuja",
      rating: rating,
      review: "5.0 (209 Reviews)",
      destinationImg: heart,
    },
    {
      destinationImage: kambari,
      subject: "Kambari Reserve",
      title: "Kambari Reserve",
      description: "Taraba State",
      rating: rating,
      review: "3.5 (52 Reviews)",
      destinationImg: heart,
    },
  ];

  return (
    <div>
      <Navbar />

      <section className={styles.Section}>
        <div className={styles.heroSection}>
          <h2>Where To?</h2>
          <ul>
            <li>
              <img
                src={searchIcon}
                alt="Search Icon"
                className={styles.Sectionimage}
              />
              Search All
            </li>
            <li>
              <img
                src={hotelIcon}
                alt="Hotel Icon"
                className={styles.Sectionimage}
              />
              Hotels
            </li>
            <li>
              <img
                src={todoIcon}
                alt="Things To Do Icon"
                className={styles.Sectionimage}
              />
              Things To Do
            </li>
            <li>
              <img
                src={rentalIcon}
                alt="Vacation Rentals Icon"
                className={styles.Sectionimage}
              />
              Vacation Rentals
            </li>
            <li>
              <img
                src={securityIcon}
                alt="Security Icon"
                className={styles.Sectionimage}
              />
              Security
            </li>
          </ul>

          <div className={styles.container}>
            <div className={styles.inputContainer}>
              <input
                type="text"
                placeholder="Places to go, things to do, hotels..."
                className={styles.input}
              />
              <Button content="Search" className={styles.button} link="/" />
            </div>
          </div>

          {/* <div className={styles.eventsFrame}>
             <div className={styles.eventFrame}>
              <div className={styles.eventinfo}>
                <Button
                  content="Coming Soon"
                  className={styles.Eventbutton}
                  link="/trip"
                />
                <h4>Live Events Near You</h4>
                <p>
                  Find events near you easily to spice up your travel
                  experience.
                </p>
              </div>
              <img
                src={image}
                alt="Events Image"
                className={styles.eventsBTN}
              />
            </div> 
          </div> */}
        </div>
      </section>

      <section className={styles.tripSection}>
        <div className={styles.guideSection}>
          <div className={styles.guide}>
            <div>
              <p id={styles.guide}>Your Trips</p>
              <p id={styles.guide1}>You don’t have any trip planned yet.</p>
            </div>
            <Button
              img={leading}
              className={styles.guideBTN}
              content="Plan new trip"
              link="/trip"
            />
          </div>
          {/* <div className={styles.guide}>
            <div>
              <p id={styles.guide}>Your Guides</p>
              <p id={styles.guide1}>You don’t have any guides yet.</p>
            </div>
            <Button
              img={leading}
              className={styles.guideBTN}
              content="Create new guide"
            />
          </div> */}
        </div>
      </section>

      <DestinationCarousel destinationLists={destinationLists} />

      <section className={styles.explore}>
        <div className={styles.exploreLIST}>
          <h1>Explore Adventures</h1>
          <div className={styles.LIST}>
            <div className={styles.adventure1}>
              <p>Top Experiences</p>
            </div>
            <div className={styles.adventure2}>
              <p>Top Attractions</p>
            </div>
            <div className={styles.adventure3}>
              <p>Bucket List</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.tripPlan}>
        <div className={styles.tripPlan1}>
          <div>
            <p id={styles.trips}>Recently Viewed and Upcoming Trips</p>
            <p id={styles.trips1}>
              You haven’t created anything yet. <span>Plan a new trip.</span>
            </p>
          </div>
          <Button
            img={plus}
            className={styles.tripsBTN}
            content="Plan new trip"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};
