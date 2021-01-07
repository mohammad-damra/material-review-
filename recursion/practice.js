// practice 1

const sumCubes = function (number) {
  if (number.length === 0) {
    return 0;
  }
  let num = number.shift();
  return Math.pow(num, 3) + sumCubes(number);
};

// practice 2

const factorial = function (number) {
  if (number === 1 || number === 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
};

// practice 3
const getLength = function (string) {
  if (string.length === 0) {
    return 0;
  }
  let count = 0;
  count++;
  return count + getLength(string.slice(1));
};

// practice 4

const countCharacter = function (string, character) {
  if (string.length === 0) {
    return 0;
  }
};

// practice 5

const oddOrEven = function (number) {
  if (number === 0) {
    return "The number is even";
  } else if (number === 1) {
    return "The number is odd";
  }
  return oddOrEven(number - 2);
};

// extra practice 1

const maximumNumber = function (numbers) {
  if (numbers.length === 1) {
    return numbers[0];
  }
  if (numbers[0] > numbers[1]) {
    numbers.splice(1, 1);
    return maximumNumber(numbers);
  } else {
    numbers.splice(0, 1);
    return maximumNumber(numbers);
  }
};

// extra practice 2

const multiply = function (numberOne, numberTwo) {
  if (numberTwo === 0) {
    return 0;
  }
  return numberOne + multiply(numberOne, numberTwo - 1);
};
