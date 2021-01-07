// practice 1

const sum = function (numbers) {
  let arrSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    arrSum = numbers[i] + arrSum;
  }
  return arrSum;
};

// practice 2

const filter = function (numbers) {
  const onlyOddNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) onlyOddNumbers.push(numbers[i]);
  }
  return onlyOddNumbers;
};

// practice 3

const maximumNumber = function (numbers) {
  let max = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) max = numbers[i];
  }
  return max;
};

//praCTICE 4

const bills = {
  waterBill: 25,
  electricityBill: 50,
  hospitalBill: 1000,
};
const totalBill = function (billsObject) {
  let total = 0;
  for (key in billsObject) {
    total = total + billsObject[key];
  }
  return total;
};

// practice 5

const messageOne = {
  username: "John",
  message: "Hello",
  date: "01/01/2020",
  someKey: "someValue",
};
const messageTwo = {
  username: 10,
  message: "Hello",
  date: "01/01/2020",
};
const validateMessage = function (message) {
  for (key in message) {
    if (key !== "username" && key !== "message" && key !== "date") {
      delete message[key];
    }
  }
  for (key in message) {
    if (typeof message[key] !== "string") {
      return "invalid message";
    } else {
      return message;
    }
  }
};

// extra practice 1

const onlyEven = function (numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      numbers.splice(i, 1);
    }
  }
  return numbers;
};

//extra practice 2

const sort = function (numbers) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] < numbers[j]) {
        let temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
      }
    }
  }
  return numbers;
};
