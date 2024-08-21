import { useState, useEffect } from "react";
import axios from "axios";
import { SearchBar } from "../../../components/searchbar";
import design from "./design.module.css";
import { FadeLoader } from "react-spinners";
import {
  airBnB,
  Apartments,
  bathhub,
  bedAndBreakfast,
  Hotels,
  panicButton,
  Resorts,
  smartHome,
  surveillance,
  tv,
  Villas,
  waves,
  wifi,
} from "../../../assets";

export const Lodging = () => {
  const [loading, setLoading] = useState(true);
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [count, setCount] = useState(1);
  const [filters, setFilters] = useState({
    priceFrom: "",
    priceTo: "",
    propertyType: "",
    convenience: [],
  });

  useEffect(() => {
    axios
      .get("https://cue-api-3tyr.onrender.com/api/v1/hotels")
      .then((response) => {
        const data = response.data.data || [];
        setHotels(Array.isArray(data) ? data : []);
        setFilteredHotels(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the hotels!", error);
        setLoading(false);
      });
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();

    if (!Array.isArray(hotels)) {
      console.error("Hotels data is not an array");
      return;
    }

    const { priceFrom, priceTo, propertyType } = filters;
    const filtered = hotels.filter((hotel) => {
      return (
        (priceFrom === "" || hotel.price >= priceFrom) &&
        (priceTo === "" || hotel.price <= priceTo) &&
        (propertyType === "" || hotel.type.includes(propertyType))
      );
    });
    setFilteredHotels(filtered);
  };

  const decrement = (e) => {
    e.preventDefault();
    setCount(count > 1 ? count - 1 : 1);
  };

  const increment = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };

  return (
    <div className={design.container}>
      <SearchBar 
        placeholder="search hotels"
      />
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
          <p className={design.filterReset}>Reset</p>
        </div>

        <div className={design.bookingSection}>
          <form className={design.bookingForm} onSubmit={handleFilterSubmit}>
            {/* Price Range */}
            <div className={design.priceRange}>
              <p>Price</p>
              <div>
                <input
                  type="number"
                  name="priceFrom"
                  value={filters.priceFrom}
                  onChange={handleFilterChange}
                  placeholder="From"
                />
                <input
                  type="number"
                  name="priceTo"
                  value={filters.priceTo}
                  onChange={handleFilterChange}
                  placeholder="To"
                />
              </div>
            </div>

            {/* Property Type */}
            <div className={design.propertyType}>
              <p>Property Type</p>
              <div className={design["proptypelist"]}>
                {/* Example Property Type Filter */}
                <div
                  onClick={() =>
                    setFilters({
                      ...filters,
                      propertyType: "Bed and Breakfast",
                    })
                  }
                >
                  <img src={bedAndBreakfast} alt="bNb" />
                  <p>Bed and Breakfast</p>
                </div>
                <div
                  onClick={() =>
                    setFilters({ ...filters, propertyType: "Apartments" })
                  }
                >
                  <img src={Apartments} alt="Apartments" />
                  <p>Apartments</p>
                </div>
                <div
                  onClick={() =>
                    setFilters({ ...filters, propertyType: "Airbnb" })
                  }
                >
                  <img src={airBnB} alt="Air BNB" />
                  <p>Airbnb</p>
                </div>
                <div
                  onClick={() =>
                    setFilters({ ...filters, propertyType: "Villas" })
                  }
                >
                  <img src={Villas} alt="Villas" />
                  <p>Villas</p>
                </div>
                <div
                  onClick={() =>
                    setFilters({ ...filters, propertyType: "Hotels" })
                  }
                >
                  <img src={Hotels} alt="Hotels" />
                  <p>Hotels</p>
                </div>
                <div
                  onClick={() =>
                    setFilters({ ...filters, propertyType: "Resorts" })
                  }
                >
                  <img src={Resorts} alt="Resorts" />
                  <p>Resorts</p>
                </div>
              </div>
            </div>

            {/* Number of Guests */}
            <div className={design.numOfGuests}>
              <p>Number of Guests</p>
              <div>
                <button onClick={decrement}>-</button>
                <p>{count}</p>
                <button onClick={increment}>+</button>
              </div>
            </div>

            {/* Convenience */}
            <div className={design.convenience}>
              <p>Convenience</p>
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
            {Array.isArray(filteredHotels) && filteredHotels.length > 0 ? (
              filteredHotels.map((hotel) => (
                <div key={hotel.id} className={design.hotelCard}>
                  <img src={hotel.image} alt={hotel.title} />
                  <p className={design.titleField}>{hotel.title}</p>
                  <p className={design.location}>{hotel.location}</p>
                  <p className={design.review}>{hotel.rating}</p>
                  <p className={design.status}>{hotel.status}</p>
                  <p className={design.price}>From {hotel.price}/night</p>
                </div>
              ))
            ) : (
              <p>No hotels available</p>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};
