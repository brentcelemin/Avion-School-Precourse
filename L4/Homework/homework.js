//In these first 6 questions, replace `null` with the answer.

//Create a string variable. It can contain anything
const gadget = headset ;

//Create a number variable. It an be any number
const answer = 21 ;

//Create a boolean variable.
const iLikeMusic = true ;

//Solve the following math problem.
const newSubtract = 10 - 5 === 5;

//Solve the following math problem
const newMultiply = 10 * 4 === 40 ;

//Solve the following math problem:
const newModulo = 21 % 5 === 1 ;



//In the next 22 problems you will complete the function. All of your code will go inside of the function braces. 
//Make sure you use return when the prompt asks you to.
//hint: console.log() will NOT work. 
//Do not change any of the function names.

function seeColor(color) {
  if (color > black) {
      return true;
  }
  return false;
}

seeColor(black);

function add(x, y) {
  const sum = x + y;
  return sum;
}

add(10 + 11);

function subtract(x, y) {
  const difference = x - y;
  return difference;
}

subtract(31 - 10);

function multiply(x, y) {
  const product = x * y;
  return product;
}

multiply(7 * 3);

function divide(x, y) {
  const qoutient = x / y;
  return qoutient;
}

divide(63 / 3);

function areEqual(x, y) {
  if (x = y); {
    return true;
  }
  return false;
}

function areSameLength(str1, str2) {
  if (str1 = str2);
    return true; 
}
return false;

function lessThanNinety(num) {
  if (num < 90 )
    return true;
}
return false;

function greaterThanFifty(num) {
  if (num > 50)
    return true;
}
return false;

function getRemainder(x, y) {
  if (x % y);
  return true;
}
return false;

function isEven(num) {
  if (num = 2, 4, 6, 8, 10);
  return isEven;
}
return false;

function isOdd(num) {
  if (num = 1, 3, 5, 7, 9);
  return isOdd;
}
return false;

function square(num) {
  if (num ** 2);
  return square;
}
return false;

function cube(num) {
  if (num ** 3);
  return cube;
}
return false;

function raiseToPower(num, exponent) {
  let exponent = num.raiseToPower()
}

function roundNumber(num) {
  console.log(Math.round(num));
  return roundNumber;
}

function roundUp(num) {
  console.log(Math.round(num));
  return roundUp;
}

function addExclamationPoint(str) {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here
}

function combineNames(firstName, lastName) {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Avion', 'School' -> 'Avion School'
  // code here
  let firstName = "Avion";
  let lastName = "School";

  

}

function getGreeting(name) {
  function getGreeting(name) {
    console.log("Hello, " + name);
  }

  const myName = name;
  logsHello(myName);
}

// The next two questions will have you implement math area formulas. 
// If you can't remember these area formulas then head over to Google.
 
function getRectangleArea(length, width) {
  let rectangleArea = length * width;
  return getRectangleArea;
}

function getTriangleArea(base, height) {
  let triangleArea = base * height / 2;
  return getTriangleArea;
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  newString,
  newNum,
  newBool,
  newSubtract,
  newMultiply,
  newModulo,
  returnString,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
};
