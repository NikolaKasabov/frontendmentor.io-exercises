import './Modal.scss';

function Modal({ onOverlayClick, children }) {
  return (
    <div className="modal">
      <div className="modal-overlay" onClick={onOverlayClick}></div>

      <div className="modal-content">
        {children}
      </div>
    </div>
  );
}

export default Modal;
