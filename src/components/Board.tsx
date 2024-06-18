import React, { useEffect } from "react";
import { configList } from "../utils/configList";

interface BoardProps {
  guesses: string[];
  currentGuess: string;
  solution: string;
}

const getColor = (letter: string, index: number, solution: string): string => {
  if (solution[index] === letter) {
    return "bg-green-500";
  }
  if (solution.includes(letter)) {
    return "bg-yellow-500";
  }
  return "bg-gray-500";
};

const Board: React.FC<BoardProps> = ({ guesses, currentGuess, solution }) => {
  const { totalRows } = configList;
  const filledRows = guesses.slice(0, totalRows);
  const currentRow = filledRows.length < totalRows ? [currentGuess] : [];
  const emptyRows = Array(Math.max(0, totalRows - filledRows.length - currentRow.length)).fill('');
  
  const rows = [...filledRows, ...currentRow, ...emptyRows];
  return (
    <div className="flex justify-center items-stretch mt-10">
    <div className="grid grid-rows-5 gap-1">
      {rows.map((row, i) => (
        <div key={i} className="grid grid-cols-5 gap-1">
          {Array(5)
            .fill("")
            .map((_, j) => {
              const letter = row[j] || "";
              return (
                <div
                  key={j}
                  className={`w-16 h-16 flex items-center justify-center rounded-md border font-extrabold text-3xl dark:border-0 text-white ${
                    guesses && guesses[i]
                      ? getColor(letter, j, solution)
                      : "bg-gray-300 dark:bg-dark-800"
                  }`}
                >
                  {letter}
                </div>
              );
            })}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Board;
