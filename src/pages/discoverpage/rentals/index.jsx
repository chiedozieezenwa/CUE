import { calender } from "../../../assets";
import { Button } from "../../../components";
import design from "./design.module.css";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const getOrdinalSuffix = (day) => {
  if (day >= 11 && day <= 13) {
    return "th";
  }
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

const formatDateWithSuffix = (date) => {
  if (!date) return "";
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" });
  return `${day}${getOrdinalSuffix(day)} ${month}`;
};

export const Rentals = () => {
  const [location, setLocation] = useState("Fetching location...");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          )
            .then((response) => response.json())
            .then((data) => {
              setLocation(data.address.state || "Location not found");
            })
            .catch(() => {
              setLocation("Unable to retrieve location");
            });
        },
        () => {
          setLocation("Location permission denied");
        }
      );
    } else {
      setLocation("Geolocation is not supported by this browser.");
    }
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };


  return (
    <div className={design.container}>
      <div className={design.containerRental}>
        <div className={design.containerRentals}>
          <p className={design.containerDate} id={design.leaving}>
            Leaving from
          </p>
          <p className={design.containerTime} id={design.leaving}>
            {" "}
            {location}
          </p>
        </div>
        <div className={design.containerRentals1}>
          <div className="App" style={{ marginBottom: "20px" }}>
            <p className={design.containerDate} id={design.date1}>
              {" "}
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
              {" "}
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
        {selectedDate && (
        <div>
          <h4>You selected the date:</h4>
          <p>{formatDateWithSuffix(selectedDate)}</p>
        </div>
      )}
        <Button content="Search" className={design.BTN} />
      </div>
    </div>
  );
};
