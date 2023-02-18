import css from './Loader.module.css';
import { Triangle } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className={css.Backdrop}>
      <Triangle
        height="80"
        width="80"
        color="#ffaf4a"
        ariaLabel="triangle-loading"
        className={css.Loader}
        visible={true}
      />
    </div>
  );
};
