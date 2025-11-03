// week 3 - session 2 - task 1

//1
// Array Destructuring
const colors = ['red', 'green', 'blue', 'yellow'];

const [first, second] = colors;
console.log(first);  
console.log(second);  


// Object Destructuring
const person = {
  name: 'Aswin',
  age: 21,
  address: {
    city: 'Coimbatore',
    pincode: 641035
  }
};

const { name, age } = person;
console.log(name, age); 

//2
// Dot & Bracket Notation
const student = {
  id: 101,
  name: 'Kumar',
  subjects: {
    math: 90,
    science: 85
  }
};

// Dot notation
console.log(student.name);        
console.log(student.subjects.math); 

// Bracket notation
console.log(student['id']);         
console.log(student['subjects']['science']); 

//3
// Iterating Through Objects
const user = { name: 'Aswin', age: 22, city: 'Coimbatore' };

for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}

Object.keys(user).forEach(key => {
  console.log(`${key}: ${user[key]}`);
});

for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}