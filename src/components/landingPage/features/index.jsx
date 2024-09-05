import { IoCarSportOutline } from "react-icons/io5";
import design from "./features.module.css";
import { PiBuildingApartment } from "react-icons/pi";
import { CiCalendarDate } from "react-icons/ci";
import { planImg, ride, stay } from "../../../assets/images/features";
import { useEffect, useState } from "react";
import {motion} from "framer-motion"

export const Keyfeatures = () => {
  const [carousel, setCarousel] = useState(0);

  const images = [ride, stay, planImg];

  useEffect(() => {
    const interval = setInterval(() => {
      setCarousel((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const heroVariants = {
    hide: {
      opacity: 0,
      y: -150,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        stiffness: 200,
      },
    },
  };

  const serviceVariants = {
    hide: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div className={design.container} variants={heroVariants}
    initial={"hide"}
    exit={"hide"}
    whileInView={"show"}>
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
            <motion.div className={design.card}variants={serviceVariants}
          initial="hide"
          whileInView="show"
          exit="hide">
              <div className={design.Cardicon}>
                <IoCarSportOutline className={design.react_icon} />
              </div>
              <div className={design.cardText} > 
                <p>Book A Ride</p>
                <p>
                  Experience Luxury Behind The Wheel With Our Easy Car Booking
                </p>
              </div>
            </motion.div>
            <motion.div className={design.card} variants={serviceVariants}
          initial="hide"
          whileInView="show"
          exit="hide">
              <div className={design.Cardicon}>
                <PiBuildingApartment className={design.react_icon} />
              </div>
              <div className={design.cardText}>
                <p>Find Your Perfect Stay</p>
                <p>Find Apartments Tailored To your Highest Standards.</p>
              </div>
            </motion.div>
            <motion.div className={design.card} variants={serviceVariants}
          initial="hide"
          whileInView="show"
          exit="hide">
              <div className={design.Cardicon}>
                <CiCalendarDate className={design.react_icon} />
              </div>
              <div className={design.cardText}>
                <p>Plan your trip</p>
                <p>Easily plan and manage your trip.</p>
              </div>
            </motion.div>
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
    </motion.div>
  );
};
