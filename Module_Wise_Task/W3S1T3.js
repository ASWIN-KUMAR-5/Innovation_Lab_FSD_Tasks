// week 3 - session 1 - task 3

//1
// Basic Object Destructuring
const student = {
  name: 'Aswin Kumar',
  age: 21,
  course: 'Computer Science',
  city: 'Chennai'
};

const { name, age, course } = student;
console.log(`Name: ${name}, Age: ${age}, Course: ${course}`);

//2
// Destructuring with Default Values
const person = {
  firstName: 'Aswin',
  lastName: 'N',
  country: 'India'
};

const { firstName, lastName, city = 'Unknown City' } = person;
console.log(`Name: ${firstName} ${lastName}, City: ${city}`);

// Nested Object Destructuring
const employee = {
  empId: 101,
  empName: 'Aswin',
  position: 'Developer',
  contact: {
    email: 'aswin@example.com',
    phone: '9876543210'
  }
};

const { empName, contact: { email, phone } } = employee;
console.log(`Employee: ${empName}, Email: ${email}, Phone: ${phone}`);

//3
// Using Spread Operator to Clone Objects
const original = {
  brand: 'Dell',
  model: 'Inspiron 15',
  price: 55000
};

const cloned = { ...original };
console.log('Original:', original);
console.log('Cloned:', cloned);

// Using Spread Operator to Merge Objects
const productDetails = {
  id: 201,
  name: 'Laptop',
  brand: 'HP'
};

const productSpecs = {
  processor: 'Intel i7',
  ram: '16GB',
  storage: '512GB SSD'
};

const mergedProduct = { ...productDetails, ...productSpecs };
console.log('Merged Product:', mergedProduct);