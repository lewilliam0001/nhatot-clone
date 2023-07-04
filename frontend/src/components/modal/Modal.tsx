import ClickAwayListener from "@mui/material/ClickAwayListener";
// import styles from "./Modal.module.scss";
import './Modal.scss';

const Modal = ({
  className='',
  children,
  show,
  onModalClose,
  onClickAway = () => {}
}) => {
  if (!show) {
    return null;
  }

  return (
    <div className={className}>
      <div className="overlay"></div>
      <ClickAwayListener onClickAway={onClickAway}>
        <div className="modal">
          <button className="close-btn" onClick={onModalClose}>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">{/*! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
          </button>
          <div className="content">{children}</div>
        </div>
      </ClickAwayListener>
    </div>
  );
};

export default Modal;
