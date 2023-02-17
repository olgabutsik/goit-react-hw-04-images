import { Component } from 'react';
import css from './Modal.styled.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onCloseByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseByEsc);
  }

  onCloseByEsc = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className={css.Overlay} onClick={this.handleClick}>
        <div className={css.Modal}>
          <img src={this.props.largeImageURL} alt="Large" />
        </div>
      </div>
    );
  }
}
