import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { marker01 } from "../../../assets";
import { Button, Navbar, ReviewRating } from "../../../components";
import { Tab } from "../nav";
import styles from "./styles.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CustomDateInput } from "../../../components";
import GoogleMapWithDirections from "../../../components/button/googleMap2";
import { useBooking } from "../../../context/bookingDetails/useBooking";
import { UseCart } from "../../../context/cartContext";


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

    // Retrieve booking details from local storage
    const storedBooking = localStorage.getItem("bookingItem");
    if (storedBooking) {
      const parsedBooking = JSON.parse(storedBooking);
      setCheckInDate(new Date(parsedBooking.checkInDate));
      setCheckOutDate(new Date(parsedBooking.checkOutDate));
    }
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
      pricePerNight,
    };
    addBookingItem(bookingItem);
    addToCart(bookingItem);

    // Save booking item to local storage
    localStorage.setItem("bookingItem", JSON.stringify(bookingItem));

    console.log("Booking Item", bookingItem);
    alert("Booking added to cart!");
    navigate("/retailCart");
  };

  console.log(localStorage.getItem("bookingItem"));


  const lodgingImages = lodging.image_url || [];


  return (
    <div>
      <Navbar />
        <div className={styles.containerH3}>
          <h3>
            <p>Stay Somewhere Great!</p>
          </h3>
        </div>
      <div className={styles.container}>
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

              <p className={styles.description}>

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
                  <div className={styles.schedulePrice}>
                    <div>
                      <p>Pricing per night{" "}</p>
                    </div>
                    <div>
                    <strong>From NGN</strong> {pricePerNight.toLocaleString()}
                    </div>
                  </div>
                  {numberOfDays > 0 && (
                      <div className={styles.schedulePrice}>
                        <div>
                          <p> Total Price:{" "}</p>
                        </div>
                        <div>
                          <p id={styles.schedulePrice1}><strong>NGN</strong> {totalPrice.toLocaleString()}</p>
                        </div>
                      for {numberOfDays}{" "}
                      {numberOfDays === 1 ? "night" : "nights"}
                      </div>
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
        
        <ReviewRating />
      </div>
    </div>
  );
};
