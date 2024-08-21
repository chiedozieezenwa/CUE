import design from "./design.module.css";
import {Button} from "../../../components"
// import DestinationCarousel from "./DestinationCarousel";
import {
  heart,
  leading,
  ogbudu,
  ogbunike,
  rating,
  ratingStars,
  river,
  sacred,
  yankari,
  zuma,
  kambari,
  plus,
} from "../../../assets";
import { DestinationCarousel } from "../carousel";
import { SearchBar } from "../../../components/searchbar";

export const SearchAll = () => {
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
    <div className={design.container}>
            <div className={design.inputContainer}>
              {/* <input
                type="text"
                placeholder="Places to go, things to do, hotels..."
                className={design.input}
              />
              <Button content="Search" className={design.button} link="/" /> */}
              <SearchBar 
                placeholder="Places to go, things to do, hotels..."
              />

            </div>

          <div className={design.guide}>
            <div>
              <p id={design.guide}>Your Trips</p>
              <p id={design.guide1}>You don’t have any trip planned yet.</p>
            </div>
            <Button
              img={leading}
              className={design.guideBTN}
              content="Plan new trip"
              link="/trip"
            />
          </div>

      <DestinationCarousel destinationLists={destinationLists} />

      <section className={design.explore}>
        <div className={design.exploreLIST}>
          <h1>Explore Adventures</h1>
          <div className={design.LIST}>
            <div className={design.adventure1}>
              <p>Top Experiences</p>
            </div>
            <div className={design.adventure2}>
              <p>Top Attractions</p>
            </div>
            <div className={design.adventure3}>
              <p>Bucket List</p>
            </div>
          </div>
        </div>
      </section>

      <section className={design.tripPlan}>
        <div className={design.tripPlan1}>
          <div>
            <p id={design.trips}>Recently Viewed and Upcoming Trips</p>
            <p id={design.trips1}>
              You haven’t created anything yet. <span>Plan a new trip.</span>
            </p>
          </div>
          <Button
            img={plus}
            className={design.tripsBTN}
            content="Plan new trip"
          />
          
        </div>
      </section>
      {/* <Footer/> */}
    </div>
  );
};

export default SearchAll;
