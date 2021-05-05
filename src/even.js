import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.floor(Math.random() * 100);

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const yes = 'yes';
  const no = 'no';
  const correctMessage = 'Correct!';
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const currentNumber = getRandomNumber();
    console.log(`Question: ${currentNumber}`);
    const answer = readlineSync.question('Your answer: ');

    const isEvenCurrentNumber = isEven(currentNumber);
    const rightAnswer = isEvenCurrentNumber ? yes : no;
    const wrongMessage = `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`;
    if (answer === yes) {
      if (isEvenCurrentNumber) {
        console.log(correctMessage);
      } else {
        console.log(wrongMessage);
        return;
      }
    }
    if (answer === no) {
      if (!isEvenCurrentNumber) {
        console.log(correctMessage);
      } else {
        console.log(wrongMessage);
        return;
      }
    }
    if (answer !== yes && answer !== no) {
      console.log(wrongMessage);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default brainEven;
