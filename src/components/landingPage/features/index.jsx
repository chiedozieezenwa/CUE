import { IoCarSportOutline } from "react-icons/io5";
import design from "./features.module.css";
import { PiBuildingApartment } from "react-icons/pi";
import { CiCalendarDate } from "react-icons/ci";
import { planImg, ride, stay } from "../../../assets/images/features";
import { useEffect, useState } from "react";

export const Keyfeatures = () => {
  const [carousel, setCarousel] = useState(0);

  const images = [ride, stay, planImg];

  useEffect(() => {
    const interval = setInterval(() => {
      setCarousel((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={design.container}>
      <div className={design.title}>
        <p>Key Features</p>
        <p>We offer the best services</p>
      </div>

      <div className={design.main}>
        <section className={design.left_section}>
          <div className={design.timeline}>
            <div className={design.step}>
              <div className={design.circle}>01</div>
              <div className={design.line}></div>
            </div>
            <div className={design.step}>
              <div className={design.circle}>02</div>
              <div className={design.line}></div>
            </div>
            <div className={design.step}>
              <div className={design.circle}>03</div>
            </div>
          </div>

          <div className={design.cards}>
            <div className={design.card}>
              <div className={design.Cardicon}>
                <IoCarSportOutline className={design.react_icon} />
              </div>
              <div className={design.cardText}>
                <p>Book A Ride</p>
                <p>
                  Experience Luxury Behind The Wheel With Our Easy Car Booking
                </p>
              </div>
            </div>
            <div className={design.card}>
              <div className={design.Cardicon}>
                <PiBuildingApartment className={design.react_icon} />
              </div>
              <div className={design.cardText}>
                <p>Find Your Perfect Stay</p>
                <p>Find Apartments Tailored To your Highest Standards.</p>
              </div>
            </div>
            <div className={design.card}>
              <div className={design.Cardicon}>
                <CiCalendarDate className={design.react_icon} />
              </div>
              <div className={design.cardText}>
                <p>Plan your trip</p>
                <p>Easily plan and manage your trip.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={design.right_section}>
          <div className={design.rightUp}>
            <img
              src={images[carousel]}
              alt="Book a Ride"
            />
            <img
              src={images[(carousel + 1) % images.length]}
              alt="Book Hotel"
            />
          </div>
          <div className={design.rightdown}>
            <img
              src={images[(carousel + 2) % images.length]}
              alt="Plan a trip"
            />
          </div>
        </section>
      </div>
    </div>
  );
};
