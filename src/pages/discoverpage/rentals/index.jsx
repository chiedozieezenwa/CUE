import { useState } from "react";
import { bmw, calender, car2, fan, gle, marker01, naira, phone } from "../../../assets";
import { Button, PaymentModal } from "../../../components";
import design from "./design.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { logo } from "../../../assets";

export const Rentals = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(""); 
  const [location, setLocation] = useState(""); 
  const [carBrand, setCarBrand] = useState(""); 
  const [seats, setSeats] = useState("4 Seats"); 
  const [selectedCar, setSelectedCar] = useState(null); 

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleOpenModal = (car) => {
    setSelectedCar(car);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setModalOpen(true);
    }, 2000); 
  };

  const handleCloseModal = () => {
    setModalOpen(false);
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

  const handleSubmit = () => {
    const bookingDetails = {
      car: selectedCar,
      price: selectedCar.price,
      location,
      carBrand,
      seats,
      date: selectedDate,
      time: selectedTime,
      filter: selectedFilter,
    };

    console.log("Booking Details Submitted:", bookingDetails);
    console.log(bookingDetails)
  };

  return (
    <div>
      {isLoading && (
        <div className={design.loaderContainer}>
          <img src={logo} alt="Loading..." className={design.loaderImage} />
        </div>
      )}
      
      <div className={design.container}>
        <div className={design.containerRental}>
          <div className={design.containerRentals}>
            <p className={design.containerDate} id={design.leaving}>
              Leaving from
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
              <option value="Toyota Sienna" />
              <option value="Mercedes-Benz C-Class" />
              <option value="BMW" />
              <option value="Mercedes-Benz GLE" />
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
          {/* Example Car 1 */}
          <div className={design.sectionContainerDetails}>
            <div>
              <img src={car2} alt="" id={design.car2} />
            </div>
            <div>
              <h2>Toyota Sienna</h2>
              <div className={design.sectionDetails}>
                <p>
                  <img src={marker01} alt="" /> Parking
                </p>
                <p>
                  <img src={phone} alt="" /> 4 Seats
                </p>
                <p>
                  <img src={fan} alt="" /> Air-Conditioning
                </p>
              </div>
              <p className={design.rentalNaira}>
                <img src={naira} alt="" />
                100,000
              </p>
            </div>
            <div className={design.pageContainer}>
              <button
                onClick={() => handleOpenModal({ name: "Toyota Sienna", price: 100000 })}
                className={design.sectionBTN}
              >
                Book Now
              </button>
              <PaymentModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSubmit={handleSubmit}
              />
            </div>
          </div>
          {/* Example Car 2 */}
          <div className={design.sectionContainerDetails}>
            <div>
              <img src={bmw} alt="" />
            </div>
            <div>
              <h2>BMW</h2>
              <div className={design.sectionDetails}>
                <p>
                  <img src={marker01} alt="" /> Parking
                </p>
                <p>
                  <img src={phone} alt="" /> 4 Seats
                </p>
                <p>
                  <img src={fan} alt="" /> Air-Conditioning
                </p>
              </div>
              <p className={design.rentalNaira}>
                <img src={naira} alt="" />
                150,000
              </p>
            </div>
            <div className={design.pageContainer}>
              <button
                onClick={() => handleOpenModal({ name: "BMW", price: 150000 })}
                className={design.sectionBTN}
              >
                Book Now
              </button>
              <PaymentModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSubmit={handleSubmit}
              />
            </div>
          </div>
          {/* Example Car 3 */}
          <div className={design.sectionContainerDetails}>
            <div>
              <img src={gle} alt="" />
            </div>
            <div>
              <h2>Mercedes-Benz GLE</h2>
              <div className={design.sectionDetails}>
                <p>
                  <img src={marker01} alt="" /> Parking
                </p>
                <p>
                  <img src={phone} alt="" /> 4 Seats
                </p>
                <p>
                  <img src={fan} alt="" /> Air-Conditioning
                </p>
              </div>
              <p className={design.rentalNaira}>
                <img src={naira} alt="" />
                200,000
              </p>
            </div>
            <div className={design.pageContainer}>
              <button
                onClick={() => handleOpenModal({ name: "Mercedes-Benz GLE", price: 200000 })}
                className={design.sectionBTN}
              >
                Book Now
              </button>
              <PaymentModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSubmit={handleSubmit}
              />
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};
