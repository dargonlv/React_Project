import Modal from "./component/Modal";
import React,{useState} from "react";



function Deneme() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Modal aç</button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Bu bir modal</h2>
        <p>Modal içeriği burada yer alır.</p>
      </Modal>
    </div>
  );
}

export default Deneme;