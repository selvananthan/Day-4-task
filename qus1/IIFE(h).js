let numbers = [1, 2, 3, 4, 5];
let k = 2;

let rotatedNumbers = (function(arr, k) {
  let rotations = k % arr.length;
  return arr.slice(rotations).concat(arr.slice(0, rotations));
})(numbers, k);

console.log(rotatedNumbers);
