import { hotelIcon, rentalIcon } from '../../../assets';
import design from './discovernav.module.css'
import PropTypes from 'prop-types'

export const Tab = ({ activeSection, setActiveSection }) => {

    const handleLinkClick = (event, section) => {
      event.preventDefault();
      setActiveSection(section);
    };

  return (
    <nav className={design.container}>
      <ul className={design.navlist}>
        <li
          className={`${design.navlistitem} ${
            activeSection === "rentals" ? design.active : ""
          }`}
        >
          <img src={rentalIcon}/>
          <a href="/" onClick={(event) => handleLinkClick(event, "rentals")}>
            Car Rentals
          </a>
        </li>
        <li
          className={`${design.navlistitem} ${
            activeSection === "lodging" ? design.active : ""
          }`}
        >
          <img src={hotelIcon} />
          <a href="/" onClick={(event) => handleLinkClick(event, "lodging")}>
            Lodging
          </a>
        </li>
      </ul>
    </nav>
  );
};

Tab.propTypes = {
    activeSection: PropTypes.string.isRequired,
    setActiveSection: PropTypes.func.isRequired,
  };