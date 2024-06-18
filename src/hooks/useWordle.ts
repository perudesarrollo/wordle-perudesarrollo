import { useState, useEffect, useCallback, useMemo } from "react";
import { getRandomWord } from "../utils/wordList";
import { configList } from "../utils/configList";

export const useWordle = () => {
  const { intervalTimeNewGenerator } = configList;
  const intervalTime = useMemo(() => intervalTimeNewGenerator, []);
  const [solution, setSolution] = useState(getRandomWord());
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(intervalTime);
  const [wins, setWins] = useState(() => {
    const storedWins = localStorage.getItem("wordleWins");
    return storedWins ? parseInt(storedWins) : 0;
  });
  const [totalGames, setTotalGames] = useState(() => {
    const storedTotalGames = localStorage.getItem("wordleTotalGames");
    return storedTotalGames ? parseInt(storedTotalGames) : 0;
  });
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    localStorage.setItem("wordleWins", wins.toString());
    localStorage.setItem("wordleTotalGames", totalGames.toString());
  }, [wins, totalGames]);

  const resetGame = () => {
    setTimeRemaining(intervalTime);
    setSolution(getRandomWord());
    setGuesses([]);
    setCurrentGuess("");
    setIsGameOver(false);
    setShowStats(false);
    console.log("New word generated");
  };

  useEffect(() => {
    const updateRemainingTime = () => {
      setTimeRemaining((prev) => Math.max(prev - 1000, 0));
    };
    resetGame();
    const intervalId = setInterval(updateRemainingTime, 1000);
    const resetIntervalId = setInterval(resetGame, intervalTime);

    return () => {
      clearInterval(intervalId);
      clearInterval(resetIntervalId);
    };
  }, [intervalTime]);

  const formatTime = useCallback(() => {
    const minutes = Math.floor(timeRemaining / 60000);
    const seconds = Number(((timeRemaining % 60000) / 1000).toFixed(0));
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }, [timeRemaining]);

  const onKeyPress = useCallback(
    (key: string) => {
      if (isGameOver) return;
      const { currentGuessLimit } = configList;

      if (key === "⌫" || key === "BACKSPACE") {
        setCurrentGuess((prev) => prev.slice(0, -1));
      } else if (key === "ENTER") {
        if (currentGuess.length === currentGuessLimit) {
          const newGuesses = [...guesses, currentGuess];
          setGuesses(newGuesses);
          setCurrentGuess("");

          if (currentGuess === solution) {
            setIsGameOver(true);
            setWins((prev) => prev + 1);
            setTotalGames((prev) => prev + 1);
            setShowStats(true);
          } else if (newGuesses.length === currentGuessLimit) {
            setIsGameOver(true);
            setTotalGames((prev) => prev + 1);
            setShowStats(true);
          }
        }
      } else if (currentGuess.length < currentGuessLimit && key.length === 1) {
        setCurrentGuess((prev) => prev + key);
      }
    },
    [currentGuess, guesses, isGameOver, solution, configList]
  );

  return {
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
    resetGame,
  };
};
