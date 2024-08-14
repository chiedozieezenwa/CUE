import { calender } from "../../assets";
import { Button, Footer, Navbar } from "../../components";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./styles.module.css";

export const Trip = ({ data = [] }) => {
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState(data);

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);

    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(searchQuery)
    );

    setFilteredResults(filteredData);
  };

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Search Query:", query);
  //   console.log("Start Date:", startDate);
  //   console.log("End Date:", endDate);

    
  // };


  return (
    <div>
      <Navbar />
      <div className={styles.plan}>
        <h2>Plan A New Trip</h2>
        <div>
          <label className={styles.where2Label} htmlFor="searchInput">
            Where to?
          </label>
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder=" e.g. Kadunna, Enugu"
            className={styles.planInput}
          />
          <ul>
            {filteredResults.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
       

        <div className={styles.calenderDate}>
          <div>
            <p  className={styles.dateLabel}>
              <img src={calender} alt="" /> Start Date
            </p>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Start Date"
              className={styles.datePicker}
            />
          </div>
          <div>
            <p className={styles.dateLabel}>
              <img src={calender} alt="" /> End Date
            </p>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              placeholderText="End Date"
              className={styles.datePicker}
            />
          </div>
        </div>

        <Button content="Start Planning" link="/itineary" className={styles.planBTN}  type="submit" />
      </div>
      <Footer />
    </div>
  );
};
