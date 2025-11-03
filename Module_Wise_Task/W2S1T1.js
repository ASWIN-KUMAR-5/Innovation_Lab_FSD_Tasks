// week 2 - session 1 - task 1

//1
// Simple functions with fixed parameters

// Function to add two numbers
function addNumbers(a, b) {
  return a + b;
}

// Function to greet a user
function greetUser(name) {
  return `Hello, ${name}! Welcome to JavaScript practice.`;
}

// Calling functions
console.log('Sum of 10 and 20:', addNumbers(10, 20));
console.log(greetUser('Aswin'));

// Functions accepting arbitrary number of arguments

function showAllArguments() {
  console.log('Arguments Received:', arguments);
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return `Sum of arguments: ${sum}`;
}

console.log(showAllArguments(5, 10, 15, 20));

// Using Rest Operator (...) for variable arguments

function multiplyAll(...nums) {
  return nums.reduce((product, n) => product * n, 1);
}

console.log('Product of numbers:', multiplyAll(2, 3, 4, 5));