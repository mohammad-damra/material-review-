// practice 1

const makeSafe = function (size) {
  return function (name, size) {
    if (size >= name.length) {
      size = size - size.length;
      return true;
    } else {
      return false;
    }
  };
};
const safe = makeSafe(10);
