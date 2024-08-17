import { useContext, useState } from "react";
import { SearchBar } from "../../../components/searchbar"
import design from "./design.module.css"
import { UserContext } from "../../../context/appContext";
import { FadeLoader } from "react-spinners";
import { airBnB, Apartments, bathhub, bedAndBreakfast, Hotels, panicButton, Resorts, smartHome, surveillance, tv, Villas, waves, wifi } from "../../../assets";
import { items } from "./data";

export const Lodging = () => {
  const {loading} = useContext(UserContext);
  const [count, setCount] = useState (1)

  const decrement = () => {
    setCount (count - 1)
  }

  const increment = () => {
    setCount (count + 1)
  }

  return (
    <div className={design.container}>
      <SearchBar />
      {loading && (
        <div className={design.loaderOverlay}>
          <FadeLoader
            color="#1516a5"
            visible={true}
            loading={loading}
            height={15}
            width={5}
            radius={2}
            margin={2}
          />
        </div>
      )}

      <div className={design.bookingCont}>
        <div className={design.filter}>
          <p>Filters</p>
          <p className={design.filterReset}>Reset</p>
        </div>

        <div className={design.bookingSection}>       
          <form className={design.bookingForm}>

            {/* Price Range */}
            <div className={design.priceRange}>
              <p>Price</p>
              <div>
                <input type="text" placeholder="From"/>
                <input type="text" placeholder="To"/>
              </div>
            </div>

            {/* Property Type */}

            <div className={design.propertyType}>
              <p>Property Type</p>
              <div className={design["proptypelist"]}>
                <div>
                  <img src={bedAndBreakfast} alt="bNb" />
                  <p>Bed and Breakfast</p>
                </div>
                <div>
                  <img src={Apartments} alt="Apartments" />
                  <p>Apartments</p>
                </div>
                <div>
                  <img src={airBnB} alt="Air BNB" />
                  <p>Airbnb</p>
                </div>
                <div>
                  <img src={Villas} alt="Villas" />
                  <p>Villas</p>
                </div>
                <div>
                  <img src={Hotels} alt="Hotels" />
                  <p>Hotels</p>
                </div>
                <div>
                  <img src={Resorts} alt="Resorts" />
                  <p>Resorts</p>
                </div>
              </div>
            </div>

            {/* Number of guests */}
            <div className={design.numOfGuests}>
              <p>Number of Guests</p>
              <div>
                <button onClick={decrement}>--</button>
                <p>{count}</p>
                <button onClick={increment}>+</button>
              </div>
            </div>

            {/* Convenience */}

            <div className={design.convenience}>
              <p>Property Type</p>
              <div className={design["convenienceList"]}>
                <div>
                  <img src={waves} alt="bNb" />
                  <p>Beach View</p>
                </div>
                <div>
                  <img src={tv} alt="Apartments" />
                  <p>TV</p>
                </div>
                <div>
                  <img src={wifi} alt="Wifi" />
                  <p>Wi-Fi</p>
                </div>
                <div>
                  <img src={panicButton} alt="Panic Button" />
                  <p>Panic Button</p>
                </div>
                <div>
                  <img src={smartHome} alt="Smart Home" />
                  <p>Smart Home</p>
                </div>
                <div>
                  <img src={surveillance} alt="Surveillance Features" />
                  <p>Surveillance</p>
                </div>
                <div>
                  <img src={bathhub} alt="Outdoor Bathhub" />
                  <p>Outdoor Baths</p>
                </div>
              </div>
            </div>

            <div className={design.submitBtn}>
              <button>Apply</button>
            </div>
          </form>

          <section className={design.bookingReview}>
            {items.map(item => (
              <div key={item.id} className={design.hotelCard}>
                <img src={item.backgroundImg} alt="" />
                <p className={design.titleField}>{item.title}</p>
                <p className={design.location}>{item.location}</p>
                <p className={design.review}>{item.rating}</p>
                <p className={design.status}>{item.status}</p>
                <p className={design.price}>{item.price}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
