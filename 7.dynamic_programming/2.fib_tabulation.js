// find nth fibonacci number using tabulation

function fibTab(n) {
  if (n <= 1) return n;

  const table = Array(n + 1).fill(0);

  table[1] = 1;

  for (let i = 2; i <= n; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }

  return table[n];
}

// Example:
const n = 10;
console.log(`F(${n}) = ${fibTab(n)}`);
