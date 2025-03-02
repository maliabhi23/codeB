import React from "react";
import Modal from "react-modal";

const SuccessModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="modal">
      <h2>✅ Task Created Successfully!</h2>
      <button onClick={onClose}>Back</button>
    </Modal>
  );
};

export default SuccessModal;
