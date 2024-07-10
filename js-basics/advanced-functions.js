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
].forEach((value) => {
  if (value === 'Code on Foundation') {
    return;
  }
  console.log(value);
})

// arrow Functions
const arrowFun = () => {
  console.log('Hello');
};
arrowFun();

// shortcut
const oneParam = param => {
  console.log((param + 2) / 2);
}
oneParam(4);

// .addEventListener
const eventFun = ()=>{
  console.log('click');
};

const buttonElem = document.querySelector('.button-class');

buttonElem.addEventListener('click', eventFun);

buttonElem.removeEventListener('click', eventFun);

buttonElem.addEventListener('click', ()=>{
  console.log('click-zero');
});

// filter
console.log([1, -7, 5].filter((value, index) =>{
  return value >= 0;
}));

// map
console.log([1, 1, 3].map((value, index) => {
  return value * 2;
}));