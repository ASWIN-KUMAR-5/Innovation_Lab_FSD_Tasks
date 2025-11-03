// week 1 - session 2 - task 3

//1
// break statement
for (let i = 2; i <= 20; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log("First prime number is:", i);
    break;
  }
}

//2
// continue statement
for (let x = 1; x <= 20; x++) {
  if (x % 2 === 0) {
    continue;
  }
  console.log(x);
}