// power of a given number with base and exponent

// iterative
const power = (base, exp) => {
  if (exp === 0) {
    return 1;
  }

  let result = base;
  for (let i = exp - 1; i > 0; i--) {
    result = base * result;
  }
  return result;
};

// recursive
const powerRecursive = (base, exp) => {
  if (exp === 0) {
    return 1;
  }
  return base * powerRecursive(base, exp - 1);
};

let base = 2,
  exp = 3;
console.log(`Iterative: ${base}^${exp}=${power(base, exp)}`);
console.log(`Recursive: ${base}^${exp}=${powerRecursive(base, exp)}`);
(base = 3), (exp = 4);
console.log(`Iterative: ${base}^${exp}=${power(base, exp)}`);
console.log(`Recursive: ${base}^${exp}=${powerRecursive(base, exp)}`);
