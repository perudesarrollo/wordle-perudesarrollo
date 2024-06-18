import React from 'react';
import ExampleRow from './ExampleRow';

const Index: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <>
      <div className='fixed inset-0 dark:bg-dark-500 bg-gray-50 bg-opacity-75 transition-opacity'></div>
      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
          <div className='dark:border-gray-200 border border-black relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
            <div className='dark:bg-dark-700 dark:text-white bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
              <div className='instructions-modal'>
                <h1 className='font-extrabold text-3xl text-center my-5'>Cómo jugar</h1>
                <InstructionText />
                <h4 className='font-bold text-lg my-2'>Ejemplos</h4>
                <Examples />
                <MoreInstructions />
                <div className='flex justify-center mt-4'>
                  <button onClick={onClose} className='w-64 mt-4 px-4 py-2 bg-green-500 text-white rounded'>
                    ¡Jugar!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const InstructionText: React.FC = () => (
  <>
    <p className='text-lg font-normal my-2'>Adivina la palabra oculta en cinco intentos.</p>
    <p className='text-lg font-normal my-2'>Cada intento debe ser una palabra válida de 5 letras.</p>
    <p className='text-lg font-normal my-2'>
      Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la palabra.
    </p>
  </>
);

const Examples: React.FC = () => (
  <>
    <ExampleRow word='GATOS' targetLetter='G' explanation={<span>La letra <strong>G</strong> está en la palabra y en la posición correcta.</span>} />
    <ExampleRow word='VOCAL' targetLetter='BTTCX' explanation={<span>La letra <strong>C</strong> está en la palabra pero en la posición incorrecta.</span>} />
    <ExampleRow word='CANTO' targetLetter='DEMMO' gray={true} explanation={<span>La letra <strong>O</strong> no está en la palabra.</span>} />
  </>
);

const MoreInstructions: React.FC = () => (
  <>
    <p className='text-lg font-normal my-5'>Puede haber letras repetidas. Las pistas son independientes para cada letra.</p>
    <p className='text-lg font-normal text-center my-4'>¡Una palabra nueva cada 5 minutos!</p>
  </>
);

export default Index;
