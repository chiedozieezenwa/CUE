import { useState, useEffect } from "react";
import design from "./design.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Destination } from "../../../components";

export const DestinationCarousel = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const url = "https://cuedemo.onrender.com/api/v1/destinations";

    fetch(url)
      .then((response) => {
        return response.json();
      })

      .then((response) => {
        console.log("fetch response: ", response);
        console.log("fetch response data: ", response.data.destinations);
        console.log(response, "rrr");

        setDestinations(response.data.destinations || []);
      })

      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }, []);

  console.log("Destinations State:", destinations[0]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchMove: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={design.exploreDiscover}>
      <p>Popular Destinations</p>
      {
        <Slider {...settings} className={design.discoveryHomeCards}>
          {destinations.length > 0 ? (
            destinations
              .slice()
              .map((destination, index) => (
                <Destination
                  key={index}
                  hasTag={true}
                  destinationImage={destination.image_url}
                  subject={destination.name}
                  name={destination.name}
                  title={destination.title}
                  description={destination.state}
                  rating={destination.ratingS}
                  review={destination.review}
                  destinationImg={destination.destinationImg}
                />
              ))
          ) : (
            <p>No destinations to display</p>
          )}
        </Slider>
      }
    </div>
  );
};
