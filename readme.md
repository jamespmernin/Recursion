# Recursion 101:

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
- Code your base case, and keep going as if  the factorial function magically already works (I know that sounds weird).
- Think about a simple way to describe ”1000!” to a non-programmer in plain English, then turn that into code (I know that also sounds weird). 
  
```js
const f = (n)=>{
    // code!
}
```

-Cool! Think about what this solution looks like in the call stack; try to break down each step. 

##### Let's try another: write a function that gives the nth fibinacci number:
`1,1,2,3,5,8`
so `fib(4) == 3`

Use the same tips from above:
```js
const fib = (n)=>{
    // code!
}
```
What is this functions big-O complexity? *gasp*

- Recursion doesn't have to use the call-stack this way; we can also pass data down through function calls to help us.

##### Let's try implementing a recursive function that simply logs each element of an array (doing this with a loop will be easy!)

- We'll need to pass the index along as we go... so what would the base case be?

We can use recursion to search through other data structures, like Trees; we could even implement DOM selections using recursion.

##### Let's make a function that turns every span blue **without using DOM selectors**.
- Think about searching through an elements children; how would you describe our method "out load"?
- Where to begin? What's the base case? What DOM selector methods will we need?


Difficult: coinFlips (todo:)