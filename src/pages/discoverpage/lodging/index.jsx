import { useContext } from "react";
import { LodgingContext } from "../../../context/LodgingContext.jsx";
import { SearchBar } from "../../../components/searchbar";
import design from "./design.module.css";
import { FadeLoader } from "react-spinners";
import { airBnB, Apartments, bathhub, bedAndBreakfast, Hotels, panicButton, Resorts, smartHome, surveillance, tv, Villas, waves, wifi } from "../../../assets";

export const Lodging = () => {
  const {
    loading,
    count,
    hotels,
    filters,
    setFilters,
    handleFilterChange,
    decrement,
    increment,
    fetchHotels,
  } = useContext(LodgingContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchHotels();
  };
  console.log(hotels);

  return (
    <div className={design.container}>
      <SearchBar />
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
          <p className={design.filterReset} onClick={() => setFilters({})}>Reset</p>
        </div>

        <div className={design.bookingSection}>       
          <form className={design.bookingForm} onSubmit={handleSubmit}>

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
                  <img src={bathhub} alt="Outdoor Bathhub" />
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
                <p className={design.price}>${hotel.price_per_night} per night</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};
