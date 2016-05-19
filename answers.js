'use strict';

// Iterate with recursion
let arr = [1,2,3,4,5,6,7];

let iterate = (arr) => {
  console.log(arr[0]);
  if(arr.length === 1) {
    return;
  };
  arr.shift();
  iterate(arr);
};

// iterate(arr);


// Closure example in Javascript

let addNumbers = (num1, num2) => {
  return (num2) => {
    return num1 + num2;
  }
};


// both console.log's should output 4;
// console.log(addNumbers(2)(2));
// let addTo4 = addNumbers(2);
// console.log(addTo4(2));
