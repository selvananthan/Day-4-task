let mixedArray = ["madam", "hello", "racecar", 12321, "level", "example"];


const isPalindrome = str => {
  const cleanStr = String(str).toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = cleanStr.split('').reverse().join('');
  return cleanStr === reversedStr;
};


const getPalindromes = arr => {

  let strings = arr.filter(item => typeof item === 'string');


  return strings.filter(str => isPalindrome(str));
};

let palindromes = getPalindromes(mixedArray);
console.log(palindromes);
