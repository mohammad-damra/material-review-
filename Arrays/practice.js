// practice 1

const reverseWords = function (string) {
  const array = string.split(" ");
  if (array.length === 1) {
    return string;
  } else {
    array.reverse();
    return array.join(" ");
  }
};

// practice 2

const addToLast = function (array, value) {
  array.reverse();
  array.unshift(value);
  array.reverse();
  return array;
};

//practice 3.1

const getLength = function (array) {
  return array.push();
};

//practice 3.2

const getFirstVal = function (array) {
  return array.shift();
};

//practice 4

const updateOrCreate = function (array, value, index) {
  array[index] = value;
  return array;
};

// practice 5

const sliceArray = function (array, startVal, endVal) {
  if (
    array.indexOf(startVal) === array.indexOf(endVal) ||
    array.indexOf(endVal) < array.indexOf(startVal)
  ) {
    return [];
  } else {
    const subArray = array.slice(
      array.indexOf(startVal),
      array.indexOf(endVal)
    );
    subArray.push(endVal);
    return subArray;
  }
};

// extra practice 1

const isPalindrome = function (array) {
  array = array.split(" ");
  array = array.join("");
  array = array.split("");
  if (array === array.reverse()) {
    return true;
  } else {
    return false;
  }
};

// extra practice 2

const randomFruit = function (array) {
  const num = Math.ceil(Math.random() * array.length - 1);
  return array[num];
};
const fruits = ["Apple", "Banana", "Strawberry", "Mango"];

// extra practice 3

const convertToString = function (array) {
  return array.join(" ");
};

//extra practice 4

const search = function (array, string) {
  if (array.includes(string)) {
    return true;
  } else {
    return false;
  }
};
