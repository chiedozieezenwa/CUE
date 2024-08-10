import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export const Button = ({content, className, onClick, link, img}) => {

  return (
    <Link to={link}>
      <button onClick={onClick} className={className}>
      <img src={img} alt="" />
        {content}
      </button>
    </Link>
  );};

Button.propTypes = {
  content: PropTypes.string.isRequired, // Button content
  className: PropTypes.string, // Additional classes to be applied
  onClick: PropTypes.func, // Function to handle button click
  link: PropTypes.string.isRequired,
  img: PropTypes.string,
};

Button.defaultProps = {
  className: "",
  onClick: () => {},
  link: "/", // Default link if not provided
  img: null,
};