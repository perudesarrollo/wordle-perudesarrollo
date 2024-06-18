import React from "react";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import Statistics from "./components/Statistics";
import { useWordle } from "./hooks/useWordle";
import Header from "./components/Header";

const App: React.FC = () => {
  const {
    solution,
    guesses,
    currentGuess,
    isGameOver,
    wins,
    totalGames,
    onKeyPress,
    showStats,
    setShowStats,
    formatTime,
  } = useWordle();

  React.useEffect(() => {
    if (isGameOver) {
      setShowStats(true);
    }
  }, [isGameOver]);
  
  const handleKeyDown = (event: KeyboardEvent) => {
    const key = event.key.toUpperCase();
    const validKeys = "QWERTYUIOPASDFGHJKLÑZXCVBNMÁÉÍÓÚáéíóú";
    if (validKeys.includes(key) || key === "ENTER" || key === "BACKSPACE") {
      onKeyPress(key);
    }
  };

  React.useEffect(() => {
    console.log("letter correct:", solution);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    
  }, [currentGuess]);

  return (
    <div className="dark:bg-dark-700 bg-white">
      <div className="flex min-h-screen flex-col">
        <div className="mx-auto my-0 flex min-w-[640px] flex-1 flex-col gap-1 p-8">
          <Header />
          <Board
            guesses={guesses}
            currentGuess={currentGuess}
            solution={solution}
          />
          <Keyboard onKeyPress={onKeyPress} />
        </div>
      </div>
      <Statistics
        isOpen={showStats}
        onClose={() => setShowStats(false)}
        wins={wins}
        totalGames={totalGames}
        solution={isGameOver ? solution : undefined}
        formatTime={formatTime()}
      />
    </div>
  );
};

export default App;
