// week 2 - session 1 - task 2

//1
// Traditional Function Declaration

function add(a, b) {
  return a + b;
}

console.log('Sum (Declaration):', add(10, 20));

// Function Expression
const multiply = function (a, b) {
  return a * b;
};

console.log('Product (Expression):', multiply(4, 5));

// Basic arrow function
const subtract = (a, b) => a - b;

console.log('Difference (Arrow):', subtract(15, 5));
