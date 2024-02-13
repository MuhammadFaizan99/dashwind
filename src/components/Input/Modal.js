import React from 'react';

const Modal = ({ isOpen, closeModal }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        isOpen ? 'visible opacity-100' : 'invisible opacity-0'
      } transition duration-300`}
    >
      <div className="bg-white p-8 rounded shadow-md">
        <p className="text-lg font-bold mb-4">Thank you for accepting Terms and Conditions</p>
        <button
          className="btn btn-primary py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;