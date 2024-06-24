// Find nth element of Fibonacci series

// iterative
function fibonacci(index) {
  let first = 0;
  let second = 1;
  let third = null;

  if (index <= 1) {
    return index;
  } else {
    for (let i = 2; i <= index; i++) {
      third = first + second;

      first = second;
      second = third;
    }
    return third;
  }
}

// recursive
function fibonacciRecursive(index) {
  if (index <= 1) {
    return index;
  }
  return fibonacciRecursive(index - 1) + fibonacciRecursive(index - 2);
}

const index = 8;
const fib_n = fibonacci(index);
console.log(`Iterative: ${index} term is: ${fib_n}`);

const fib_n_rec = fibonacciRecursive(index);
console.log(`Recursive: ${index} term is: ${fib_n_rec}`);
