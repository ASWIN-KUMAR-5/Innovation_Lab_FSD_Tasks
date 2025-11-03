// week 2 - session 1 - task 3

//1

function greetUser(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

function showMessage() {
  console.log('Welcome');
}

greetUser('Aswin', showMessage);

//2

function processData(data, callback) {
  console.log('Processing data...');
  setTimeout(() => {
    console.log('Data processed successfully:', data);
    callback(); 
  }, 2000);
}

function afterProcessing() {
  console.log('Callback: Now you can display or save the processed data');
}

processData({ id: 1, name: 'Product A' }, afterProcessing);

//3

var globalVar = 'I am Global (var)';

function checkScope() {
  var localVar = 'I am Local (var)';
  let localLet = 'I am Local (let)';
  const localConst = 'I am Local (const)';

  console.log(globalVar);
  console.log(localVar);
  console.log(localLet);
  console.log(localConst);

  if (true) {
    var blockVar = 'Declared with var inside block';
    let blockLet = 'Declared with let inside block';
    const blockConst = 'Declared with const inside block';
    console.log(blockVar);
    console.log(blockLet);
    console.log(blockConst);
  }

  console.log(blockVar);  
}

checkScope();

console.log('Global Variable Outside Function:', globalVar);

//4
// Small Snippet to show var, let, const difference
var x = 10;
var x = 20; // re-declared
x = 30;  // can update
console.log('var x:', x);

// let: cannot be re-declared but can be updated
let y = 40;
// let y = 50; // Error
y = 60;  // can update
console.log('let y:', y);

// const: cannot be re-declared or updated
const z = 70;
// z = 80; // Error 
console.log('const z:', z);
