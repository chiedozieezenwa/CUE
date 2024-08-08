import design from './navbar.module.css'
import Logo from '../../../assets/images/Logo.png'
import searchIcon from '../../../assets/icons/search.svg'
import divider from '../../../assets/images/divider.png'
import { Link } from 'react-router-dom';
import { Button } from '../../button';

export const Navbar = () => {
  return (
    <header className={design.container}>
      <nav className={design.nav}>
        <section className={design["left-section"]}>
          <img src={Logo} alt="Logo Image" />
          <span><img src={divider} alt="divider-line" /></span>
        </section>

        <section className={design["middle-section"]}>
          <ul className={design.links}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Travel Guide</Link>
            </li>
            <li>
              <Link to="/">Discover</Link>
            </li>
            <li>
              <Link to="/">Trip Itinerary</Link>
            </li>
          </ul>

          <div className={design["search-bar"]}>
            <input type="text" placeholder="Discover by location" />
            <span className={design["search-icon"]}>
              <img src={searchIcon} alt="Search" />
            </span>
          </div>
        </section>

        <section className={design["onboard"]}>
          <span><Link to="/login">Log in</Link></span>
        </section>
        <Button 
          content="Sign up"
          className="signup-btn"
        />
      </nav>
    </header>
  );
}
