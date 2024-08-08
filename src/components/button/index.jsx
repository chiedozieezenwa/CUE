import PropTypes from 'prop-types'

export const Button = ({content, className, onClick}) => {

  return (
    <button onClick={onClick} className={className}>
        {content}
    </button>
)};

Button.propTypes = {
  content: PropTypes.string.isRequired, // Button content
  className: PropTypes.string, // Additional classes to be applied
  onClick: PropTypes.func, // Function to handle button click
};

Button.defaultProps = {
  className: "",
  onClick: () => {},
};