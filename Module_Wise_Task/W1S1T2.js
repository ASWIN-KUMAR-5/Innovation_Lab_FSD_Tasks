// week 1 - session 1 - task 2

//1
// Different Data Types

let num = 42;                          // Number
let str = "Hello JavaScript";          // String
let bool = true;                       // Boolean
let nul = null;                        // Null
let undef;                             // Undefined (no value assigned)
let obj = { name: "Aswin", age: 20 };  // Object
let sym = Symbol("id");                // Symbol (unique value)

//2
// Explicit
console.log(Number("10"));
console.log(Number("10abc"));
console.log(String(100));

// Implicit
console.log('5' + 2);
console.log(2 + '5');
console.log('Hello' + 5);

console.log(1 + 2 + '3');
console.log('1' + 2 + 3);
