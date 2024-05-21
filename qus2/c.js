let mixedArray = [1, 2, 3, "4", 5, "6", "seven", 8, "9", 10];

const sumOfNumbers = arr => {
 
  let numbers = arr.filter(item => typeof item === 'number');

 
  return numbers.reduce((sum, num) => sum + num, 0);
};

let sum = sumOfNumbers(mixedArray);
console.log(sum);
