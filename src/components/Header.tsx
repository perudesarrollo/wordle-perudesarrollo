import React, { useState } from "react";
import Instructions from "./Instructions/Index";
import ThemeToggle from "./ThemeToggle";
import { FaQuestionCircle, FaChartBar } from "react-icons/fa";
import Statistics from "./Statistics";
import { useWordle } from "../hooks/useWordle";

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isModalStaticOpen, setIsModalStaticOpen] = useState<boolean>(false);
  const {
    solution,
    isGameOver,
    wins,
    totalGames,
    formatTime,
  } = useWordle();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-between rounded-md items-center p-4 bg-gray-100 dark:bg-dark-600">
      <button onClick={openModal}>
        <FaQuestionCircle
          size={24}
          className="text-gray-800 dark:text-gray-500"
        />
      </button>
      <h1 className="text-2xl font-bold  text-black dark:text-gray-500">
        WORDLE
      </h1>
      <div className="flex items-center space-x-4">
        <button onClick={() => setIsModalStaticOpen(true)}>
          <FaChartBar size={24} className="text-gray-800 dark:text-gray-500" />
        </button>
        <ThemeToggle />
      </div>

      {isModalOpen && <Instructions onClose={closeModal} />}
      {isModalStaticOpen && (
        <Statistics
        isOpen={isModalStaticOpen}
        onClose={() => setIsModalStaticOpen(false)}
        wins={wins}
        totalGames={totalGames}
        solution={isGameOver ? solution : undefined}
        formatTime={formatTime()}
      />
      )}
    </div>
  );
};

export default Header;
