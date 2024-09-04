import design from './design.module.css';
import { Navbar, Footer } from '../../../components';
// import { Tab } from '../../pages/discoverpage/nav'; // Import the Tab directly
import { Outlet, useLocation } from 'react-router-dom'; // Import useLocation to track route
import SearchAll from '../searchall';
import { Tab } from '../nav';

export const Disc = () => {
  const location = useLocation(); // Get the current location object

  // Conditionally check if the current route is Rentals or Lodging
  const hideSearchAll = location.pathname.includes("/disc/discovertab/rentals") || 
                        location.pathname.includes("/disc/discovertab/lodging");

  return (
    <>
      <div className={design.container}>
        <Navbar />
        <Tab />  {/* Render the Tab only once */}
        
        {/* Conditionally render SearchAll based on the current path */}
        {!hideSearchAll && <SearchAll />}
        
        {/* This Outlet will handle showing Rentals or Lodging */}
        <Outlet />
        
        <Footer />
      </div>
    </>
  );
};
