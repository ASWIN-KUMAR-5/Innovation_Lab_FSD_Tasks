// week 3 - session 1 - task 1

//1
// filter() - Get subset of array elements
const numbers = [5, 12, 8, 20, 15, 3, 25];

const greaterThanTen = numbers.filter(num => num > 10);
console.log('Original Array:', numbers);
console.log('Filtered Array (num > 10):', greaterThanTen);

//2
// reduce() - Calculate sum, product, concatenate strings
const nums = [1, 2, 3, 4, 5];

const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log('Using reduce() for Sum:', sum);

const product = nums.reduce((acc, curr) => acc * curr, 1);
console.log('Using reduce() for Product:', product);

const words = ['Hello', 'World', 'From', 'JavaScript'];
const sentence = words.reduce((acc, word) => acc + ' ' + word);
console.log('Using reduce() to Concatenate:', sentence);

//3
// slice()
const fruits = ['apple', 'banana', 'mango', 'grape', 'orange'];
console.log('Using slice() to extract elements (1, 4):');
const slicedFruits = fruits.slice(1, 4);
console.log('Original Array:', fruits);
console.log('Sliced Array:', slicedFruits);

//4
// splice() - Remove and/or Add elements 
const languages = ['HTML', 'CSS', 'JavaScript', 'Python', 'C++'];
console.log('Original Array before splice():', languages);

// Remove 2 elements
languages.splice(1, 2);
console.log('After Removing:', languages);

// Add new elements
languages.splice(1, 0, 'React', 'Node.js');
console.log('After Adding:', languages);

//5
// Spread Operator - Clone & Merge Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Clone array
const clonedArr = [...arr1];
console.log('Cloned Array using Spread:', clonedArr);

// Merge two arrays
const mergedArr = [...arr1, ...arr2];
console.log('Merged Array using Spread:', mergedArr);