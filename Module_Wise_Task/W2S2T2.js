// week 2 - session 2 - task 2

//1
// Create arrays of numbers and strings

const numbers = [10, 20, 30, 40, 50];
const fruits = ['apple', 'banana', 'mango', 'orange'];

console.log('Numbers:', numbers);
console.log('Fruits:', fruits);

//2
// Access and modify elements

console.log('First Number:', numbers[0]);
console.log('Second Fruit:', fruits[1]);

// Modify elements
numbers[2] = 99;
fruits[3] = 'grape';

console.log('Modified Numbers:', numbers);
console.log('Modified Fruits:', fruits);

//3
// Use .length to get array size

console.log('Numbers Array Length:', numbers.length);
console.log('Fruits Array Length:', fruits.length);

//4
// Adding and removing elements

// push() - add to end
numbers.push(60);
fruits.push('kiwi');
console.log('After push():', numbers, fruits);

// pop() - remove last element
numbers.pop();
fruits.pop();
console.log('After pop():', numbers, fruits);

// unshift() - add to beginning
numbers.unshift(5);
fruits.unshift('pineapple');
console.log('After unshift():', numbers, fruits);

// shift() - remove first element
numbers.shift();
fruits.shift();
console.log('After shift():', numbers, fruits);