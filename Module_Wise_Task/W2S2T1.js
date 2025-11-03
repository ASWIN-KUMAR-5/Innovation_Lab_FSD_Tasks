// week 2 - session 2 - task 1

//1
// Math Built-in Functions

// Generate a random number between 0 and 1
const randomNum = Math.random();
console.log('Random Number (0 to 1):', randomNum);

// Generate a random number between 1 and 100
const random100 = Math.floor(Math.random() * 100) + 1;
console.log('Random Number (1 to 100):', random100);

// Round numbers
const num = 7.56;
console.log('Original Number:', num);
console.log('Math.round():', Math.round(num));
console.log('Math.ceil():', Math.ceil(num));
console.log('Math.floor():', Math.floor(num));

// Find min and max in a list
const numbers = [12, 45, 7, 89, 34, 56];
console.log('Numbers:', numbers);
console.log('Math.min():', Math.min(...numbers));
console.log('Math.max():', Math.max(...numbers));

//2
// String Built-in Functions

const text = 'JavaScript is Amazing!';
console.log('Original Text:', text);

// Change case
console.log('To Uppercase:', text.toUpperCase());
console.log('To Lowercase:', text.toLowerCase());

// Extract substrings
console.log('Substring (0, 10):', text.substring(0, 10));
console.log('Slice (11):', text.slice(11));

// Check inclusion
console.log('Includes "Script"?', text.includes('Script'));
console.log('Starts with "Java"?', text.startsWith('Java'));
console.log('Ends with "ing!"?', text.endsWith('ing!'));

// Replace text
const replaced = text.replace('Amazing', 'Powerful');
console.log('After Replace:', replaced);