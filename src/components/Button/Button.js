import css from './Button.styled.css';
import PropTypes from 'prop-types';

export const Button = ({ onLoad }) => {
  return (
    <button type="button" onClick={onLoad} className={css.Button}>
      Load more...
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
