import { NavLink } from "react-router-dom";
import design from "./sidenav.module.css";
import { logo } from "../../assets/images";
import { adminIcon, dashboardIcon, lodgingIcon, userIcon } from "../../assets/icons/sideIcons";

export const Sidenav = () => {
  return (
    <div className={design["sidenav-container"]}>
      <nav className={design.sideitems}>
        <div className={design.navlogo}>
          <NavLink to="/admin/dashboard">
            <img src={logo} alt="Logo Image" />
          </NavLink>
        </div>
        <div className={design.sidelinks}>
          <NavLink 
            to="/admin/dashboard" 
            className={({ isActive }) => isActive ? `${design.linkitem} ${design.active}` : design.linkitem}
          >
            <img src={dashboardIcon} alt="Dashboard Icon" /> Dashboard
          </NavLink>
          <NavLink 
            to="/admin/management" 
            className={({ isActive }) => isActive ? `${design.linkitem} ${design.active}` : design.linkitem}
          >
            <img src={adminIcon} alt="Admin Icon" /> Admin Management
          </NavLink>
          <NavLink 
            to="/admin/user" 
            className={({ isActive }) => isActive ? `${design.linkitem} ${design.active}` : design.linkitem}
          >
            <img src={userIcon} alt="User Icon" /> User
          </NavLink>
          <NavLink 
            to="/admin/lodge" 
            className={({ isActive }) => isActive ? `${design.linkitem} ${design.active}` : design.linkitem}
          >
            <img src={lodgingIcon} alt="Lodging Icon" /> Lodging
          </NavLink>
          <NavLink 
            to="/admin/rental" 
            className={({ isActive }) => isActive ? `${design.linkitem} ${design.active}` : design.linkitem}
          >
            <img src={lodgingIcon} alt="Lodging Icon" /> Rental
          </NavLink>
        </div>
      </nav>
      <footer className={design.Sidebar_footer}>
        <NavLink to="/logout" className={design.logout}>Log out</NavLink>
      </footer>
    </div>
  );
};
