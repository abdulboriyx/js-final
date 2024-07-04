const myArray = [10, 20, 30];
console.log(myArray);

// Place Value
console.log(myArray[1]);

// Order matters
myArray[1] = 100;

console.log(Array.isArray([1, 2]));
console.log(myArray.length);

// .push()
myArray.push(100);
console.log(myArray);

// .splice() -> fist value is for index, second is for number of values
myArray.splice(0, 2);

// Loops
// While loop
let i = 1;

while (i <= 5) {
console.log(i);
i = i + 1;
}

// while loop

let x = 1;

while (x < 11) {
  console.log('Ken & His Friends');
  x++;
};

// for Loop
for (let i = 1; i<=5; i++) {
  console.log('MIT');
};

// Non-standard Loop
let randomNum = 0;
while (randomNum < 0.5) {
  randomNum = Math.random();
}

console.log(randomNum);


const todo = [
  'read Ben Franklin',
  'watch Oppenheimer',
  'listen Lex Fridman'
];

for (i = 0; i <= todo.length -1; i++) {
  const value = todo[i];
  console.log(value);
}

// Problem of calculating all array
let arrayP = [1, 1, 3];
let total = 0;
for (i = 0; i < arrayP.length; i++) {
  const arrayIndex = arrayP[i];
  total += arrayIndex;
};
console.log(total);

// problem of calculating all values of array 2
let arrayName = ['Like That -> ', 'Euphoria -> ', '6:16 in L.A -> ', 'Meet the Grahams -> ', 'Not Like Us'];
let totalDisses = '';
for (i = 0; i < arrayName.length; i++) {
  const dissIndex = arrayName[i];
  totalDisses += dissIndex;
};
console.log(totalDisses);

// doubled array
let doubledArray = [];

for (i = 0; i < arrayP.length; i++) {
  const arrayIndex = arrayP[i];
  doubledArray.push(arrayIndex * 2);
}
console.log(doubledArray);

// tripled array

const array = [7, 10, 17];
let tripledArray = [];

for (i = 0; i < array.length; i++) {
  const arrayValue = array[i];
  tripledArray.push(arrayValue * 3);
}

console.log(tripledArray);