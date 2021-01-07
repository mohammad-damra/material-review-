// practice 2

const fullName = function (firstName, lastName) {
  return firstName + " " + lastName;
};
fullName("mohammad", "Damra");

// practice 3

const average = function (a, b) {
  return (a + b) / 2;
};
average(20, 25);

// practice 4

const square = function (number) {
  return number * number;
};

const cube = function (number) {
  return number * number * number;
};
cube(25) + 20;

// practice 5

const toThePowerOf = function (base, exponent) {
  return Math.pow(base, exponent);
};
toThePowerOf(2, 3);

// extra practice 1

const floor = function (number) {
  return Math.floor(number);
};
floor(0.2);

// extra practice 2

const calculateProfit = function (unitsSold, unitCost, unitPrice) {
  return unitsSold * (unitPrice - unitCost);
};
calculateProfit(10, 5, 15);

// extra practice 3

const calculateTotalBillAmount = function (total, taxPercentage, tip) {
  return total + (total * taxPercentage + tip);
};
calculateTotalBillAmount(40, 0.16, 2);

// extra practice 4

const ageInDays = function (ageInYears) {
  return ageInYears * 365;
};
ageInDays(10);

// extra practice 5.1

const calculateConeVolume = function (height, radius) {
  //Right circular cone volume =  π * r^2 * (h /3).
  return Math.PI * (radius * radius) * (height / 3);
};
calculateConeVolume(10, 6);

// extra practice 5.2

const calculateConeSurfaceArea = function (height, radius) {
  // Right circular cone surface area = π * r * (r + (h^2 + r^2)^0.5).
  return (
    Math.PI *
    radius *
    (radius + Math.pow(height * height + radius * radius, 0.5))
  );
};
calculateConeSurfaceArea(10, 6);
