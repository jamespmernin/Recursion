// Copy from myga:

// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(arr) {
  if (arr.length == 1) {
    return arr[0];
  } else {
    const firstElement = arr[0];
    const maxOfOtherElement = findMax(arr.slice(1));
    if (firstElement > maxOfOtherElement) {
      return firstElement;
    } else {
      return maxOfOtherElement;
    }
  }
}

function sum(arr){
    if (arr.length == 1) {
        return arr[0];
    } else {
        return arr[0] + sum((arr.slice(1) ))
    }
}

const sumOneLiner = (a) => a.length == 1 ? a[0] : a[0] + sumOneLiner((a.slice(1) ))




// This function returns the factorial of a given number.
function factorial(n) {
  if (n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function fibonacci(n) {
  // This function returns the Nth number in the fibonacci sequence.
  // https://en.wikipedia.org/wiki/Fibonacci_number
  // For this function, the first two fibonacci numbers are 1 and 1
  if (n == 1 || n == 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}


// This function returns an array of all possible outcomes from flipping a coin N times.
// Input type: Integer
// For example, coinFlips(2) would return the following:
// ["HH", "HT", "TH", "TT"]
// H stands for Heads and T stands for tails
// Represent the two outcomes of each flip as "H" or "T"
function coinFlips(n) {
  if (n == 1) {
    return ["H", "T"];
  }
  const previous = coinFlips(n - 1);
  const solution = [];
  previous.forEach(res => {
    solution.push("H" + res);
    solution.push("T" + res);
  });
  return solution;
}


function isPrime(num, index = 2) {
    if (num == 1) {
        return false;
    } else if (num == 2) {
        return true;
    }

    if (index >= Math.sqrt(num)){
        return true
    }


    if (num % index == 0){
        return false
    } else {
        return isPrime(num, index + 1)
    }
}


 // This function returns an array of all combinations of the given letters
  // Input type: Array of single characters
  // For example, letterCombinations(["a","b","c"]) would return the following:
  // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]

function letterCombinations(arr) {
  // ...
}
// Test Script below, DO NOT TOUCH


function bluify(currentEl){
    
    if(!currentEl){
        currentEl = document.body
    }
    if(currentEl.nodeName == 'SPAN'){
        currentEl.style.backgroundColor = 'blue'
        currentEl.innerText = 'dzg was here'
        
    }
    for (var i = 0 ; i< currentEl.children.length  ; i ++  ) {
        bluify(currentEl.children[i])
    }
}


function findInArray(arr, el){
  
  if (arr.length === 0){
    return false
  }
  if (arr[0] === el ){
    return true
  } else {
      return findInArray((arr.slice(1) ), el)
  }
}

function fizzBuzz(n, index = 1) {
  const div3 = index % 3 == 0;
  const div5 = index % 5 == 0;
  if (div3 && div5){
    console.log('fizzbuzz');
  } else if (div3){
    console.log('fizz');
  } else if (div5){
    console.log("buzz"); 
  }

  if (index < n){
    fizzBuzz(n, index + 1)
  }
}


function mult(a,b, accumumlatedProduct = 0, index) {
  if (a == 0 || b == 0){
    return 0
  } else if (a == 1){
    return b + accumumlatedProduct
  } else if ( b == 1){
    return a + accumumlatedProduct
  }

  return mult(a, b -1, accumumlatedProduct + a)
}



