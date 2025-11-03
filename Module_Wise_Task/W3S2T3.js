// week 3 - session 2 - task 3

//1
// Example Function
const person1 = {
  name: 'Aswin',
  age: 22
};

const person2 = {
  name: 'Meenakshi',
  age: 21
};

function introduce(greeting, place) {
  console.log(`${greeting}! I am ${this.name}, ${this.age} years old from ${place}.`);
}

// Using call() - pass arguments individually
introduce.call(person1, 'Hello', 'Chennai');
introduce.call(person2, 'Hi', 'Madurai');

// Using apply() - pass arguments as an array
introduce.apply(person1, ['Hey', 'Coimbatore']);
introduce.apply(person2, ['Welcome', 'Trichy']);

// Using bind() - permanently bind context
const boundIntro1 = introduce.bind(person1, 'Good Morning', 'Salem');
const boundIntro2 = introduce.bind(person2, 'Good Evening', 'Erode');

// Bind returns a new function that can be called later
boundIntro1();
boundIntro2();