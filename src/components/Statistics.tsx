import React from "react";

interface StatisticsProps {
  isOpen: boolean;
  onClose: () => void;
  wins: number;
  totalGames: number;
  solution?: string;
  formatTime?: string;
}

const Statistics: React.FC<StatisticsProps> = ({
  isOpen,
  onClose,
  wins,
  totalGames,
  solution = "",
  formatTime,
}) => {
  if (!isOpen) return null;

  return (
    <div className="relative z-10">
      <div className="fixed inset-0 bg-gray-50 bg-opacity-75 dark:bg-dark-500 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white dark:bg-dark-700 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg dark:border-gray-200 border border-black">
            <div className="bg-white dark:bg-dark-700 dark:text-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="statistics-modal px-10 py-5">
                <h1 className="font-extrabold text-3xl text-center">
                  Estadísticas
                </h1>
                <div className="flex justify-between my-10">
                  <div className="text-center">
                    <h3 className="font-extrabold text-3xl">{totalGames}</h3>
                    <h5>Jugadas</h5>
                  </div>
                  <div className="text-center">
                    <h4 className="font-extrabold text-3xl">{wins}</h4>
                    <h5>Victorias</h5>
                  </div>
                </div>
                {solution && (
                  <p className="text-center">
                    La palabra era: <strong>{solution}</strong>
                  </p>
                )}
                <div className="flex flex-col justify-center text-center my-5">
                  <div className="my-4">
                    <h5>SIGUIENTE PALABRA</h5>
                    <h3 className="font-bold text-2xl">
                      {formatTime ? formatTime : ""}
                    </h3>
                  </div>
                  <div>
                    <button
                      onClick={onClose}
                      className="w-64 mt-4 px-4 py-2 bg-green-500 text-white rounded"
                    >
                      Aceptar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
