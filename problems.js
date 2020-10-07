// Copy from myga:
// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function factorial(x) {
  // This function returns the factorial of a given number.
  return x === 0 ? 1 : x * factorial(x - 1);
}

function fibonacci(x) {
  // This function returns the Xth number in the fibonacci sequence.
  // https://en.wikipedia.org/wiki/Fibonacci_number
  // For this function, the first two fibonacci numbers are 1 and 1
  return x < 2 ? x : fibonacci(x - 1) + fibonacci(x - 2);
}

function fizzBuzz(x) {
  // Write a function takes a number x as a parameter and, for each number from 1 to x, prints "fizz" if the number is divisible by 3, "buzz" if the number is divisible by 5, and "fizzBuzz" if the number is divisible by both 3 and 5.
  if (x === 1) {
    return '1';
  } else {
    let fizzer = (x % 15 === 0) ? ', fizzBuzz' :
      (x % 5 === 0) ? ', buzz' :
        (x % 3 === 0) ? ', fizz' :
          `, ${x}`;
    return fizzBuzz(x - 1) + fizzer;
  }
}

function reverseString(s) {
  // This function takes a string and reverses it recursively.
  return s === '' ? s : reverseString(s.slice(1)) + s[0];
}

function multiplication(x, y) {
  // this function takes in two numbers and returns their product (assume both numbers are non-negative)
  if (x < y) {
    return multiplication(y, x);
  } else if (y !== 0) {
    return (x + multiplication(x, y - 1));
  } else {
    return 0;
  }
}

function sumArray(a) {
  // this function returns the sum of all of the numbers is a given array
  return a.length === 1 ? a[0] : a[0] + sumArray(a.slice(1));
}

function findInArray(a, s) {
  // this function takes an array of strings and a target string, and returns a boolean indicating whether the target string is included in the array
  return a.length === 0 ? false : a[0] === s ? true : findInArray(a.slice(1), s);
}

function findMax(a) {
  // This function returns the largest number in a given array.
  return a.length === 1 ? a[0] : (a[0] > findMax(a.slice(1)) ? a[0] : findMax(a.slice(1)));
}

function coinFlips(x) {
  // This function returns an array of all possible outcomes from flipping a coin x times.
  // Input type: Integer
  // For example, coinFlips(2) would return the following:
  // ["HH", "HT", "TH", "TT"]
  // H stands for Heads and T stands for tails
  // Represent the two outcomes of each flip as "H" or "T"
  return x <= 0 ? [''] : coinFlips(x - 1).flatMap(r => [r + 'H', r + 'T']);
}

function letterCombinations(a) {
  // This function returns an array of all combinations of the given letters
  // Input type: Array of single characters
  // For example, letterCombinations(["a","b","c"]) would return the following:
  // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
  if (a.length === 1) {
    return [a[0]];
  }
  let all = [];
  for (let i = 0; i < a.length; i++) {
    const currentLetter = a[i];
    const remainingLetters = a.slice(0, i) + a.slice(i + 1);
    const combsOfRemainingLetters = letterCombinations(remainingLetters);
    all.push(currentLetter)
    combsOfRemainingLetters.forEach(subComb => {
      let result = (currentLetter + subComb);
      if (!(result.indexOf(',') > -1)) {
        all.push(result);
      }
    });
  }
  return all;
}

module.exports = {
  factorial,
  fibonacci,
  fizzBuzz,
  reverseString,
  multiplication,
  sumArray,
  findInArray,
  findMax,
  coinFlips,
  letterCombinations,
}