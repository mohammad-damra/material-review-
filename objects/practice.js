// practice 3

const createCar = function (brand, name, color) {
  const car = { carBrand: brand, carName: name, carColor: color };
  return car;
};

// practice 4

const getFullName = function (person) {
  const fullName = person.first + " " + person.middle + person.last;
  return fullName;
};

// practice 5

const olderThan = function (personOne, personTwo) {
  if (personOne.age > personTwo.age) {
    return personOne.name + ": is older than " + personTwo.name;
  } else if (personOne.age < personTwo.age) {
    return personTwo.name + ": is older than " + personOne.name;
  } else {
    return "they are the same.";
  }
};

// extra practice 2

const createIceCream = function (coneType, iceCreamFlavour, topping) {
  const iceCream = {
    coneType: coneType,
    iceCreamFlavour: iceCreamFlavour,
    topping: topping,
  };
  if (!topping) {
    return {
      coneType: coneType,
      iceCreamFlavour: iceCreamFlavour,
      topping: "none",
    };
  } else {
    return iceCream;
  }
};

// extra practice 4

const users = {
  mrpotato: {
    email: "mr.potato@gmail.com",
    password: "LonelyPotato",
  },
  thewiseman: {
    email: "wiseMan9999@gmail.com",
    password: "12345678",
  },
};
const isValidUser = function (loginInfo) {
  const $email=loginInfo.email;
  const $password=loginInfo.password;
  if(!users[loginInfo.username.toLowerCase()]){
    return "invalid user name";
  }
  else if($email.length < 6){
    return "invalid email";
  }
  else if()


};
