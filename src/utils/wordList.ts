import lista from './filteredWords'
const wordList = lista();

export const getRandomWord = () => {
  return wordList[Math.floor(Math.random() * wordList.length)];
};