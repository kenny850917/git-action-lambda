"use strict";

module.exports.generateRandomNumber = (event) => {
  const randomNumber = parseInt(Math.random() * 100);
  console.log("The random generated integer is: ", randomNumber);
  return randomNumber;
};

module.exports.addTwoNumber = (event) => {
  const firstNum = parseInt(Math.random() * 10);
  const secondNum = parseInt(Math.random() * 10);
  console.log(
    firstNum,
    " plus ",
    secondNum,
    "equals to ",
    firstNum + secondNum
  );
  return firstNum + secondNum;
};
