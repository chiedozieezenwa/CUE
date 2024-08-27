import { NavLink } from "react-router-dom";
import design from "./sidenav.module.css";
import { logo } from "../../assets/images";
import { MdDashboard } from "react-icons/md";
import { RiHotelLine, RiShieldUserLine } from "react-icons/ri";
import { PiUsersThreeLight } from "react-icons/pi";
import { IoCarSportOutline } from "react-icons/io5";
import { BiLogOut } from "react-icons/bi";

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
            <MdDashboard />
            Dashboard
          </NavLink>
          <NavLink 
            to="/admin/management" 
            className={({ isActive }) => isActive ? `${design.linkitem} ${design.active}` : design.linkitem}
          >
            <RiShieldUserLine /> Admin Management
          </NavLink>
          <NavLink 
            to="/admin/user" 
            className={({ isActive }) => isActive ? `${design.linkitem} ${design.active}` : design.linkitem}
          >
            <PiUsersThreeLight /> User
          </NavLink>
          <NavLink 
            to="/admin/lodge" 
            className={({ isActive }) => isActive ? `${design.linkitem} ${design.active}` : design.linkitem}
          >
            <RiHotelLine /> Lodging
          </NavLink>
          <NavLink 
            to="/admin/rental" 
            className={({ isActive }) => isActive ? `${design.linkitem} ${design.active}` : design.linkitem}
          >
            <IoCarSportOutline /> Rental
          </NavLink>
        </div>
      </nav>
      <footer className={design.Sidebar_footer}>
        <NavLink to="/" className={design.logout}>
        <BiLogOut />
        Log out</NavLink>
      </footer>
    </div>
  );
};
