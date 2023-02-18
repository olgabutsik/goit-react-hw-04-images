import css from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ onLoad }) => {
  return (
    <button type="button" onClick={onLoad} className={css.Button}>
      Load more...
    </button>
  );
};

Button.propTypes = {
  onLoad: PropTypes.func.isRequired,
};
