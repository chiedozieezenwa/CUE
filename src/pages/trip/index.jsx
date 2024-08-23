import { Button, Footer, Navbar } from "../../components";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./styles.module.css";
import { CustomDateInput } from "../../components"; 
import { blackPlus, profile } from "../../assets";

export const Trip = ({ data = [] }) => {
  const [query, setQuery] = useState('Enugu'); 
  const [filteredResults, setFilteredResults] = useState(data);
  const [showDropdown, setShowDropdown] = useState(false); 
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [email, setEmail] = useState('');
  

  const states = [
    { id: 1, name: 'Enugu' },
    { id: 2, name: 'Abuja' },
    { id: 3, name: 'Lagos' },
    { id: 4, name: 'Kaduna' },
  ];

  const handleSearch = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    setQuery(searchQuery);

    const results = states.filter((state) =>
      state.name.toLowerCase().includes(searchQuery)
    );
    setFilteredResults(results);
    setShowDropdown(true); 
  };

  const handleSelect = (name) => {
    setQuery(name);
    setFilteredResults([]); 
    setShowDropdown(false);
  };

  const handleBlur = () => {
    setTimeout(() => setShowDropdown(false), 200); 
  };

  const handleInviteClick = () => {
    setIsInputVisible(prev => !prev); 
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSendInvite = () => {
    console.log(`Sending invite to: ${email}`);
  };

  return (
    <div>
      <Navbar />
      <div className={styles.plan}>
        <h2>Plan A New Trip</h2>

        <div>
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            onFocus={() => setShowDropdown(true)}
            onBlur={handleBlur} 
            placeholder="e.g. Kaduna, Enugu"
            className={styles.planInput}
          />
          {showDropdown && filteredResults.length > 0 && (
            <ul className={styles.dropdownList}>
              {filteredResults.map((item) => (
                <li
                  key={item.id}
                  onClick={() => handleSelect(item.name)}
                  className={styles.dropdownItem}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={styles.calenderDate}>
          <div>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Start Date"
              customInput={<CustomDateInput placeholder="Start Date" />}
              className={styles.datePicker}
            />
          </div>
          <div>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              placeholderText="End Date"
              customInput={<CustomDateInput placeholder="End Date" />}
              className={styles.datePicker}
            />
          </div>
        </div>

        <div className={styles.planInvite}>
          <div>
            <Button
              img={blackPlus}
              content="Invite Trip Mates"
              className={styles.inviteBTN}
              onClick={handleInviteClick}
            />
            {isInputVisible && (
              <div className={styles.emailInputContainer}>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter email address"
                  className={styles.emailInput}
                />
                <Button
                  content="Send Invite"
                  className={styles.sendInviteBTN}
                  onClick={handleSendInvite}
                />
              </div>
            )}
          </div>

          <div>
            <Button
              img={profile}
              content="Friends"
              className={styles.inviteBTN}
              id={styles.invitebtn}
            />
          </div>
        </div>
        <Button
          content="Start Planning"
          link="/itinerary"
          className={styles.planBTN}
          type="submit"
        />
      </div>
      <Footer />
    </div>
  );
};
