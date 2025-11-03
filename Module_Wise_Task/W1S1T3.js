// week 1 - session 1 - task 3

//1
// Arithmetic Operators
let a = 15;
let b = 4;

console.log('a + b =', a + b);
console.log('a - b =', a - b);
console.log('a * b =', a * b);
console.log('a / b =', a / b);
console.log('a % b =', a % b);

//2
// Assignment Operators
let x = 10;
console.log('Initial x:', x);

x += 5; // x = x + 5
console.log('After x += 5:', x);

//3
// Relational Operators
let p = 10;
let q = '10';

console.log('p == q  →', p == q);
console.log('p === q →', p === q);
console.log('p != q  →', p != q);
console.log('p !== q →', p !== q);
console.log('p > 5   →', p > 5);
console.log('p < 5   →', p < 5);
console.log('p >= 10 →', p >= 10);
console.log('p <= 9  →', p <= 9);

//4
// Logical Operators
let y = true;
let z = false;

console.log('AND (&&):', y && z);
console.log('OR (||):', y || z);
console.log('NOT (!):', !y);

//5
// Conditional Operator 
let age = 18;
let canVote = (age >= 18) ? 'Eligible to Vote' : 'Not Eligible';
console.log('Age:', age, '|', canVote);

//6
// Bitwise Operators
let m = 5;
let n = 3;

console.log('m & n  (AND)   →', m & n);
console.log('m | n  (OR)    →', m | n);
console.log('m ^ n  (XOR)   →', m ^ n);
console.log('~m     (NOT)   →', ~m);
console.log('m << 1 (Left Shift)  →', m << 1);
console.log('m >> 1 (Right Shift) →', m >> 1);

//7
// Increment and Decrement Operators
let num = 10;

console.log('Initial num:', num);
console.log('Pre-Increment (++num):', ++num);
console.log('Post-Increment (num++):', num++);
console.log('After Post-Increment:', num);