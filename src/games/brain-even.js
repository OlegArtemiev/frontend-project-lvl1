import runGame from '../index.js';
import getRandomInteger from '../utilities.js';

// const getRandomNumber = () => Math.floor(Math.random() * 100);

const isEven = (number) => number % 2 === 0;

const getQuestionAndRightAnswer = () => {
  const yes = 'yes';
  const no = 'no';
  const randomNumber = getRandomInteger(1, 100);
  const rightAnswer = isEven(randomNumber) ? yes : no;
  return [randomNumber, rightAnswer];
};

export default () => {
  const descriptionOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(descriptionOfTheGame, getQuestionAndRightAnswer);
};
