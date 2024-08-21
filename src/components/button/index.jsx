// import { id } from 'date-fns/locale';
// import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

// export const Button = ({content, className, onClick, link, img, id}) => {

//   return (
//     <Link to={link}>
//       <button onClick={onClick} className={className} id={id}>
//       <img src={img} alt="" />
//         {content}
//       </button>
//     </Link>
//   );};

// Button.propTypes = {
//   content: PropTypes.string.isRequired, // Button content
//   className: PropTypes.string, // Additional classes to be applied
//   onClick: PropTypes.func, // Function to handle button click
//   link: PropTypes.string.isRequired,
//   img: PropTypes.string,
//   id: PropTypes.string,
// };

// Button.defaultProps = {
//   className: "",
//   onClick: () => {},
//   link: "/", // Default link if not provided
//   img: null,
// };

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Button = ({ content, className, onClick, link, img, id }) => {
  const handleClick = (event) => {
    if (onClick) {
      event.preventDefault(); // Prevent navigation if there's an onClick handler
      onClick();
    }
  };

  if (link) {
    return (
      <Link to={link} className={className} id={id} onClick={handleClick}>
        {img && <img src={img} alt="" />}
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className} id={id}>
      {img && <img src={img} alt="" />}
      {content}
    </button>
  );
};

Button.propTypes = {
  content: PropTypes.string.isRequired, // Button content
  className: PropTypes.string, // Additional classes to be applied
  onClick: PropTypes.func, // Function to handle button click
  link: PropTypes.string, // URL to navigate to
  img: PropTypes.string, // Image source for the button
  id: PropTypes.string, // Button ID
};

// Button.defaultProps = {
//   className: "",
//   onClick: null,
//   link: null,
//   img: null,
//   id: null,
// };
