## What is Recursion?

Recursion is a programming technique where a function calls itself directly or indirectly to solve a problem. It involves breaking down a problem into smaller sub-problems and solving them in a similar manner. In the context of functions, recursion means a function calling itself during its execution.

## Why Use Recursion?

Recursion is useful for solving problems that can be broken down into smaller, similar sub-problems. Here are some reasons why recursion is used:

1.  **Smaller Sub-Problems:** Recursion allows you to express complex problems in terms of simpler ones by dividing them into smaller parts.
2.  **Shorter Code:** In some cases, recursive solutions can be more concise than iterative ones. However, this is not always the case, and readability should be considered.
3.  **Solving Complex Problems:** Recursion can be used to solve problems that are not easily solvable using loops or iteration.
4.  **Avoiding Nested Loops:** Recursion can help avoid deeply nested loops, although it doesn’t necessarily reduce time complexity.

## Base Case

A crucial aspect of recursion is the base case. The base case defines when the recursion should stop. Without a base case, the function would keep calling itself indefinitely (leading to a stack overflow).

## Memory in Recursion

Recursion uses two types of memory:

1.  **Stack Memory:** Each recursive call creates a new stack frame (activation record) to store local variables and function arguments. The stack memory holds information about the current function call and its context.
2.  **Heap Memory:** Heap memory is used to store data that is passed to recursive calls. It includes objects, arrays, and other dynamically allocated data.

Memory allocation for a called function occurs on top of the memory for the calling function. Each function call gets its own copy of local variables.

---

### Code Snippets

Here are some examples of recursive functions in JavaScript:

1.  **Factorial:**

```javascript
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1; // Base case
  }
  return n * factorial(n - 1); // Recursive call
}
```

2.  **Fibonacci Sequence:**

```javascript
function fibonacci(n) {
  if (n <= 1) {
    return n; // Base case
  }
  return fibonacci(n - 1) + fibonacci(n - 2); // Recursive call
}
```

3.  **Sum of Array Elements:**

```javascript
function sumArray(arr, index = 0) {
  if (index === arr.length) {
    return 0; // Base case
  }
  return arr[index] + sumArray(arr, index + 1); // Recursive call
}
```

** Remember to define the base case carefully to avoid infinite recursion! **

### Problems

1.  [Reverse a string](./1.reverse.js) : Given a string, return the reversed string.
2.  [Count Vowels](./2.countVowels.js) : Count the number of vowels in a string.
3.  [First Occurrence](./first_occurrence.js): Find first occurrence of a character in an array/string, search starts from the given currentIndex and returns -1 if not found.
4.  [Fibonacci Series](./4.fibonacciSeries.js): Find nth element of Fibonacci series 0,1,1,2,3,5,8 ......
5.  [Power of number](./5.powerNum.js): Find power of a number. pow(2,3) = 8
6.  [Sum of N numbers](./6.sumN.js): Find sum of first N numbers 1,2,3,4,....N
7.  [GCD of two numbers](./7.gcd.js): Find the Greatest common divisor (GCD) of two numbers
8.  [Remove tabs and spaces](./8.remove_tabs_spaces.js): Remove all spaces and tabs from a given string.
9.  [Remove adjacent duplicates](./9.removeAdjDup.js): Remove all adjacent duplicates and print one of the duplicated value. aaabcc => abc
10. [Remove adjacent duplicates](./10.removeAdjDup2.js): Remove all adjacent duplicates and print none of the duplicated value. aaabcc => b
11. [Implement length function](./11.implement_length.js): Implement length() function without using length or length()
