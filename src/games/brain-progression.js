import getRandomInteger from '../utilities.js';
import runGame from '../index.js';

const getProgression = (progressionLength) => {
  const firsItem = getRandomInteger(1, 10);
  const progression = [firsItem];
  const progressionStep = getRandomInteger(1, 4);
  for (let i = 0; i < progressionLength - 1; i += 1) {
    progression.push(progression[i] + progressionStep);
  }
  return progression;
};

const replaceProgressionElementWithDots = (
  progression,
  indexOfDeletedElement,
) => {
  const copyProgression = [...progression];
  copyProgression[indexOfDeletedElement] = '..';
  return copyProgression;
};

const getQuestionAndRightAnswer = () => {
  const progressionLength = 10;
  const progression = getProgression(progressionLength);
  const indexOfDeletedElement = getRandomInteger(0, progressionLength);
  const rightAnswer = progression[indexOfDeletedElement].toString();
  const progressionWithDeletedElement = replaceProgressionElementWithDots(
    progression,
    indexOfDeletedElement,
  );
  const question = progressionWithDeletedElement.join(' ');
  return [question, rightAnswer];
};

export default () => {
  const descriptionOfTheGame = 'What number is missing in the progression?';
  runGame(descriptionOfTheGame, getQuestionAndRightAnswer);
};

// const debugCollection = getProgression(10);
// console.log(debugCollection);
// console.log(replaceProgressionElementWithDots(debugCollection, getRandomInteger(1, 4)));
// console.log(debugCollection);
