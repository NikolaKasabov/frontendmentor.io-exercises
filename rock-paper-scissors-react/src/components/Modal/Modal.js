import './Modal.scss';

function Modal({onOverlayClick}) {
  return (
    <div className="modal">
      <div className="modal-overlay" onClick={onOverlayClick}></div>
      <div className="modal-content">
        3242342
      </div>
    </div>
  );
}

export default Modal;
