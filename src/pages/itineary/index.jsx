import { useState, useEffect } from "react";
import {
  art,
  bar,
  best,
  ceramic,
  deleteBTN,
  fan,
  heart,
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
import { useBooking } from "../../context/bookingDetails/useBooking";

export const Itineary = () => {
  const { bookingDetails } = useBooking();
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [itineraryPlaces, setItineraryPlaces] = useState(() => {
    
    const savedPlaces = localStorage.getItem("itineraryPlaces");
    return savedPlaces ? JSON.parse(savedPlaces) : [];
  });
  const [currentLocation, setCurrentLocation] = useState("Fetching location...");
  const [budget, setBudget] = useState(() => {
    const savedBudget = localStorage.getItem("budget");
    return savedBudget ? JSON.parse(savedBudget) : 750000;
  });
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });
  const [isEditingBudget, setIsEditingBudget] = useState(false);
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [selectedTime, setSelectedTime] = useState("");


  useEffect(() => {
    localStorage.setItem("itineraryPlaces", JSON.stringify(itineraryPlaces));
  }, [itineraryPlaces]);

  
  useEffect(() => {
    localStorage.setItem("budget", JSON.stringify(budget));
  }, [budget]);

  
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_GOOGLE_MAPS_API_KEY`
          )
            .then((response) => response.json())
            .then((data) => {
              if (data.results && data.results.length > 0) {
                setCurrentLocation(data.results[0].formatted_address);
              } else {
                setCurrentLocation("Location not found");
              }
            })
            .catch(() => {
              setCurrentLocation("Error fetching location");
            });
        },
        () => {
          setCurrentLocation("Location access denied");
        }
      );
    } else {
      setCurrentLocation("Geolocation not supported");
    }
  }, []);

  const handlePlaceSelected = (place) => {
    setSelectedPlace(place);
  };

  const handleAddNewList = () => {
    if (selectedPlace) {
      setItineraryPlaces([...itineraryPlaces, selectedPlace]);
      setSelectedPlace(null);
    }
  };

  const handleDeletePlace = (index) => {
    const newPlaces = itineraryPlaces.filter((_, i) => i !== index);
    setItineraryPlaces(newPlaces);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleBudgetChange = (e) => {
    setBudget(Number(e.target.value));
  };

  const toggleEditBudget = () => {
    setIsEditingBudget(!isEditingBudget);
  };

  const handleExpenseNameChange = (e) => {
    setExpenseName(e.target.value);
  };

  const handleExpenseAmountChange = (e) => {
    setExpenseAmount(Number(e.target.value));
  };

  const handleAddExpense = () => {
    if (expenseName.trim() !== "" && expenseAmount > 0) {
      const newExpense = {
        description: expenseName,
        amount: expenseAmount,
      };
      setExpenses([...expenses, newExpense]);
      setExpenseName("");
      setExpenseAmount("");
    }
  };

  const handleDeleteExpense = (indexToDelete) => {
    setExpenses(expenses.filter((_, index) => index !== indexToDelete));
  };

  const lodging = bookingDetails?.lodging || null;
const carRental = bookingDetails?.carRental || null;

const handleDownload = () => {
  const data = {
    currentLocation,
    itineraryPlaces,
    budget,
    expenses,
    bookingDetails: {
      lodging: bookingDetails?.lodging,
      car: bookingDetails?.car,
      price: bookingDetails?.price,
      guests: bookingDetails?.guests,
      totalPrice: bookingDetails?.bookingItem?.totalPrice,
      numberOfDays: bookingDetails?.bookingItem?.numberOfDays,
    },
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "itinerary-details.json";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};





  const destinationLists = [
    {
      destinationImage: ceramic,
      title: "Top Enugu Lounge",
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
              <h2>{currentLocation}</h2>
            </header>
          </article>
          <div className={styles.itinearyExplo}>
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
          </div>
          <section className={styles.rentals}>
            <h3>Reservations and Rentals</h3>
            <div>
              {lodging && (
                <div className={styles.rentalsCards}>
                  <div className={styles.rentalLodging}>
                    <img
                      src={lodging.image_url[0]}
                      alt="Lodging"
                      id={styles.cartCar}
                    />
                  </div>

                  <div>
                    <h4>{lodging.name}</h4>
                    <div className={styles.rentalsCardsinfos}>
                      <div className={styles.rentalsCardsinfosDetail}>
                        <div>
                          <div>
                            <img src={marker01} alt="Marker" />
                          </div>
                        </div>
                        <div>
                          <p>{lodging.city}</p>{" "}
                        </div>
                      </div>
                      <div className={styles.rentalsCardsinfosDetail}>
                        <div>
                          <img src={phone} alt="Phone" />
                        </div>
                        <div>
                          <p>
                            Number of Days:{" "}
                            {bookingDetails?.bookingItem?.numberOfDays}
                          </p>
                        </div>
                      </div>

                      <div className={styles.rentalsCardsinfosDetail}>
                        <div>
                          <img src={phone} alt="Phone" />
                        </div>
                        <div>
                          <p>Number of Guests: {bookingDetails?.guests}</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.nairaPrice}>
                      <img src={naira} alt="Naira" />
                      <p>{bookingDetails.bookingItem.totalPrice}</p>
                    </div>
                  </div>
                </div>
              )}

              {bookingDetails?.car && (
                <div className={styles.rentalsCards}>
                  <div className={styles.rentalLodging}>
                    <img
                      src={bookingDetails.image_url}
                      alt="Car"
                      id={styles.cartCar}
                    />
                  </div>

                  <div>
                    <h4>{bookingDetails.car}</h4>
                    <div className={styles.rentalsCardsinfos}>
                      <div className={styles.rentalsCardsinfosDetail}>
                        <div>
                          <div>
                            <img src={marker01} alt="Marker" />
                          </div>
                        </div>
                        <div>
                          {bookingDetails.parking ? "Parking" : "No Parking"}
                        </div>
                      </div>
                      <div className={styles.rentalsCardsinfosDetail}>
                        <div>
                          <div>
                            <img src={phone} alt="Phone" />
                          </div>
                        </div>
                        <div>{bookingDetails.seats} Seats</div>
                      </div>
                      <div className={styles.rentalsCardsinfosDetail}>
                        <div>
                          <div>
                            <img src={fan} alt="Fan" />
                          </div>
                        </div>
                        <div>
                          <p>
                            Air Conditioning:{" "}
                            {bookingDetails.airConditioned ? "Yes" : "No"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={styles.nairaPrice}>
                      <img src={naira} alt="Naira" />
                      <p> {bookingDetails.price}</p>
                    </div>
                  </div>
                </div>
              )}
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

              <section className={styles.budgetSectionCard}>
                <h4 className={styles.budgeting}>Budgeting</h4>
                <div className={styles.budgetingInfo}>
                  <div className={styles.budgetSection1}>
                    {isEditingBudget ? (
                      <input
                        type="number"
                        value={budget}
                        onChange={handleBudgetChange}
                        className={styles.amountInput}
                      />
                    ) : (
                      <p id={styles.amount}>NGN {budget.toLocaleString()}</p>
                    )}
                    <div></div>
                    <p
                      id={styles.amountEdit}
                      onClick={toggleEditBudget}
                      style={{ cursor: "pointer", marginTop: "6px" }}
                    >
                      {isEditingBudget ? "Save Budget" : "Edit Budget"}
                    </p>
                  </div>
                  <div className={styles.budgetSection}>
                    <div className={styles.budgetSectioninfo}>

                    <input
                      type="text"
                      value={expenseName}
                      onChange={handleExpenseNameChange}
                      placeholder="Expense Name"
                      className={styles.expenseInput}
                    />

                   
                    <input
                      type="number"
                      value={expenseAmount}
                      onChange={handleExpenseAmountChange}
                      placeholder="Expense Amount"
                      className={styles.expenseInput}
                    />
                    </div>

                    <Button
                      content="Add Expense"
                      className={styles.budgetingBTN}
                      onClick={handleAddExpense}
                    />
                  </div>
                </div>
              </section>

              
              <section className={styles.Detailexpenses}>
      <div className={styles.expenses}>
        <h5>Expenses</h5>
      </div>
      <div className={styles.DetailexpensesInfo}>
        {bookingDetails?.car && (
          <div className={styles.expensesInfo}>
            <p>Car Rental</p>
            <p>#{bookingDetails.price?.toLocaleString()}</p>
          </div>
        )}
        {bookingDetails?.lodging && (
          <div className={styles.expensesInfo}>
            <p>Lodging</p>
            <p>#{bookingDetails.bookingItem.totalPrice?.toLocaleString()}</p>
          </div>
        )}
        <div className={styles.expensesInfo}>
          <p>Drinks</p>
          <p>#12,000</p>
        </div>
        {expenses.map((expense, index) => (
          <div key={index} className={styles.expensesInfo}>
            <p>{expense.description}</p>
            <div id={styles.expeBTN}>

            <p>#{expense.amount.toLocaleString()}</p>
            <button
              className={styles.deleteButton}
              onClick={() => handleDeleteExpense(index)}
            >
              
            </button>
            </div>
            
          </div>
          
        ))}
        
      </div>
      <Button content="Download" className={styles.delete} onClick={handleDownload} />

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
