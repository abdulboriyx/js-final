const nums = [10, 20, 30];
nums[2] = 99;
console.log(nums);

// 2nd
function getLastValue(array) {
  let lastValue = array.length -1;
  return array[lastValue];
}
console.log(getLastValue([10, 20, 30]));

// Array Swap
function arraySwap(arrayOne) {
const lastIndex = arrayOne.length -1;

const lastValue = arrayOne[lastIndex];
const firstValue = arrayOne[0];

arrayOne[0] = lastValue;
arrayOne[lastIndex] = firstValue;

return arrayOne;
}
console.log(arraySwap(['Euphoria', '6:16 in L.A', 'Meet The Grahams']));

// Count
for (i = 0; i <= 11; i+=2) {

  console.log(i)

}
// 5 to 0
for (i = 5; i >= 0; i--) {
  console.log(i);
}
// new Array
const arrayZero = [1, 5, 10];
let arrayX = [];
for (i = 0; i <    arrayZero.length; i++) {
  const arrayIndex = arrayZero[i];
  arrayX.push(arrayIndex * 2);

}
console.log(arrayX);

// Advanced Functions

const add = function calculate() {
  console.log(2+3);
}
add();
// 2nd
function runTwice(fun) {
  fun();
  fun();
}

runTwice(function() {
  console.log('12b');
})
runTwice(add);

// 3rd
setTimeout(function() {
  document.querySelector('.start-button').innerHTML = 'Finished!';
}, 1000);

// 4th
function updateButton() {
  const button = document.querySelector('.button-class');

  button.innerHTML = 'Loading...';
  setTimeout(function() {
    button.innerHTML = 'Finished';
  }, 1000);
};

// 5th
