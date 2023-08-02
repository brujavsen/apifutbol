import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    // Contenido del modal
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-purple-300 w-[90%] lg:w-1/2 rounded shadow-lg z-50">
        <div className="p-2">
          {children}
        </div>
        <div className="modal-footer flex justify-end pb-2 px-4">
          <button className="btn btn-secondary bg-purple-500 text-white px-4 py-1 hover:px-6 hover:bg-purple-400 rounded-md" onClick={onClose}>Cerrar</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;