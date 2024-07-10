// Functions are values
// Hoisting does not work when we save function in a variable

function greeting() {
  console.log('Hello!');
}
greeting();


const functionZero = function fun() {
  console.log('New World!');
}
console.log(functionZero);
functionZero();

const objectZero = {
  num: 2,
  func: function() {
    console.log('All the boys and Girls');
  }
};
objectZero.func();

function display(parameter) {
  console.log(parameter);
}

display('N95');

// Function inside function

function run(param) {
  param();
}
run(function() {console.log("KDOT")});

// setTimeout()
setTimeout(function() {
console.log('Time Out');
}, 3000);

setTimeout(function() {
  console.log('Time Out: 5 seconds');
}, 5000);

// setInterval
const container = document.querySelector('.container');

let html = '';
let idInterval;
idInterval = setInterval(function() {

  html += `
    <p>Interval Is Running</p>
  `
  container.innerHTML = html;

}, 3000);
clearInterval(idInterval);

// .forEach()
[
  'Read Ben Fraklin',
  'Code on Foundation',
  'Listen to Lex Fridman podcast'
].forEach(function(value) {
  if (value === 'Code on Foundation') {
    return;
  }
  console.log(value);
})