import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { marker01 } from "../../../assets";
import { Button, Navbar } from "../../../components";
import { Tab } from "../nav";
import styles from "./styles.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CustomDateInput } from "../../../components";
import GoogleMapWithDirections from "../../../components/button/googleMap2";
import { useBooking } from "../../../context/bookingDetails/useBooking";
import { UseCart } from "../../../context/cartContext";
import { RatingReview } from "../../../components/reviewRating";
// import Rating from "../../../components/landingPage/rating";

export const BookingPage = () => {
  const { bookingDetails, addBookingItem } = useBooking();
  const { addToCart } = UseCart();
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const origin = { lat: 6.5244, lng: 7.5086 };
  const navigate = useNavigate();
  

  useEffect(() => {
    console.log("BookingPage mounted");
  }, []);

  if (!bookingDetails || !bookingDetails.lodging) {
    return <p>No booking details found!</p>;
  }

  const { lodging, conveniences } = bookingDetails;

  const pricePerNight = Number(lodging.price_per_night) || 0;

  const numberOfDays =
    checkInDate && checkOutDate
      ? Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24))
      : 0;

  const totalPrice = numberOfDays * pricePerNight;

  const handleAddToCart = () => {
    const bookingItem = {
      lodgingId: lodging.id || "",
      name: lodging.name || "Unknown Lodging",
      address: lodging.address || "No address provided",
      checkInDate,
      checkOutDate,
      numberOfDays,
      totalPrice,
      image: lodging.image_url?.[0] || "",
      // Image: lodging.image_url,
      pricePerNight,
    };
    addBookingItem(bookingItem);
    addToCart(bookingItem);
    console.log("Booking Item", bookingItem);
    alert("Booking added to cart!");
    navigate("/retailCart");
  };

  console.log("lodging ID:", lodging._id);
  console.log("BOOKING", bookingDetails);

  const lodgingImages = lodging.image_url || [];

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.containerH3}>
          <h3>
            <p>Stay Somewhere Great!</p>
          </h3>
        </div>
        <Tab />
        <section className={styles.containerIMG}>
          {lodgingImages.length > 0 && (
            <img
              src={lodgingImages[0]}
              alt={lodging.name}
              className={styles.containerIMG1}
            />
          )}
          {lodgingImages.length > 1 && (
            <div>
              <img
                src={lodgingImages[1]}
                alt={lodging.name}
                className={styles.containerIMG2}
              />
              <div className={styles.containerIMGs}>
                {lodgingImages.slice(2, 4).map((imgSrc, index) => (
                  <img
                    key={index}
                    src={imgSrc}
                    alt={lodging.name}
                    className={styles.containerIMG3}
                  />
                ))}
              </div>
            </div>
          )}
        </section>
        <section className={styles.containerSection}>
          <div className={styles.containerSection2}>
            <div className={styles.containerSectionName}>
              <h2>
                <strong></strong> {lodging.name}
              </h2>
              <p id={styles.address}>
                <strong>
                  <img src={marker01} alt="" />
                </strong>{" "}
                {lodging.address}
              </p>
              <p>
                <strong></strong> {lodging.description}
              </p>
              <article className={styles.sectionConeniences}>
                <h4>Facilities</h4>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {conveniences.slice(0, 7).map((convenience, index) => (
                    <div
                      key={index}
                      style={{
                        borderRadius: "8px",
                        padding: "10px",
                        margin: "4px",
                        width: "calc(80% / 3 - 18px)",
                        boxSizing: "border-box",
                        textAlign: "center",
                      }}
                    >
                      <p className={styles.sectionConeniences1}>
                        {convenience}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
            <div className={styles.containerSectionPayment}>
              <div>
                <div className={styles.containerDatePickerDiv}>
                  <DatePicker
                    selected={checkInDate}
                    onChange={(date) => setCheckInDate(date)}
                    dateFormat="dd/MM/yyyy"
                    minDate={new Date()}
                    isClearable
                    showYearDropdown
                    showMonthDropdown
                    placeholder="CHECK-IN"
                    customInput={<CustomDateInput placeholder="CHECK-IN" />}
                    className={styles.containerDatePicker}
                  />

                  <DatePicker
                    selected={checkOutDate}
                    onChange={(date) => setCheckOutDate(date)}
                    dateFormat="dd/MM/yyyy"
                    minDate={checkInDate || new Date()}
                    isClearable
                    showYearDropdown
                    showMonthDropdown
                    placeholder="CHECK-OUT"
                    customInput={<CustomDateInput placeholder="CHECK-OUT" />}
                    className={styles.containerDatePicker}
                  />
                </div>
                <div className={styles.containerSchedule}>
                  <p>
                    Pricing per night{" "}
                    <span>
                      <strong>From NGN</strong> {pricePerNight.toLocaleString()}
                    </span>
                  </p>
                  {numberOfDays > 0 && (
                    <p>
                      Total Price:{" "}
                      <span>
                        <strong>NGN</strong> {totalPrice.toLocaleString()}
                      </span>{" "}
                      for {numberOfDays}{" "}
                      {numberOfDays === 1 ? "night" : "nights"}
                    </p>
                  )}
                </div>
                <Button
                  content="Add To Payment"
                  className={styles.containerBTN}
                  onClick={handleAddToCart}
                />
              </div>
            </div>
          </div>
        </section>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search map"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        <div className={styles.containerMap}>
          <div style={{ height: "400px", marginTop: "20px" }}>
            <GoogleMapWithDirections
              origin={origin}
              searchQuery={searchQuery}
            />
          </div>
        </div>
        <RatingReview/>
      </div>
    </div>
  );
};
