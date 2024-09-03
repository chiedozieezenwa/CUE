import design from "./design.module.css";
import { useState } from "react";

const Ratings = ({ rating, onRatingChange }) => {
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleMouseEnter = (index) => {
    setHoveredRating(index + 1);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  const handleClick = (index) => {
    onRatingChange(index + 1);
  };

  return (
    <div className={design.rating}>
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={
            index < (hoveredRating || rating) ? `${design.icon} ${design.filled}` : design.icon
          }
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Ratings;
