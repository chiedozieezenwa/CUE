import { useContext, useEffect, useState } from "react";
import { LodgingContext } from "../../../context/LodgingContext.jsx";
import { SearchContext } from "../../../context/searchContext";
import { SearchBar } from "../../../components/searchbar";
import design from "./design.module.css";
import { FadeLoader } from "react-spinners";
import { useBooking } from "../../../context/bookingDetails/index.jsx";
import { useNavigate } from "react-router-dom";
import {
  airBnB,
  Apartments,
  bedAndBreakfast,
  Hotels,
  bathtub,
  panicButton,
  Resorts,
  smartHome,
  surveillance,
  tv,
  Villas,
  waves,
  wifi,
  naira,
} from "../../../assets";

export const Lodging = () => {
  const navigate = useNavigate();

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

  const { searchResults } = useContext(SearchContext);
  const hotels = searchResults?.length
    ? searchResults
    : useContext(LodgingContext).hotels || [];

  useEffect(() => {
    fetchHotels();
  }, [filters, fetchHotels]);

  const { addBookingDetails } = useBooking();
  const [selectedHotel, setSelectedHotel] = useState(null);

  const handleFilterClick = (filterName, filterValue) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      if (Array.isArray(newFilters[filterName])) {
        if (newFilters[filterName].includes(filterValue)) {
          newFilters[filterName] = newFilters[filterName].filter(
            (value) => value !== filterValue
          );
        } else {
          newFilters[filterName] = [...newFilters[filterName], filterValue];
        }
      } else {
        newFilters[filterName] = [filterValue];
      }
      return newFilters;
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!selectedHotel) {
      alert("Please select a hotel before proceeding.");
      return;
    }

    addBookingDetails({
      lodging: selectedHotel,
      guests: count,
      conveniences: filters.convenience || [],
    });

    navigate("/bookingPage"); // Navigate only when "Apply" is clicked
  };

  const filteredHotels = hotels.filter((hotel) => {
    const typeMatches = !filters.type || filters.type.includes(hotel.type);
    const priceMatches =
      (!filters.minPrice ||
        hotel.price_per_night >= parseFloat(filters.minPrice)) &&
      (!filters.maxPrice ||
        hotel.price_per_night <= parseFloat(filters.maxPrice));

    return typeMatches && priceMatches;
  });

  return (
    <div className={design.container}>
      <SearchBar placeholder="Search hotels" />
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
          <form className={design.bookingForm} onSubmit={handleFormSubmit}>
            {/* Price Range */}
            <div className={design.priceRange}>
              <p>Price</p>
              <div>
                <input
                  type="number"
                  name="minPrice"
                  placeholder="From"
                  value={filters.minPrice || ""}
                  onChange={handleFilterChange}
                />
                <input
                  type="number"
                  name="maxPrice"
                  placeholder="To"
                  value={filters.maxPrice || ""}
                  onChange={handleFilterChange}
                />
              </div>
            </div>

            {/* Property Type */}
            <div className={design.propertyType}>
              <p>Property Type</p>
              <div className={design.proptypelist}>
                <div onClick={() => handleFilterClick("type", "Bed and Breakfast")}>
                  <img src={bedAndBreakfast} alt="Bed and Breakfast" />
                  <p>Bed and Breakfast</p>
                </div>
                <div onClick={() => handleFilterClick("type", "Apartments")}>
                  <img src={Apartments} alt="Apartments" />
                  <p>Apartments</p>
                </div>
                <div onClick={() => handleFilterClick("type", "Airbnb")}>
                  <img src={airBnB} alt="Airbnb" />
                  <p>Airbnb</p>
                </div>
                <div onClick={() => handleFilterClick("type", "Villa")}>
                  <img src={Villas} alt="Villas" />
                  <p>Villas</p>
                </div>
                <div onClick={() => handleFilterClick("type", "Hotel")}>
                  <img src={Hotels} alt="Hotels" />
                  <p>Hotels</p>
                </div>
                <div onClick={() => handleFilterClick("type", "Resorts")}>
                  <img src={Resorts} alt="Resorts" />
                  <p>Resorts</p>
                </div>
              </div>
            </div>

            {/* Number of guests */}
            <div className={design.numOfGuests}>
              <p>Number of Guests</p>
              <div>
                <button type="button" onClick={decrement}>
                  -
                </button>
                <p>{count}</p>
                <button type="button" onClick={increment}>
                  +
                </button>
              </div>
            </div>

            {/* Convenience */}
            <div className={design.convenience}>
              <p>Conveniences</p>
              <div className={design.convenienceList}>
                <div onClick={() => handleFilterClick("convenience", "Beach View")}>
                  <img src={waves} alt="Beach View" />
                  <p>Beach View</p>
                </div>
                <div onClick={() => handleFilterClick("convenience", "TV")}>
                  <img src={tv} alt="TV" />
                  <p>TV</p>
                </div>
                <div onClick={() => handleFilterClick("convenience", "Wi-Fi")}>
                  <img src={wifi} alt="Wi-Fi" />
                  <p>Wi-Fi</p>
                </div>
                <div onClick={() => handleFilterClick("convenience", "Panic Button")}>
                  <img src={panicButton} alt="Panic Button" />
                  <p>Panic Button</p>
                </div>
                <div onClick={() => handleFilterClick("convenience", "Smart Home")}>
                  <img src={smartHome} alt="Smart Home" />
                  <p>Smart Home</p>
                </div>
                <div onClick={() => handleFilterClick("convenience", "Surveillance")}>
                  <img src={surveillance} alt="Surveillance" />
                  <p>Surveillance</p>
                </div>
                <div onClick={() => handleFilterClick("convenience", "Outdoor Bath")}>
                  <img src={bathtub} alt="Outdoor Bath" />
                  <p>Outdoor Bath</p>
                </div>
              </div>
            </div>

            <div className={design.submitBtn}>
              <button type="submit">Apply</button>
            </div>
          </form>

          <section className={design.bookingReview}>
            {filteredHotels.map((hotel) => (
              <div
                key={hotel._id}
                className={design.hotelCard}
                onClick={() => setSelectedHotel(hotel)} // Set selected hotel
                style={{
                  border: selectedHotel?._id === hotel._id ? "2px solid blue" : "none", // Highlight selected hotel
                }}
              >
                <img src={hotel.image_url[0]} alt={hotel.name} />
                <p className={design.titleField}>{hotel.name}</p>
                <p className={design.location}>{hotel.city}</p>
                <p className={design.review}>Rating: {hotel.rating}</p>
                <p className={design.status}>{hotel.type}</p>
                <p className={design.price}>
                  <img src={naira} alt="" />{hotel.price_per_night} per night
                </p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

