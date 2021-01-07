// practice 4
let list = " ";
const addToList = function (toDo) {
  list = list + toDo + " ";
  return list;
};

// practice 5
let total = 0;
const deposit = function (amount) {
  return (total += amount);
};

const withdraw = function (amount) {
  return total - amount;
};

// extra practice 1
let minimum;
let maximum;
let count = 0;
const minMax = function (number) {
  if (count === 0) {
    minimum = number;
    maximum = number;
  }
  count += 1;
  if (number > maximum) {
    maximum = number;
  }
  if (number < minimum) {
    minimum = number;
  }
  return (
    "the maximum number is " + maximum + " and the minimum number is " + minimum
  );
};

// Extra practice 3

const random = function () {
  // gets a random number from 1-3
  const result = Math.ceil(Math.random() * 3);
  if (result === 1) {
    return "rock";
  } else if (result === 2) {
    return "paper";
  } else {
    return "scissors";
  }
};
let won = 0;
let lose = 0;
const rockPaperScissors = function (move) {
  const randomMove = random();
  if (move.toLowerCase() === "rock") {
    if (randomMove.toLowerCase() === "rock") {
      console.log(randomMove);
      return "it is a draw";
    } else if (randomMove.toLowerCase() === "scissors") {
      console.log(randomMove);
      if (won === 4) {
        won = 0;
        lose = 0;
        return "congratulations. you won 5 times";
      } else {
        won += 1;
        return "Won: " + won + ",lost:" + lose;
      }
    } else {
      console.log(randomMove);
      lose += 1;
      return "Won: " + won + ",lost:" + lose;
    }
  } else if (move.toLowerCase() === "scissors") {
    if (randomMove.toLowerCase() === "rock") {
      console.log(randomMove);
      lose += 1;
      return "Won: " + won + ",lost:" + lose;
    } else if (randomMove.toLowerCase() === "scissors") {
      console.log(randomMove);
      return "it is a draw";
    } else {
      console.log(randomMove);
      if (won === 4) {
        won = 0;
        lose = 0;
        return "congratulations. you won 5 times";
      } else {
        won += 1;
        return "Won: " + won + ",lost:" + lose;
      }
    }
  } else if (move.toLowerCase() === "paper") {
    if (randomMove.toLowerCase() === "rock") {
      console.log(randomMove);
      if (won === 4) {
        won = 0;
        lose = 0;
        return "congratulations. you won 5 times";
      } else {
        won += 1;
        return "Won: " + won + ",lost:" + lose;
      }
    } else if (randomMove.toLowerCase() === "scissors") {
      console.log(randomMove);
      lose += 1;
      return "Won: " + won + ",lost:" + lose;
    } else {
      console.log(randomMove);
      return "it is a draw";
    }
  }
};
