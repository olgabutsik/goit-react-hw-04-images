import { useEffect } from 'react';
import css from './Modal.module.css';

export function Modal({ largeImageURL, onCloseModal }) {
  useEffect(() => {
    const onCloseByEsc = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };

    window.addEventListener('keydown', onCloseByEsc);
    return () => window.removeEventListener('keydown', onCloseByEsc);
  }, [onCloseModal]);

  const handleClick = e => {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  };

  return (
    <div className={css.Overlay} onClick={handleClick}>
      <div className={css.Modal}>
        <img src={largeImageURL} alt="Large" />
      </div>
    </div>
  );
}
