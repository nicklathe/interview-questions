'use strict';

// *********** Iterate with recursion ***********
let arr = [1,2,3,4,5,6,7];

let iterate = (arr) => {
  if(arr.length === 0) {
    return;
  };
  console.log(arr.shift());
  iterate(arr);
};


// *********** Closure example in Javascript ***********
let addNumbers = (num1) => {
  return (num2) => {
    return num1 + num2;
  }
};
// both console.log's should output 4;
console.log(addNumbers(2)(2));
let addTo4 = addNumbers(2);
console.log(addTo4(2));


// *********** Hoisting ***********
Undefined
2


// *********** eventLoop ***********
1
4
3
2

// *********** operators ***********
true
false


// *********** fizzBuzz ***********
let checker = (num, divisor) => num % divisor === 0;

let fizzerBuzzer = (arr) => {
    return arr.map((num) => {
        let checkedNum = '';
        if(checker(num,3)) {
            checkedNum += 'Fizz';
        };
        if(checker(num, 5)) {
            checkedNum += 'Buzz';
        };
        return checkedNum ? checkedNum : num;
    }).reduce((output, item) => {
        return output += `${item}\n`;
    },'');
};


// *********** sum ***********
let total = nums.reduce((total, current) => {
    return total += current;
}, 0);


// *********** animals ***********
let printNameAndSpecies = (animal) => `${animal.name} is a ${animal.species}`;
let isDog = (animal) => animal.species === 'dog';

let dogs = animals.filter(isDog).map(printNameAndSpecies);


// *********** minCoins ***********
let minCoins = (amount, index, count, denomination) => {
    if((index + 1) > denomination.length) {
        return count;
    }
    if(amount >= denomination[index]) {
        amount -= denomination[index];
        count += 1;
    } else {
        index += 1;
    }
    return minCoins(amount, index, count, denomination);
};

console.log(minCoins(92, 0, 0, [25,10,5,1]));
