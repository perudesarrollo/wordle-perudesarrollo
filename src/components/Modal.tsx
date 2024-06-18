import React from 'react';

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-lg w-1/2">
        <h2 className="text-xl font-bold mb-4">Instrucciones</h2>
        <p>Aquí van las instrucciones del juego Wordle...</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Modal;
