import runGame from '../index.js';
import getRandomInteger from '../utilities.js';

const getGreatestCommonDivisor = (firstNumber, secondNumber) => {
  if (firstNumber === secondNumber) {
    return firstNumber;
  }
  const fewerNumber = firstNumber < secondNumber ? firstNumber : secondNumber;
  for (let currentDivisor = fewerNumber; currentDivisor > 0; currentDivisor -= 1) {
    if (firstNumber % currentDivisor === 0 && secondNumber % currentDivisor === 0) {
      return currentDivisor;
    }
  }
  return NaN;
};

const getQuestionAndRightAnswer = () => {
  const firstNumber = getRandomInteger(1, 50);
  const secondNumber = getRandomInteger(1, 50);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = getGreatestCommonDivisor(firstNumber, secondNumber).toString();
  return [question, answer];
};

export default () => {
  const descriptionOfTheGame = 'Find the greatest common divisor of given numbers.';
  runGame(descriptionOfTheGame, getQuestionAndRightAnswer);
};
