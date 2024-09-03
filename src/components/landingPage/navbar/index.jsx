import { useContext, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import design from "./navbar.module.css";
import Logo from "../../../assets/images/Logo.png";
import searchIcon from "../../../assets/icons/search.svg";
import divider from "../../../assets/images/divider.png";
import avatarImage from "../../../assets/images/avatar.png"; 
import { Button } from "../../button";
import { Signup, Signin } from "../../../pages/Onboarding";
import { PopupContext } from "../../../context/popupContext";
import { SearchContext } from "../../../context/searchContext";
import { hamburgericon } from "../../../assets";

import axios from "axios";

export const Navbar = () => {
  const { currentPopup, openPopup, closePopup } = useContext(PopupContext);
  const { setQuery, setSearchResults } = useContext(SearchContext);
  const [searchInput, setSearchInput] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown menu
=======



  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };


  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const getActiveClass = ({ isActive }) =>
    isActive ? design.active : undefined;


  // function to get active class for NavLink
 

  // Handlers to open specific popups

  const handleLoginClick = () => openPopup("signin");
  const handleSignupClick = () => openPopup("signup");

  const handleSearch = async (e) => {
    e.preventDefault();

    setQuery(searchInput);

    try {
      let endpoint = "";
      if (location.pathname.includes("hotels")) {

        endpoint = `https://cue-backend.onrender.com/api/v1/hotels?location=${searchInput}`;
      } else if (location.pathname.includes("rentals")) {
        endpoint = `https://cue-backend.onrender.com/api/v1/rentals?location=${searchInput}`;

      
      }

      const response = await fetch(endpoint);
      const data = await response.json();

      if (response.ok) {
        setSearchResults(data.data.hotels || data.data.rentals || []);
        navigate(location.pathname);
      } else {
        console.error("Search failed:", data.message);
      }
    } catch (error) {
      console.error(
        "An error occurred while fetching the search results:",
        error
      );

    }
  };

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = async () => {
    try {
      await axios.post("https://cue-backend.onrender.com/api/v1/users/logout");
      localStorage.setItem("currentUser", null);
      navigate("/disc");
    } catch (error) {
      console.log(error);

    }
  };

  return (
    <header className={design.container}>
      <nav className={design.nav}>
        {/* Left Section */}
        <section className={design["left-section"]}>

          <Link to="/">
            <img src={Logo} alt="Logo Image" className={design.logoImg} />

          </Link>
          <span className={design.divider}>
            <img src={divider} alt="Divider Line" />
          </span>
        </section>

        {/* Middle Section */}
        <section className={design["middle-section"]}>
          <ul className={design.links}>
            <li>
              <NavLink to="/" className={getActiveClass}>
                Home
              </NavLink>
            </li>
            <li>

              <NavLink to="/itinerary" className={getActiveClass}>

                Trip Itinerary
              </NavLink>
            </li>
            <li>
              <NavLink to="/disc" className={getActiveClass}>
                Discover
              </NavLink>
            </li>
            <li>
              <NavLink to="/ai" className={getActiveClass}>
                AI Assistant
              </NavLink>
            </li>
          </ul>

          <form onSubmit={handleSearch} className={design["search-bar"]}>
            <input
              type="text"
              placeholder="Discover by location"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button type="submit" className={design["search-icon-button"]}>
              <img
                src={searchIcon}
                alt="Search Icon"
                className={design["search-icon"]}
              />
            </button>
          </form>
        </section>

        {/* Onboard Section */}
        <section className={design["onboard"]}>

          {currentUser ? (
            <>
              <div className={design["profile-container"]} onClick={toggleDropdown}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKgUUpHpc-JwcJiRLScAepL-T3oeaxR8T5A&s"
                  alt="User Avatar"
                  className={design.avatar}
                />
                {dropdownOpen && (
                  <div className={design.dropdownMenu}>
                    <Link to="/settings" className={design.dropdownItem}>Profile</Link>
                    <Link to="/profile" className={design.dropdownItem}>Settings</Link>
                    <Link onClick={handleLogout} className={design.dropdownItem}>Logout</Link>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Button
                onClick={handleLoginClick}
                content="Log in"
                className={design["logIn-btn"]}
              />
              <Button
                onClick={handleSignupClick}
                content="Sign up"
                className={design["signUp-btn"]}
              />
            </>
          )}

          <div className={design["menu-icon"]} onClick={toggleIsOpen}>
            <img
              src={hamburgericon}
              alt="Menu Icon"
              className={design.togglemenu}
            />
          </div>
        </section>

        {/* Mobile Menu */}
        <ul
          className={`${design["nav-links"]} ${isOpen ? design["active"] : ""}`}
        >
          <li>
            <NavLink to="/" onClick={toggleIsOpen} className={getActiveClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink

              to="/itinerary"

              onClick={toggleIsOpen}
              className={getActiveClass}
            >
              Trip Itinerary
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/disc"
              onClick={toggleIsOpen}
              className={getActiveClass}
            >
              Discover
            </NavLink>
          </li>
          <li>
            <NavLink to="/ai" onClick={toggleIsOpen} className={getActiveClass}>
              AI Assistant
            </NavLink>
          </li>

          {currentUser ? (
            <li>
              <div className={design["profile-container"]} onClick={toggleDropdown}>
                <img
                  src={avatarImage}
                  alt="User Avatar"
                  className={design.avatar}
                />
                {dropdownOpen && (
                  <div className={design.dropdownMenu}>
                    <Link to="/profile" className={design.dropdownItem}>Profile</Link>
                    <Link to="/settings" className={design.dropdownItem}>Settings</Link>
                    <button onClick={handleLogout} className={design.dropdownItem}>Logout</button>
                  </div>
                )}
              </div>
            </li>
          ) : (
            <>
              <li>
                <Button
                  onClick={() => {
                    handleLoginClick();
                    toggleIsOpen();
                  }}
                  content="Log in"
                  className={design["TlogIn-btn"]}
                />
              </li>
              <li>
                <Button
                  onClick={() => {
                    handleSignupClick();
                    toggleIsOpen();
                  }}
                  content="Sign up"
                  className={design["TsignUp-btn"]}
                />
              </li>
            </>
          )}

        </ul>
      </nav>

      {/* Conditionally Render Popups */}
      {currentPopup === "signup" && <Signup onClose={closePopup} />}
      {currentPopup === "signin" && <Signin onClose={closePopup} />}
    </header>
  );
};
