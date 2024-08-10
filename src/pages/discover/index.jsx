import {
  hotelIcon,
  image,
  leading,
  rentalIcon,
  searchIcon,
  securityIcon,
  todoIcon,
} from "../../assets";
import { Button, Footer, Navbar } from "../../components";
import styles from "./styles.module.css";

export const Discover = () => {
  return (
    <div>
      <Navbar />

      <div className={styles.Section}>
        <div className={styles.heroSection}>
          <div>
            <h2>Where To?</h2>
          </div>
          <ul>
            <li>
              {" "}
              <img
                src={searchIcon}
                alt=""
                className={styles.Sectionimage}
              />{" "}
              Search All
            </li>
            <li>
              {" "}
              <img
                src={hotelIcon}
                alt=""
                className={styles.Sectionimage}
              />{" "}
              Hotels
            </li>
            <li>
              {" "}
              <img src={todoIcon} alt="" className={styles.Sectionimage} />
              Things To Do
            </li>
            <li>
              {" "}
              <img src={rentalIcon} alt="" className={styles.Sectionimage} />
              Vacation Rentals
            </li>
            <li>
              {" "}
              <img src={securityIcon} alt="" className={styles.Sectionimage} />
              Security
            </li>
          </ul>

          <div className={styles.container}>
            <div className={styles.inputContainer}>
              <input
                type="text"
                // value={query}
                // onChange={handleInputChange}
                placeholder="Places to go, things to do, hotels..."
                style={styles.input}
              />
              <Button
                // onClick={handleSearch}
                content="search"
                className={styles.button}
                link="/"
              />
            </div>
          </div>

          <div className={styles.eventsFrame}>
            <div className={styles.eventFrame}>
              <div className={styles.eventinfo}>
                <Button
                  content="Coming Soon"
                  className={styles.Eventbutton}
                  link="/"
                />
                <h4>Live Events Near You</h4>
                <p>
                  Find events near you easily to spice up your travel
                  experience.
                </p>
              </div>
              <img src={image} alt="" className={styles.eventsBTN} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.tripSection}>
        <div className={styles.guideSection}>
          <div className={styles.guide}>
            <div>
              <p id={styles.guide}>Your trips</p>
              <p id={styles.guide1}>You don’t have any trip planned yet.</p>
            </div>
            <Button
              img={leading}
              className={styles.guideBTN}
              content="Plan new trip"
            />
          </div>
          <div className={styles.guide}>
            <div>
              <p id={styles.guide}>Your Guides</p>
              <p id={styles.guide1}>You don’t have any guides yet.</p>
            </div>
            <Button
              img={leading}
              className={styles.guideBTN}
              content="Create new guide"
            />
          </div>
        </div>
      </div>

      <div className={styles.explore}>
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
      </div>

      <div className={styles.tripPlan}>
        <div className={styles.tripPlan1}>
          <div>
            <p id={styles.trips}>Recently Viewed and Upcoming Trips Plan new trip</p>
            <p id={styles.trips1}>You haven’t created anythin yet. <span>Plan a new trip.</span></p>
          </div>
          <Button
            img={leading}
            className={styles.tripsBTN}
            content="Plan new trip"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};
