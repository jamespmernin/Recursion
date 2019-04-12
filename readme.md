# Recursion 101:
[![](/Fractal-Mobius-Patterns-05.jpg)](http://google.com.au/)

### Goals:
- Understand recursion "on a gut level"
- Be able to read recursive code without panicing
- Be able to implement very simple recursive functions 



*“Hofstadter's Law: It always takes longer than you expect, even when you take into account Hofstadter's Law.”*

 (Was that a meaningless sentence... or not?)


- What is recursion? It looks like this:
```js
const doStuff = ()=> {
// blah blah
	doStuff()
}
```
- Anytime a function invokes itself, that's recursion! 

<details>
<summary><strong>Recursion is hard! Why?</strong></summary>
<br>

 - It's generally hard to reason about; we're used to thinking in loops!
 - When you mess up, your code crashes (like with while loops)
 - There are different ways to use recursion

</details>
<br>
<details>
<summary><strong>...But recursion is awesome! Why?</strong></summary>
<br>

- Force you to understand core concepts; impresses interviewers, peers, first dates, etc.
- You can do anything with recursion (you don’t really need loops!) 

- Code is often very simple / clean
- It's fun! (I swear!)





</details>

Let's consider the factorial function:

`5! = 5*4*3*2*1`

##### First things first: write a javascript function that computes factorials *without using recursion*:

```js
const f = (n)=>{
    // code!
}
```
- Your solution with probably involve keeping track of a some "current value," which gets bigger and bigger until it reaches the solution
- Using an iterator, we update this value by continuously rewriting a variable
- Using a "recursive process", we will handle this with the call stack...


#### Try it! Implement the factorial function with recursion; i.e., the function should invoke itself, and it shouldn't use loops. First, some tips:


- Start with your “base case,” i.e., the case in which the recursion stops; this is often “the easy case” (what’s the “easy case” for factorials?)
    - (Note that without a base case, your code may get stuck in an infinite loop - so be careful!) 
- Code your base case, and keep going as if  the factorial function magically already works for cases less than n (I know that sounds weird).
- Think about a simple way to describe ”1000!” to a non-programmer in plain English, then turn that into code (I know that also sounds weird). 
  
```js
const f = (n)=>{
    // code!
}
```

-Cool! Think about what this solution looks like in the call stack; try to break down each step. 

##### Let's try another: write a function that gives the nth fibinacci number:

The fibinacci sequence starts `1,1`, and then each following number is the sum of the two previous ones:

`1,1,2,3,5,8,13`

so `fib(7) == 13`

Use the same tips from above:
```js
const fib = (n)=>{
    // code!
}
```
This recursive function will follow a very similar pattern to the factorial function.


What is this function's big-O complexity? *gasp*


- Now let's look at using recursion on lists. Consider a max function, that should output the greatest element of a list.
- Let's start with our base case: what's the "easiest" case here?
- With the base case in place, how can we break this problem down? I.e., how can we "rephrase" the problem in a recursive way? (Hint: think of it in terms of some smaller list... )

```js
const findMax = (arr)=>{
    // code
}
```


##### Now use this same strategy to write a sumArray function.
```js
const sumArray = (arr)=>{
    // code
}
```




- Recursion doesn't have to use the call-stack this way; we can also pass data down through function calls to help us. Prove it, let's try to convert isPrime to a recursive function.

old is Prime:

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


#### Recursion Practice Problems
1. **Find in Array**: Write a function that takes an array and a string as paramters and returns true if the string is included in the array.
2. **FizzBuzz** Write a function takes a number n as a paramter and, for each number from 1 to n, prints "fizz" if the number is divisible by 3, "buzz" if the number is divisible by 5, and "fizzBuzz" if the number is divisible by both 3 and 5.
3. **Multiplication**: Implement a mult function that multiplies two numbers, a and b (no you can't use *. Obviously.)
4. **CoinFLips**: This function returns an array of all possible outcomes from flipping a coin N times. (see problems.js)


Bonus:
##### Let's make a function that turns every span-tag blue **without using DOM selectors!**.
- Think about searching through an elements children; how would you describe our method "out load"?
- Where to begin? What's the base case? What DOM selector methods will we need?




