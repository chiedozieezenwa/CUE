import { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import design from "./navbar.module.css";
import Logo from "../../../assets/images/Logo.png";
import searchIcon from "../../../assets/icons/search.svg";
import divider from "../../../assets/images/divider.png";
import { Button } from "../../button";
import { Signup, Signin } from "../../../pages/Onboarding";
import { PopupContext } from "../../../context/popupContext";
import { SearchContext } from "../../../context/searchContext";
import { hamburgericon } from "../../../assets";

export const Navbar = () => {
  const { currentPopup, openPopup, closePopup } = useContext(PopupContext);
  const { setQuery, setSearchResults } = useContext(SearchContext);
  const [searchInput, setSearchInput] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false)

  const toggleIsOpen = () => {
    setIsOpen (!isOpen)
  }

  // function to get active class for NavLink
  const getActiveClass = ({ isActive }) => isActive ? design.active : undefined;

  // Handlers to open specific popups
  const handleLoginClick = () => openPopup('signin');
  const handleSignupClick = () => openPopup('signup');

  // Handle search form submission
  const handleSearch = async (e) => {
    e.preventDefault();
    
    
    setQuery(searchInput);

    // Fetch results based on current page
    try {
      let endpoint = '';
      if (location.pathname.includes('hotels')) {
        endpoint = `https://cue-api-3tyr.onrender.com/api/v1/hotels?location=${searchInput}`;
      } else if (location.pathname.includes('rentals')) {
        endpoint = `https://cue-api-3tyr.onrender.com/api/v1/rentals?location=${searchInput}`;
      }
      
      const response = await fetch(endpoint);
      const data = await response.json();

      if (response.ok) {
        setSearchResults(data.data.hotels || data.data.rentals || []); 
        navigate(location.pathname); 
      } else {
        console.error('Search failed:', data.message);
      }
    } catch (error) {
      console.error('An error occurred while fetching the search results:', error);
    }
  };

  return (
    <header className={design.container}>
      <nav className={design.nav}>
        {/* Left Section */}
        <section className={design["left-section"]}>
          <img src={Logo} alt="Logo Image" />
          <span className={design.divider}>
            <img src={divider} alt="Divider Line" />
          </span>
        </section>

        {/* Middle Section */}
        <section className={design["middle-section"]}>
          <ul className={design.links}>
            <li>
              <NavLink to="/" className={getActiveClass}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/itineary" className={getActiveClass}>Trip Itinerary</NavLink>
            </li>
            <li>
              <NavLink to="/disc" className={getActiveClass}>Discover</NavLink>
            </li>
            <li>
              <NavLink to="/ai" className={getActiveClass}>AI Assistant</NavLink>
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
              <img src={searchIcon} alt="Search Icon" className={design["search-icon"]} />
            
            </button>
          </form>
        </section>

        {/* Onboard Section */}
        <section className={design["onboard"]}>
          <span className={design.divider}>
            <img src={divider} alt="Divider Line" />
          </span>
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
           <div className={`${design['menu-icon']} ${isOpen ? design['open'] : ''}`}>
            <img src={hamburgericon} alt="" className={design.togglemenu} onClick={toggleIsOpen}/>
          </div>
        </section>

       
        <ul className={`${design["nav-links"]} ${isOpen ? 'active' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Conditionally Render Popups */}
      {currentPopup === 'signup' && <Signup onClose={closePopup} />}
      {currentPopup === 'signin' && <Signin onClose={closePopup} />}
    </header>
  );
};
