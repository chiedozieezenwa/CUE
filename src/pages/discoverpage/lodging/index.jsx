import { useContext, useEffect } from "react";
import { LodgingContext } from "../../../context/LodgingContext.jsx";
import { SearchContext } from "../../../context/searchContext";
import { SearchBar } from "../../../components/searchbar";
import design from "./design.module.css";
import { FadeLoader } from "react-spinners";
import { useBooking } from "../../../context/bookingDetails/index.jsx";


import { airBnB, Apartments, bedAndBreakfast, Hotels, bathtub, panicButton, Resorts, smartHome, surveillance, tv, Villas, waves, wifi } from "../../../assets";


export const Lodging = () => {
  const {
    loading,
    count,
    filters,
    setFilters,
    handleFilterChange,
    decrement,
    increment,
    fetchHotels,
  } = useContext(LodgingContext);

  const { searchResults } = useContext(SearchContext); // Get the search results from SearchContext

  // Use searchResults if available, otherwise fall back to LodgingContext's hotels
  const hotels = searchResults?.length
    ? searchResults
    : useContext(LodgingContext).hotels || [];

  useEffect(() => {
    console.log("Filters updated:", filters);
    fetchHotels();
  }, [filters]);

  useEffect(() => {
    console.log("Search results updated:", searchResults);
  }, [searchResults]);

  const { bookingDetails, addBookingDetails } = useBooking(); 

  const handleAddLodgingToCart = (lodgingDetails) => {
    addBookingDetails({ lodging: lodgingDetails });
    alert("Lodging details added to your cart!");

  return (
    <div className={design.container}>
      <SearchBar placeholder="search hotels" />
      {loading && (
        <div className={design.loaderOverlay}>
          <FadeLoader
            color="#1516a5"
            visible={true}
            loading={loading}
            height={15}
            width={5}
            radius={2}
            margin={2}
          />
        </div>
      )}

      <div className={design.bookingCont}>
        <div className={design.filter}>
          <p>Filters</p>
          <p className={design.filterReset} onClick={() => setFilters({})}>
            Reset
          </p>
        </div>

        <div className={design.bookingSection}>
          <form
            className={design.bookingForm}
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Price Range */}
            <div className={design.priceRange}>
              <p>Price</p>
              <div>
                <input
                  type="text"
                  name="minPrice"
                  placeholder="From"
                  value={filters.minPrice}
                  onChange={handleFilterChange}
                />
                <input
                  type="text"
                  name="maxPrice"
                  placeholder="To"
                  value={filters.maxPrice}
                  onChange={handleFilterChange}
                />
              </div>
            </div>

            {/* Property Type */}
            <div className={design.propertyType}>
              <p>Property Type</p>
              <div className={design["proptypelist"]}>
                <div>
                  <img src={bedAndBreakfast} alt="bNb" />
                  <p>Bed and Breakfast</p>
                </div>
                <div>
                  <img src={Apartments} alt="Apartments" />
                  <p>Apartments</p>
                </div>
                <div>
                  <img src={airBnB} alt="Air BNB" />
                  <p>Airbnb</p>
                </div>
                <div>
                  <img src={Villas} alt="Villas" />
                  <p>Villas</p>
                </div>
                <div>
                  <img src={Hotels} alt="Hotels" />
                  <p>Hotels</p>
                </div>
                <div>
                  <img src={Resorts} alt="Resorts" />
                  <p>Resorts</p>
                </div>
              </div>
            </div>

            {/* Number of guests */}
            <div className={design.numOfGuests}>
              <p>Number of Guests</p>
              <div>
                <button onClick={decrement}>--</button>
                <p>{count}</p>
                <button onClick={increment}>+</button>
              </div>
            </div>

            {/* Convenience */}
            <div className={design.convenience}>
              <p>Conveniences</p>
              <div className={design["convenienceList"]}>
                <div>
                  <img src={waves} alt="Beach View" />
                  <p>Beach View</p>
                </div>
                <div>
                  <img src={tv} alt="TV" />
                  <p>TV</p>
                </div>
                <div>
                  <img src={wifi} alt="Wifi" />
                  <p>Wi-Fi</p>
                </div>
                <div>
                  <img src={panicButton} alt="Panic Button" />
                  <p>Panic Button</p>
                </div>
                <div>
                  <img src={smartHome} alt="Smart Home" />
                  <p>Smart Home</p>
                </div>
                <div>
                  <img src={surveillance} alt="Surveillance Features" />
                  <p>Surveillance</p>
                </div>
                <div>
                  <img src={bathtub} alt="Outdoor Bathhub" />
                  <p>Outdoor Baths</p>
                </div>
              </div>
            </div>

            <div className={design.submitBtn}>
              <button type="submit">Apply</button>
            </div>
          </form>

          <section className={design.bookingReview}>
            {hotels.map((hotel) => (
              <div key={hotel._id} className={design.hotelCard}>
                <img src={hotel.image_url[0]} alt={hotel.name} />
                <p className={design.titleField}>{hotel.name}</p>
                <p className={design.location}>{hotel.city}</p>
                <p className={design.review}>Rating: {hotel.rating}</p>
                <p className={design.status}>{hotel.type}</p>
                <p className={design.price}>
                  ${hotel.price_per_night} per night
                </p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};
};