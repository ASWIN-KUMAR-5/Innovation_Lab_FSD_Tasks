// week 2 - session 2 - task 3

//1
// forEach()
const numbers = [2, 4, 6, 8, 10];
numbers.forEach((num, index) => {
  console.log(`Index ${index}: Value ${num}`);
});

//2
// map()
const squared = numbers.map(num => num * num);
console.log('Original Numbers:', numbers);
console.log('Squared Numbers:', squared);

//3
// for-in loop - iterate over indexes
for (let index in numbers) {
  console.log(`Index: ${index}, Value: ${numbers[index]}`);
}

//4
// for-of loop - iterate over values
for (let value of numbers) {
  console.log(`Value: ${value}`);
}
