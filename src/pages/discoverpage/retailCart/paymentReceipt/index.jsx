import { Link } from "react-router-dom";
import design from "./design.module.css";
import { Navbar } from "../../../../components";

export const Receipt = () => {
  return (
    <>
    <Navbar />
    <div className={design.container}>
      <main className={design.mainSection}>
        <section className={design.subSection}>
          <div className={design.header}>
            <p className={design.title}>Customer Receipt</p>
            <p className={design.subHeading}>
              Your reservation is now confirmed!
            </p>
          </div>
          <div className={design.bookDetails}>
            <p>Guest</p>
            <span className={design.span}>Uche Daniels</span>
          </div>
          <div className={design.bookDetails}>
            <p>Lodging Booked</p>
            <span className={design.span}>7 Lugard Apartments, Enugu</span>
          </div>
          <div className={design.bookDetails}>
            <p>Nights</p>
            <span className={design.span}>2</span>
          </div>
          <div className={design.bookDetails}>
            <p>Rentals</p>
            <span className={design.span}>BMW</span>
          </div>
        </section>

        <div className={design.divider}></div>

        <section className={design.subSection}>
          <div className={design.bookDetails}>
            <p>Pick-up</p>
            <p>Check-out</p>
          </div>
          <div className={design.bookDetails}>
            <span className={design.span}>05 SEPT 2024</span>
            <span className={design.span}>06 SEPT 2024</span>
          </div>
          <div className={design.bookDetails}>
            <p>Pick up location</p>
            <span className={design.span}>Enugu International Airport</span>
          </div>
        </section>

        <div className={design.divider}></div>

        <section className={design.subSection}>
          <div className={design.bookDetails}>
            <p>Rental Total</p>
            <span className={design.span}>#130,000</span>
          </div>
          <div className={design.bookDetails}>
            <p>Lodging Total</p>
            <span className={design.span}>#110,000</span>
          </div>
          <div className={design.bookDetails}>
            <span>Total</span>
            <span className={design.total}>#240,000</span>
          </div>
        </section>

        <Link to="/itinerary">
          {" "}
          <button className={design.receiptBtn}>Go to Itinerary</button>
        </Link>
      </main>
    </div>
    </>
  );
};
