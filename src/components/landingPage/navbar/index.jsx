import { useContext } from "react";
import { NavLink } from "react-router-dom";
import design from "./navbar.module.css";
import Logo from "../../../assets/images/Logo.png";
import searchIcon from "../../../assets/icons/search.svg";
import divider from "../../../assets/images/divider.png";
import { Button } from "../../button";
import { Signup, Signin, Recover } from "../../../pages/Onboarding";
import { PopupContext } from "../../../context/popupContext";

export const Navbar = () => {
  const { currentPopup, openPopup, closePopup } = useContext(PopupContext);

  // function to get active class for NavLink
  const getActiveClass = ({ isActive }) => isActive ? design.active : undefined;

  // Handlers to open specific popups
  const handleLoginClick = () => openPopup('signin');
  const handleSignupClick = () => openPopup('signup');

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

          <div className={design["search-bar"]}>
            <input type="text" placeholder="Discover by location" />
            <button className={design["search-icon-button"]}>
              <img src={searchIcon} alt="Search Icon" className={design["search-icon"]} />
            </button>
          </div>
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
        </section>
      </nav>

      {/* Conditionally Render Popups */}
      {currentPopup === 'signup' && <Signup onClose={closePopup} />}
      {currentPopup === 'signin' && <Signin onClose={closePopup} />}
      {currentPopup === 'Recover' && <Recover onClose={closePopup} />}
    </header>
  );
};
