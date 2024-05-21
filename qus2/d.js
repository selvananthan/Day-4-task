let mixedArray = [1, 2, 3, "4", 5, "6", "seven", 8, "9", 10];


const isPrime = num => {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
};


const getPrimeNumbers = arr => {
 
  let numbers = arr.filter(item => typeof item === 'number');


  return numbers.filter(num => isPrime(num));
};

let primeNumbers = getPrimeNumbers(mixedArray);
console.log(primeNumbers);
