import runGame from '../index.js';
import getRandomInteger from '../utilities.js';

const getAction = () => {
  const actions = ['+', '-', '*'];
  return actions[getRandomInteger(0, 3)];
};

const calculate = (firstOperand, secondOperand, action) => {
  if (action === '+') {
    return firstOperand + secondOperand;
  }
  if (action === '-') {
    return firstOperand - secondOperand;
  }
  if (action === '*') {
    return firstOperand * secondOperand;
  }
  return 'unknown action';
};

const getQuestionAndRightAnswer = () => {
  const firstOperand = getRandomInteger(1, 10);
  const secondOperand = getRandomInteger(1, 10);
  const action = getAction();
  const question = `${firstOperand} ${action} ${secondOperand}`;
  const rightAnswer = calculate(firstOperand, secondOperand, action).toString();
  return [question, rightAnswer];
};

export default () => {
  const descriptionOfTheGame = 'What is the result of the expression?';
  runGame(descriptionOfTheGame, getQuestionAndRightAnswer);
};
