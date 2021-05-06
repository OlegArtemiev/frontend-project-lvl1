import getRandomInteger from '../utilities.js';
import runGame from '../index.js';

const isPrime = (number) => {
  for (
    let currentDivisor = number - 1;
    currentDivisor > 1;
    currentDivisor -= 1
  ) {
    if (number % currentDivisor === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndRightAnswer = () => {
  const number = getRandomInteger(1, 100);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [number, answer];
};

export default () => {
  const descriptionOfTheGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(descriptionOfTheGame, getQuestionAndRightAnswer);
};
