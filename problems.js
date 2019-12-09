// Copy from myga:

// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion



function factorial(){
    
    // This function returns the factorial of a given number.
}




function fibonacci(){
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
}

function fizzBuzz(){
    // Write a function takes a number n as a paramter and, for each number from 1 to n, prints "fizz" if the number is divisible by 3, "buzz" if the number is divisible by 5, and "fizzBuzz" if the number is divisible by both 3 and 5.
}

function reverseString() {
	// This function takes a string and reverses it recursively.
}

function multiplication (){
    // this function takes in two numbers and returns their product (assume both numbers are non-negative)
}


function sumArray() {
    // this function returns the sum of all of the numbers is a given array 
}

function findInArray(){
       // this function takes an array of strings and a target string, and returns a boolean indicating whether the target string is included in the array
}

function findMax(){
    // This function returns the largest number in a given array.
}



function coinFlips(){
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
}

function letterCombinations(){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
}


module.exports = {
    factorial,
    fibonacci,
    reverseString,
    fizzBuzz,
    findInArray,
    sumArray,
    findMax,
    coinFlips,
    letterCombinations,
    multiplication
}
