// sum of numbers till N
// N=4 sum = 1+2+3+4

// iterative
const sumN = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

// resursion
const sumNRecursive = (n) => {
  if (n === 1) {
    return n;
  }
  return n + sumNRecursive(n - 1);
};

let n = 5;
console.log(`Iterative: sum till ${n}= ${sumN(n)}`);
console.log(`Recursive: sum till ${n}= ${sumNRecursive(n)}`);

n = 10;
console.log(`Iterative: sum till ${n}= ${sumN(n)}`);
console.log(`Recursive: sum till ${n}= ${sumNRecursive(n)}`);
