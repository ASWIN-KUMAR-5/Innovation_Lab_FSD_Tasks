// week 1 - session 2 - task 1

//1
// simple if statement
let age = 18;
if (age >= 18) {
  console.log("You are eligible to vote");
}

//2
// simple if-else statement
let score = 45;
if (score >= 50) {
  console.log("You passed");
} else {
  console.log("You failed");
}

//3
// simple if - else if - else statement
let grade = 85;
if (grade >= 90) {
  console.log("A+ Grade");
} else if (grade >= 80) {
  console.log("A Grade");
} else if (grade >= 70) {
  console.log("B Grade");
} else {
  console.log("C Grade");
}

//4
//simple switch statement
let day = 3;
switch(day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  case 4: console.log("Thursday"); break;
  case 5: console.log("Friday"); break;
  case 6: console.log("Saturday"); break;
  case 7: console.log("Sunday"); break;
  default: console.log("Invalid day");
}