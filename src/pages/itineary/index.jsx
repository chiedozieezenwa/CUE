import { useState } from "react";
import {
  art,
  bar,
  best,
  car5,
  ceramic,
  deleteBTN,
  fan,
  heart,
  lugard,
  marker01,
  naira,
  phone,
  plus,
  ratingStars,
} from "../../assets";
import { Button, Destination, Navbar } from "../../components";
import LocationSearchInput from "../../components/searchLocation";
import GoogleMapComponent from "../../components/googleMap";
import { NoteSpace } from "../../components/todo/todo";
import styles from "./styles.module.css";
import LiveDateTime from "../../components/liveDate";

export const Itineary = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [itineraryPlaces, setItineraryPlaces] = useState([]); // Store the final list of places

  const handlePlaceSelected = (place) => {
    setSelectedPlace(place); // Store the place temporarily until the button is clicked
  };

  const handleAddNewList = () => {
    if (selectedPlace) {
      setItineraryPlaces([...itineraryPlaces, selectedPlace]); // Add the selected place to the itinerary list
      setSelectedPlace(null); // Clear the temporary selected place
    }
  };

  const handleDeletePlace = (index) => {
    const newPlaces = itineraryPlaces.filter((_, i) => i !== index);
    setItineraryPlaces(newPlaces);
  };

  const [selectedTime, setSelectedTime] = useState("");

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const destinationLists = [
    {
      destinationImage: ceramic,
      title: "Top Things To Do In Enuguounge",
      rating: ratingStars,
      review: "5.0 (210 Reviews)",
      destinationImg: heart,
    },
    {
      destinationImage: best,
      title: "Best Restaurants In Enugu",
      rating: ratingStars,
      review: "5.0 (210 Reviews)",
      destinationImg: heart,
    },
    {
      destinationImage: art,
      title: "Center For Memories",
      rating: ratingStars,
      review: "5.0 (109 Reviews)",
      destinationImg: heart,
    },
    {
      destinationImage: bar,
      title: "Stanford Laze ",
      rating: ratingStars,
      review: "5.0 (302 Reviews)",
      destinationImg: heart,
    },
  ];

  return (
    <>
      <Navbar />

      <main className={styles.ItinearyHome}>
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
                  rating={destinationList.rating}
                  review={destinationList.review}
                  destinationImg={destinationList.destinationImg}
                />
              ))}
            </div>
          </section>

          <section className={styles.rentals}>
            <div>
              <h3>Reservations and Rentals</h3>
              <div>
                <div className={styles.rentalsCards}>
                  <img src={car5} alt="Car" />
                  <div>
                    <h4>BMW</h4>
                    <div className={styles.rentalsCardsinfos}>
                      <p>
                        <img src={marker01} alt="Marker" /> Parking
                      </p>
                      <p>
                        <img src={phone} alt="Phone" /> 4 Seats
                      </p>
                      <p>
                        <img src={fan} alt="Fan" /> Air-Conditioning
                      </p>
                    </div>
                    <p>
                      <img src={naira} alt="Naira" /> 130,000
                    </p>
                  </div>
                  <Button
                    content="View Details"
                    className={styles.rentalsCardsBTN}
                  />
                </div>

                <div className={styles.rentalsCards}>
                  <img src={lugard} alt="Lugard" />
                  <div>
                    <h4>BMW</h4>
                    <div className={styles.rentalsCardsinfos}>
                      <p>
                        <img src={marker01} alt="Marker" /> Parking
                      </p>
                      <p>
                        <img src={phone} alt="Phone" /> 4 Seats
                      </p>
                      <p>
                        <img src={fan} alt="Fan" /> Air-Conditioning
                      </p>
                    </div>
                    <p>
                      <img src={naira} alt="Naira" /> 10,000
                    </p>
                  </div>
                  <Button
                    content="View Details"
                    className={styles.rentalsCardsBTN}
                  />
                </div>
              </div>
            </div>
          </section>

          <section className={styles.reservation}>
            <h4>Itinerary</h4>
            <LiveDateTime />
          </section>

          <section className={styles.itinearyReservations}>
            <section>
              <section className={styles.ItinearyNote}>
                <div className={styles.ItinearyNote}>
                  <NoteSpace />
                </div>
                <div>
                  <LocationSearchInput onPlaceSelected={handlePlaceSelected} />
                </div>
              </section>

              <section>
                <Button
                  content="Add new list"
                  img={plus}
                  className={styles.BTN}
                  onClick={handleAddNewList}
                />
              </section>

              <section className={styles.planSelectionDetails}>
                {itineraryPlaces.map((place, index) => (
                  <div key={index} className={styles.itineraryItem}>
                    <div>
                      <p className={styles.planDetailsTime}>
                        <LiveDateTime />
                      </p>
                      <p className={styles.planTime}>Add Subheading</p>
                    </div>
                    <div className={styles.SelectionDetails}>
                      <div className={styles.Details}>
                        <div className={styles.DetailsH3}>
                          <h3>{place.name}</h3>
                          <input
                            type="datetime-local"
                            value={selectedTime}
                            onChange={handleTimeChange}
                            className={styles.timePicker}
                            placeholder="Add Time"
                          />
                        </div>
                        {place.image && (
                          <img
                            className={styles.Detailsimage}
                            src={place.image}
                            alt={place.name}
                          />
                        )}
                      </div>

                      <Button
                        className={styles.deleteButton}
                        onClick={() => handleDeletePlace(index)}
                        img={deleteBTN}
                      />
                    </div>
                  </div>
                ))}
              </section>

              <section>
                <h4 className={styles.budgeting}>Budgeting</h4>
                <div className={styles.budgetingInfo}>
                  <div>
                    <p id={styles.amount}>NGN 750,000</p>
                    <p id={styles.amountEdit}>Edit Budget</p>
                  </div>
                  <Button
                    content="Add Expense"
                    className={styles.budgetingBTN}
                  />
                </div>
              </section>

              <section className={styles.Detailexpenses}>
                <div className={styles.expenses}>
                  <h5>Expenses</h5>
                </div>
                <div>
                  <div className={styles.expensesInfo}>
                    <p> Car Rental</p>
                    <p>#130,000</p>
                  </div>
                  <div className={styles.expensesInfo}>
                    <p>Lodging</p>
                    <p>#110,000</p>
                  </div>
                  <div className={styles.expensesInfo}>
                    <p>Drinks</p>
                    <p>#12,000</p>
                  </div>
                </div>

                <Button content="Download" className={styles.delete} />
              </section>
            </section>
            <section className={styles.googleMap}>
              <GoogleMapComponent selectedPlace={selectedPlace} />
            </section>
          </section>
        </div>
      </main>
    </>
  );
};
