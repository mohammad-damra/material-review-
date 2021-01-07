// practice 1

const countWords = function (string) {
  const arr = string.split(" ");
  console.log(arr);
};

// practice 2

const averageGrade = function (string) {
  if (string.length === 0) {
    return "PLease enter at least one grade";
  } else {
    return (
      string.reduce(function (acc, num) {
        return acc + num;
      }) / string.length
    );
  }
};

// practice 3

const evenLengthOddIndex = function (string) {
  return string.filter(function (element, index) {
    if (index % 2 !== 0) {
      if (element.length % 2 === 0) return element;
    }
  });
};

// practice 4

const incrementByIndex = function (array) {
  return array.map(function (element, index) {
    return element.map(function (elem, index) {
      return elem + array.indexOf(element);
    });
  });
};

// practice 5

const orderByType = function (array) {
  let strElement = array.filter(function (element, index) {
    if (typeof element === "string") {
      return true;
    }
  });
  console.log(strElement);
  let numElement = array.filter(function (element, index) {
    if (typeof element === "number") {
      return true;
    }
  });
  console.log(numElement);
  let boolElement = array.filter(function (element, index) {
    if (typeof element === "boolean") {
      return true;
    }
  });
  console.log(boolElement);
  let result = strElement.concat(numElement);
  let finalResult = result.concat(boolElement);
  return finalResult;
};
