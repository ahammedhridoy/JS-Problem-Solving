/*

Write a JavaScript program to check two
numbers and return true if one of the number
is 100 or if the sum of the two numbers is
100

*/

const checkNumbers = (num1, num2) => {
  if (num1 === 100 || num2 === 100 || num1 + num2 === 100) {
    return true;
  } else {
    return false;
  }
};

console.log(checkNumbers(1, 100));
