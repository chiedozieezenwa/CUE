import design from "./design.module.css"

const Rating = ({ rating }) => {
  // Create an array with a length equal to the rating count
  const stars = Array.from({ length: 5 }, (_, index) => index < rating);

  return (
    <div className={design.rating}>
      {stars.map((isFilled, index) => (
        <span key={index} className={isFilled ? 'icon filled' : 'icon'}>
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;