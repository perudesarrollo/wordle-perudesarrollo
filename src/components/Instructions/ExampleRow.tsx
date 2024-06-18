import React, { FC, ReactNode } from "react";

interface ExampleRowProps {
  word: string;
  targetLetter: string;
  explanation: ReactNode;
  gray?: boolean;
}

const getColor = (
  letter: string,
  index: number,
  targetWord: string,
  gray: boolean
) => {
  if (gray && targetWord[index] === letter) {
    return "bg-gray-500 border-gray-500";
  }

  if (targetWord[index] === letter) {
    return "bg-green-500 border-green-500";
  }

  if (targetWord.includes(letter)) {
    return "bg-yellow-500 border-yellow-500";
  }

  return "dark:bg-dark-500 bg-white border-black";
};

const ExampleRow: FC<ExampleRowProps> = ({
  word,
  targetLetter,
  explanation,
  gray = false,
}) => {
  return (
    <>
      <div className="flex justify-center mb-2">
        {word.split("").map((letter, index) => (
          <div
            key={index}
            className={`size-20 flex items-center justify-center m-1 rounded border font-extrabold text-3xl ${getColor(
              letter,
              index,
              targetLetter,
              gray
            )}`}
          >
            {letter}
          </div>
        ))}
      </div>
      <p className="text-lg font-normal my-3">{explanation}</p>
    </>
  );
};

export default ExampleRow;
