// week 1 - session 2 - task 2

//1
//while loop
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

//2
//do-while loop
let count = 1;
do {
  console.log('Count:', count);
  count++;
} while (count <= 5);

//3
//for loop
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log("Sum of first 5 natural numbers is:", sum);

//4
// nested for loop: multiplication table 1 to 3
for (let row = 1; row <= 3; row++) {
  for (let col = 1; col <= 5; col++) {
    console.log(`${row} x ${col} = ${row * col}`);
  }
  console.log("-----");
}