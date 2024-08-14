import { useContext } from "react";
import design from "./navbar.module.css";
import Logo from "../../../assets/images/Logo.png";
import searchIcon from "../../../assets/icons/search.svg";
import divider from "../../../assets/images/divider.png";
import { NavLink } from "react-router-dom";
import { Button } from "../../button";
import { Signup, Signin } from "../../../pages/Onboarding";
import { UserContext } from "../../../context/appContext";

export const Navbar = () => {
  const { isSignupOpen, toggleSignupPopup, isSigninOpen, toggleSigninPopup } =
    useContext(UserContext);

  return (
    <header className={design.container}>
      <nav className={design.nav}>
        <section className={design["left-section"]}>
          <img src={Logo} alt="Logo Image" />
          <span className={design.divider}>
            <img src={divider} alt="divider-line" />
          </span>
        </section>

        <section className={design["middle-section"]}>
          <ul className={design.links}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? design.active : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/itineary"
                className={({ isActive }) =>
                  isActive ? design.active : undefined
                }
              >
                Trip Itinerary
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/disc"
                className={({ isActive }) =>
                  isActive ? design.active : undefined
                }
              >
                Discover
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ai"
                className={({ isActive }) =>
                  isActive ? design.active : undefined
                }
              >
                AI Assistant
              </NavLink>
            </li>
          </ul>

          <div className={design["search-bar"]}>
            <input type="text" placeholder="Discover by location" />
            <button className={design["search-icon-button"]}>
              <img
                src={searchIcon}
                alt="Search"
                className={design["search-icon"]}
              />
            </button>
          </div>
        </section>

        <section className={design["onboard"]}>
          <span className={design.divider}>
            <img src={divider} alt="divider-line" />
          </span>
          <Button
            onClick={toggleSigninPopup}
            content="Log in"
            className={design["logIn-btn"]}
          />
          <Button
            onClick={toggleSignupPopup}
            content="Sign up"
            className={design["signUp-btn"]}
          />
        </section>
      </nav>

      {isSignupOpen && <Signup />}
      {isSigninOpen && <Signin />}
    </header>
  );
};
