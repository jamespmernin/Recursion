# Recursion

[![](/Fractal-Mobius-Patterns-05.jpg)](http://google.com.au/)

## Lesson Objectives
- Understand recursion "on a gut level"
- Be able to read recursive code without panicing
- Be able to implement very simple recursive functions 

## Overview

<details>
<summary><strong>What is recursion?</strong></summary>
<br>

It looks like this:

```js
const doStuff = () => {
// blah blah
	doStuff()
}
```

Anytime a function invokes itself, that's recursion!

</details>

<br>

<details>
<summary><strong>Recursion is hard! Why?</strong></summary>
<br>

Recursion is generally hard to reason with; there are different ways to use recursion, and we're used to thinking in loops. Plus, when you mess up, your code crashes, just like `while` loops.

</details>

<br>

<details>
<summary><strong>...But recursion is also awesome! Why?</strong></summary>
<br>

Recursion helps you to reinforce core concepts; it can impress interviewers, peers, first dates, etc... Plus, you can do anything with recursion– you really don't need loops– and it's often a more fun, simple, and clean way of functional iteration.

</details>

<br>

## Let's Experiment

Let's consider the factorial function:

`5! = 5*4*3*2*1`

<br>

### First Things First

Let's take a few minutes to write a javascript function that computes factorials *without using recursion*:

```js
const factorialLoops = (n) => {
    // code!
}
```

Some simple review:

- Your solution will probably involve keeping track of a some "current value," which gets bigger and bigger until it reaches the solution.
- Using an iterator, we update this value by continuously rewriting a variable.

Alternatively, using the "recursive process", we will handle this with the call stack...

<br>

### Second Things Second

Let's try recursion! Using the same programmatic thinking, let's implement the factorial function with recursion– meaning, the function should invoke itself, and it shouldn't use loops. 

First, some tips:

- Start with your “base case,” meaning, the case in which the recursion stops. (Note that without a base case, your code most likely will get stuck in an infinite loop - so be careful!) 
- Code your base case, then keep going, as if the factorial function magically already works for cases less than `n` (I know that sounds weird).
- Think about a simple way to describe `1000!` to a non-programmer, pseudocode it, then turn that into code (I know that also sounds weird). 
  
```js
const factorial = (n) => {
    // code!
}
```

Cool! Think about what this solution looks like in the call stack; try to break down each step. 

<br>

### Let's Try Another

Write a function that gives the `n`th Fibonacci number. (The Fibonacci sequence starts `1,1`, and then each following integer is the sum of the two prior. For example, `1,1,2,3,5,8,13`, so the 7th Fibonacci number is 13, or `fib(7) == 13`.)

Use the same tips from above.

```js
const fib = (n) => {
    // code!
}
```

This recursive function will follow a very similar pattern to the factorial function.

<br>

#### Quick Consideration

What is this function's big-O complexity?

<br>

### Advanced Recursion

<br>

#### Exercise 1

Now let's look at using recursion on lists. Consider a `findMax` function, that should output the greatest integer of an array of integers.

Some reminders:

- Let's start with our base case; what is the "easiest" case here?
- With the base case in place, how can we break this problem down? Meaning, how can we "rephrase" the problem in a recursive way? (Hint: think of it in terms of some smaller list... )

```js
const findMax = (arr) => {
    // code
}
```

<br>

#### Exercise 2

Now, let's use this same strategy to write a `sumArray` function.

```js
const sumArray = (arr)=>{
    // code
}
```

<br>

#### Exercise 3

One quick note: We can also pass data down through recursive function calls to help us.

Let's prove it: try to convert `isPrime` to a recursive function.

old isPrime:

```js
const  isPrime = (num)=> {
    if(num == 1){
      return false
    } else if (num == 2){
        return true
    }
    for(let i = 2; i < num - 1; i++){
      if(num % i == 0){
        return false
      }
    }
    return true
  }
```

<br>

### Recursion Practice

With a partner, try writing some more recursive functions:

1. **Find in Array**: Write a function that takes an array and a string as paramters and returns true if the string is included in the array.
1. **FizzBuzz** Write a function takes a number n as a paramter and, for each number from 1 to n, prints "fizz" if the number is divisible by 3, "buzz" if the number is divisible by 5, and "fizzBuzz" if the number is divisible by both 3 and 5.
1. **Multiplication**: Implement a mult function that multiplies two numbers, a and b (no you can't use *. Obviously.)
1. **CoinFLips**: This function returns an array of all possible outcomes from flipping a coin N times. (see problems.js)
