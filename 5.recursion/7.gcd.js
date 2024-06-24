// find the Greatest Common Divisor of two numbers
// gcd(42,18) =6

// recursive
const gcdRecursive = (m, n) => {
  if (m == n) {
    return m;
  }

  if (m > n) {
    return gcdRecursive(m - n, n);
  } else {
    return gcdRecursive(m, n - m);
  }
};

let m = 42,
  n = 18;
console.log(`Recursive: gcd of ${m} and ${n} is ${gcdRecursive(m, n)}`);
