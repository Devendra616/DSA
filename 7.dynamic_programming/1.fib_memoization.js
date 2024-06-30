// find nth fibonacci number using memoization

function fibMemo(n, memo = {}) {
  // Base case: F(0) = 0, F(1) = 1
  if (n <= 1) return n;

  // If already computed, return stored value
  if (n in memo) return memo[n];

  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}

// Example:
const n = 10;
console.log(`F(${n}) = ${fibMemo(n)}`);
