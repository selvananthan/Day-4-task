let numbers = [1, 2, 3, 4, 5];
let k = 2;

let rotateArray = function(arr, k) {
  let rotations = k % arr.length;
  return arr.slice(rotations).concat(arr.slice(0, rotations));
};

let rotatedNumbers = rotateArray(numbers, k);
console.log(rotatedNumbers);
