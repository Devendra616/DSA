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

----------

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

Remember to define the base case carefully to avoid infinite recursion!
