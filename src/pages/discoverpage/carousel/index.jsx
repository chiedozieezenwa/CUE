import design from './design.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Destination } from "../../../components";


export const DestinationCarousel = ({ destinationLists }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
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
      <Slider {...settings} className={design.discoveryHomeCards}>
        {destinationLists.map((destinationList, index) => (
          <Destination
            key={index}
            destinationImage={destinationList.destinationImage}
            subject={destinationList.subject}
            title={destinationList.title}
            description={destinationList.description}
            rating={destinationList.rating}
            review={destinationList.review}
            destinationImg={destinationList.destinationImg}
          />
        ))}
      </Slider>
    </div>
  );
};
