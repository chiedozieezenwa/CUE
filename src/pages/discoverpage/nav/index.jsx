import { IoCarSportOutline } from 'react-icons/io5';
import design from './discovernav.module.css'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';
import { RiHotelLine } from 'react-icons/ri';

export const Tab = () => {

  return (
    <nav className={design.container}>
        <NavLink 
            to="/disc/discovertab/rentals" 
            className={({ isActive }) => isActive ? `${design.linkitem} ${design.active}` : design.linkitem}
          >
            <IoCarSportOutline className={design.react_icon}/> Rental
          </NavLink>
        
          <NavLink 
            to="/disc/discovertab/lodging" 
            className={({ isActive }) => isActive ? `${design.linkitem} ${design.active}` : design.linkitem}
          >
            <RiHotelLine className={design.react_icon}/> Lodging
          </NavLink>
    </nav>
  );
};

Tab.propTypes = {
    activeSection: PropTypes.string.isRequired,
    setActiveSection: PropTypes.func.isRequired,
  };