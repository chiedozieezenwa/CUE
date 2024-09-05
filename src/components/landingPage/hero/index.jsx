import design from './hero.module.css'
import {hero1, hero2, hero3, plane, slider1, slider10, slider11, slider2, slider3, slider4, slider5, slider7, slider8, slider9} from '../../../assets/images'
import { Button } from '../../button';
import { useEffect, useState } from 'react';
import {motion} from "framer-motion"

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [hero1, slider1, hero2, slider4, hero3, slider2, slider3, slider5, slider7, slider8, slider9, slider10, slider11];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
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

  const featuresVariants = {
    hide: {
      x: -40,
      y: -20,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div className={design.container} variants={heroVariants}
    initial={"hide"}
    exit={"hide"}
    whileInView={"show"}
    >
      <motion.section className={design["left-section"]} variants={featuresVariants}
          initial="hide"
          whileInView="show"
          exit="hide">
        <div>
          <p className={design["header-txt"]}>
            A Step To An Unforgetable Journey And Experience
          </p>
          <p className={design["body-txt"]}>
            Organize hotels, rides and map your trips in a free travel app
            designed for stress free vacation planning.
          </p>

          <Button
            content="Get Started"
            className={design["hero-btn"]}
            link='/disc'
          />
        </div>
      </motion.section>

      <section className={design["right-section"]}>
        <div className={design["left-col"]}>
          <img
            src={images[currentImageIndex]}
            alt="hero img"
            className={`${design.grid} ${design.active}`}
          />
          <img
            src={images[(currentImageIndex + 1) % images.length]}
            alt="hero img"
            className={`${design.grid} ${design.active}`}
          />
        </div>
        <div className={design["right-col"]}>
          <img
            src={images[(currentImageIndex + 2) % images.length]}
            alt="hero img"
            className={`${design.grid} ${design.active}`}
          />
        </div>

        <div className={design["airplane-container"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="273"
            height="272"
            viewBox="0 0 273 272"
            fill="none"
            className={design["airplane-path"]}
          >
            <path
              d="M272.199 271.702L238.166 119.163L225.51 85.3329V85.3329C194.397 39.9622 144.318 11.2262 89.4469 7.25766L0.503888 0.824865"
              stroke="#5D3BE9"
              strokeDasharray="20 20"
            />
          </svg>
          <img src={plane} alt="Airplane" className={design["airplane-icon"]} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="320"
            height="213"
            viewBox="0 0 320 213"
            fill="none"
            className={design["airplane-path2"]}
          >
            <path
              d="M0.102014 211.934L155.998 209.652L191.601 204.146V204.146C242.19 182.924 280.346 139.798 295.244 86.9992L319.481 1.10136"
              stroke="#5D3BE9"
              strokeDasharray="20 20"
            />
          </svg>
        </div>
      </section>
    </motion.div>
  );
}