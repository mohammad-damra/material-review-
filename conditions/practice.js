//practice 3
const login = function (username, password) {
  if (username.length <= 4) {
    return "Invalid login information, the username length must be greater than 4";
  } else if (username.toLowerCase() !== "mrpotato") {
    return "Invalid login information, the username must be specified usernames";
  } else if (password.length < 8) {
    return "Invalid login information, the password length must be greater or equal to 8";
  } else if (password !== "LonelyPotato") {
    return "Invalid login information, wrong password or username";
  } else {
    return "login successful";
  }
};
//practice 4

const isLeapYear = function (year) {
  {
    if (year % 4 === 0 || (year % 100 !== 0 && year % 400 === 0)) {
      return "leap year";
    } else {
      return "non leap year";
    }
  }
};

//practice 5

const deposit = function (amount) {
  if (typeof amount === "number" && amount > 0) {
    return amount;
  } else {
    return "Please enter a valid number";
  }
};

//extra practice 1

const startsWith = function (string, character) {
  if (string[0].toLowerCase() === character.toLowerCase()) {
    return true;
  } else {
    return false;
  }
};

//extra practice 2

const endsWith = function (string, character) {
  if (string[string.length - 1].toLowerCase() === character.toLowerCase()) {
    return true;
  } else {
    return false;
  }
};

//extra practice 3

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
const rockPaperScissors = function (move) {
  const randomMove = random();
  if (move.toLowerCase() === "rock") {
    if (randomMove.toLowerCase() === "rock") {
      console.log(randomMove);
      return "it is a draw";
    } else if (randomMove.toLowerCase() === "scissors") {
      console.log(randomMove);
      return "you win";
    } else {
      console.log(randomMove);
      return "you lose";
    }
  } else if (move.toLowerCase() === "scissors") {
    if (randomMove.toLowerCase() === "rock") {
      console.log(randomMove);
      return "you lose";
    } else if (randomMove.toLowerCase() === "scissors") {
      console.log(randomMove);
      return "it is a draw";
    } else {
      console.log(randomMove);
      return "you win";
    }
  } else if (move.toLowerCase() === "paper") {
    if (randomMove.toLowerCase() === "rock") {
      console.log(randomMove);
      return "you win";
    } else if (randomMove.toLowerCase() === "scissors") {
      console.log(randomMove);
      return "you lose";
    } else {
      console.log(randomMove);
      return "it is a draw";
    }
  }
};

// extra practice 4

const guessTheSquareRoot = function (number, squareRoot) {
  if (squareRoot === Math.sqrt(number)) {
    return "correct";
  } else {
    return "incorrect";
  }
};

// extra practice 5

const search = function (string, letter) {
  if (string.search(letter.toLowerCase()) === -1) {
    return "false";
  } else {
    return "true";
  }
};
