import { useState, useEffect } from "react";
import { calender, fan, marker01, naira, phone } from "../../../assets";
import { Button } from "../../../components";
import design from "./design.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { logo } from "../../../assets";
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion"

export const Rentals = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  // const [isLoading, setIsLoading] = useState();
  const [selectedFilter, setSelectedFilter] = useState("");
  const [location, setLocation] = useState("");
  const [carBrand, setCarBrand] = useState("");
  const [seats, setSeats] = useState("4 Seats");
  const [selectedCar, setSelectedCar] = useState(null);
  const [rentals, setRentals] = useState([]);

  const navigate = useNavigate();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleOpenModal = (car) => {
    if (!selectedDate || !selectedTime) {
      alert("Please select a date and time before booking.");
      return;
    }

    setSelectedCar(car);
    // setIsLoading(true);

    const bookingDetails = {
      car: car.name,
      price: car.price,
      location,
      date: selectedDate,
      time: selectedTime,
      image_url: car.image_url || "default-image-url.jpg",
      seats: car.number_of_seats,
      airConditioned: car.air_conditioned,
      parking: true,
      driver_number: car.driver_number,
      rental_plate_number: car.rental_plate_number,
    };

    setTimeout(() => {
      // setIsLoading(false);
      navigate("/booking", { state: bookingDetails });
    }, 2000);
  };

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleBrandChange = (event) => {
    setCarBrand(event.target.value);
  };

  const handleSeatsChange = (event) => {
    setSeats(event.target.value);
  };

  useEffect(() => {
    const url = "https://cue-backend.onrender.com/api/v1/rentals";
    const params = new URLSearchParams();

    if (seats) {
      params.append("seats", seats);
    }
    if (carBrand) {
      params.append("brand", carBrand);
    }
    if (selectedFilter) {
      if (selectedFilter === "AC") {
        params.append("air_conditioned", "true");
      } else if (selectedFilter === "New Car") {
        params.append("is_new", "true");
      }
    }

    const fetchUrl = `${url}?${params.toString()}`;

    fetch(fetchUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((response) => {
        console.log("API Response:", response);
        console.log("API Response data:", response.data);
        setRentals(response.data || []);
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }, [seats, carBrand, selectedFilter]);

  console.log("Rentals state:", rentals);

  const heroVariants = {
    hide: {
      opacity: 0,
      y: -150,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        stiffness: 200,
      },
    },
  };


  return (
    <div>
      {/* {isLoading && (
        <div className={design.loaderContainer}>
          <img src={logo} alt="Loading..." className={design.loaderImage} />
        </div>
      )} */}

      <div className={design.container}>
        <div className={design.containerRental}>
          <div className={design.containerRentals}>
            <p className={design.containerDate} id={design.leaving}>
              Leaving from {location}
            </p>
            <input
              type="text"
              className={design.containerTime}
              id={design.leavingInput}
              placeholder="Maitama, Abuja"
              value={location}
              onChange={handleLocationChange}
            />
          </div>
          <div className={design.containerRentals1}>
            <div className="App" style={{ marginBottom: "20px" }}>
              <p className={design.containerDate} id={design.date1}>
                Pick-up time
              </p>
              <img src={calender} alt="" className={design.containerImage} />
              <DatePicker
                selected={selectedTime}
                onChange={handleTimeChange}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                placeholderText="10:30 am"
                className={design.datepicker}
              />
            </div>
          </div>
          <div className={design.containerRentals2}>
            <div style={{ marginBottom: "20px" }}>
              <p className={design.containerDate} id={design.date2}>
                Pick-up date
              </p>
              <img src={calender} alt="" className={design.containerImage} />
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="d MMMM"
                placeholderText="7th September"
                popperPlacement="bottom-start"
                className={design.datepicker2}
              />
            </div>
          </div>
          <Button content="Search" className={design.BTN} />
        </div>
      </div>

      <section className={design.sectionContainer}>
        <article className={design.sectionContainer1}>
          <div className={design.sectionFilter}>
            <p>Filters</p>
          </div>
          <div>
            <p className={design.sectionCategory}>Looking for</p>
            <input
              type="text"
              placeholder="4 Seats"
              className={design.carSeat}
              value={seats}
              onChange={handleSeatsChange}
            />
          </div>
          <div>
            <p className={design.sectionCategory}>Category</p>
            <input
              list="cars"
              id="car"
              name="car"
              placeholder="Brands"
              className={design.carSeat}
              value={carBrand}
              onChange={handleBrandChange}
            />

            <datalist id="cars">
              <option value="Toyota" />
              <option value="Mercedes" />
              <option value="BMW" />
              <option value="Acura" />
              <option value="Kia" />
              <option value="Jeep" />
              <option value="Hyundai" />
              <option value="Audi" />
              <option value="Honda" />
            </datalist>
          </div>
          <div id={design.popular}>
            <p>Popular Filters</p>
            <p>
              <input
                type="checkbox"
                value="AC"
                checked={selectedFilter === "AC"}
                onChange={handleFilterChange}
              />{" "}
              AC
            </p>
            <p>
              <input
                type="checkbox"
                value="New Car"
                checked={selectedFilter === "New Car"}
                onChange={handleFilterChange}
              />{" "}
              New Car
            </p>
            <p>
              <input
                type="checkbox"
                value="Non Stop"
                checked={selectedFilter === "Non Stop"}
                onChange={handleFilterChange}
              />{" "}
              Non Stop
            </p>
          </div>
        </article>
        <article className={design.sectionContainer2}>
          <div className={design.sectionFilter1}>
            <p>Available</p>
          </div>
          {rentals.slice(0, 3).map((rental) => (
            <div key={rental._id} className={design.sectionContainerDetails}>
              <div>
                <img
                  src={rental.image_url || "default-image-url.jpg"}
                  alt={rental.brand}
                  id={design.car2}
                />
              </div>
              <div className={design.sectionContainerDetails2}>
                <h2>
                  {rental.brand} {rental.model}
                </h2>
                <div className={design.sectionDetails}>
                  <div className={design.sectionDetailsinfos}>
                    <div><img src={marker01} alt="" /></div>
                    <div><p>Parking</p></div>
                  </div>
                  <div className={design.sectionDetailsinfos}>
                    <div><img src={phone} alt="" />{" "}</div>
                    <div><p>{rental.number_of_seats + " " + "Seats" ||
                      "Seats info not available"}</p></div>
                  </div>
                  <div className={design.sectionDetailsinfos}>
                    <div><img src={fan} alt="" />{" "}</div>
                    <div><p> {rental.air_conditioned
                      ? "Air-Conditioning"
                      : "No Air-Conditioning"}</p></div>
                  </div>
                </div>
                <p className={design.rentalNaira}>
                  <img src={naira} alt="" />
                  {rental.rental_amount
                    ? rental.rental_amount.toLocaleString()
                    : "Price not available"}
                </p>
              </div>
              <motion.div className={design.pageContainer} variants={heroVariants}
    initial={"hide"}
    exit={"hide"}
    whileInView={"show"}>
                <button
                  onClick={() =>
                    handleOpenModal({
                      name: `${rental.brand} ${rental.model || ""}`,
                      price: rental.rental_amount,
                      image_url: rental.image_url,
                      driver_number: rental.driver_number,
                      rental_plate_number: rental.rental_plate_number,
                    })
                  }
                  className={design.sectionBTN}
                >
                  Book Now
                </button>
              </motion.div>
            </div>
          ))}
        </article>
      </section>
      <div id={design.skipBtn}>
        <Button content="Skip Rental" className={design.skipBtn}  onClick={() => navigate("/disc/discovertab/lodging")}/>
      </div>
    </div>
  );
};
