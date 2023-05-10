import React, { useState,useEffect,useRef } from 'react';
import ReactDOM from 'react-dom';
import "../Css/modal.css"
import ClickAwayListener from 'react-click-away-listener';

function Modal({ isOpen, onClose, children ,_style,_overlayStyle}) {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const usemodal = useRef(null);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    onClose();
  };

  const handleClickAway = (event) => {

    if (usemodal.current && !usemodal.current.contains(event.target)) {
         handleCloseModal();
    }
  }

  if (!isModalOpen) {
    return null;
  }

  

  return ReactDOM.createPortal(
    <div className="modal-overlay" style={_overlayStyle}>
      <ClickAwayListener onClickAway={handleClickAway} >
        <div className="modal" ref={usemodal} style={_style}>
          <div className='close-dis'>
            <button onClick={handleCloseModal} className="modal-close-btn">
              X
            </button>
          </div>
          {children}
        </div>
      </ClickAwayListener>
    </div>,
    document.body
  );
}

export default Modal;
