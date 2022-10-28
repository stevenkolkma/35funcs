// Write your functions here, make sure to export them

function double1(first) {
  return first * 2;
}

const double2 = (num1, num2) => {
  return num1 * 2;
};

const double3 = (num1, num2) => {
  if (num1 > num2) {
    return num1 * 2;
  } else {
    return num2 * 2;
  }
};

const repeat3 = (input, num) => {
  if (num < 0) {
    return console.log((input = ""));
  } else {
    return console.log(input.repeat(num));
  }
};

const batman = () => {
  const na = `na`;
  const batman = `batman!`;
  return console.log(na.repeat(10) + batman);
};

const max = (num1, num2) => {
  if (num1 >= num2) {
    return num1;
  } else {
    return num2;
  }
};

const maxDivide = (num1, num2) => {
  if (num1 < num2) {
    return num1 / num2;
  } else {
    return num2 / num1;
  }
};
// console.log(maxDivide(1, 2)); Can always console log results of functions outside (better maybe)

const maxStr = (string1, string2) => {
  if (string1.length > string2.length) {
    return console.log(string1);
  } else {
    return console.log(string2);
  }
};

const even = (num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

const evenBelow = (num) => {
  let array = [];
  for (let i = 0; i < num - 1; i++) {
    array.push(i);
  }
  const result = array.filter((x) => x % 2 === 0);
  console.log(result);
  return result;
};
// evenBelow(10);

const evenIn = (num) => {
  const result = num.filter((x) => x % 2 === 0);
  console.log(result);
  return result;
};
// evenIn([0, 1, 2, 3, 4, 5, 6]);

const multiplyArray = (num) => {
  let sum = 1;
  for (let i = 0; i < num.length; i++) {
    // 0 1 2 3
    sum = sum * num[i];
  }
  console.log(sum);
  return sum;
};
multiplyArray([1, 2, 3, 4]);

const divideArray = () => {};

module.exports = {
  double1,
  double2,
  double3,
  repeat3,
  batman,
  max,
  maxDivide,
  maxStr,
  even,
  evenBelow,
  evenIn,
};
