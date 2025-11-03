// week 3 - session 2 - task 2

//1
// Arrays of Objects & Accessing Nested Data
const users = [
  {
    id: 1,
    name: 'Aswin',
    age: 22,
    address: {
      city: 'Coimbatore',
      pincode: 641035
    },
    hobbies: ['Coding', 'Gaming', 'Music']
  },
  {
    id: 2,
    name: 'Meenakshi',
    age: 21,
    address: {
      city: 'Coimbatore',
      pincode: 641046
    },
    hobbies: ['Designing', 'Reading']
  }
];

console.log(users[0].name);
console.log(users[1].address.city);
console.log(users[0].hobbies[1]);

//2
// Rest Parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(10, 20));
console.log(sum(5, 10, 15, 20));
console.log(sum(1, 2, 3, 4, 5, 6));

//3
// Spread Operator

// Combine arrays
const fruits = ['apple', 'banana'];
const moreFruits = ['mango', 'grape'];
const allFruits = [...fruits, ...moreFruits];
console.log(allFruits);

// Clone object
const originalUser = { name: 'Aswin', age: 22 };
const clonedUser = { ...originalUser };
console.log(clonedUser);

// Merge objects
const userDetails = { city: 'Chennai', country: 'India' };
const mergedUser = { ...originalUser, ...userDetails };
console.log(mergedUser);

//4
// Parameter Destructuring in Functions
function displayUser({ name, age, address: { city } }) {
  console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}

displayUser(users[0]);
displayUser(users[1]);