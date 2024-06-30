/*
"coin change problem", where you need to determine if it's possible to form a specific amount using any combination of elements from a given set, 
which can be used an unlimited number of times."
    sumPossible(8, [5, 12, 4]); -> false
    sumPossible(103, [6, 20, 1]); // -> true
    sumPossible(8, [5, 3, 4]) -> true
    sumPossible(15, [4, 6, 10]) -> false
*/

function sumPossible(amount, numbers, memo = {}) {
  if (amount in memo) return memo[amount];
  if (amount === 0) return true;
  if (amount < 0) return false;
  console.log(`outside=> amount:${amount}, memo: ${JSON.stringify(memo)} `);

  // for optimization checking if amount is covered by one type coin only
  for (const num of numbers) {
    if (amount % num) {
      memo[amount] = true;
      return true;
    }
  }

  for (const num of numbers) {
    if (sumPossible(amount - num, numbers, memo)) {
      memo[amount] = true;
      return true;
    }
  }
  //   add false to amount only if all coins failed to add
  memo[amount] = false;
  return false;
}

// console.log(sumPossible(8, [12, 5, 4]));
// console.log(sumPossible(103, [20, 6, 1]));
console.log(sumPossible(10, [3, 5, 2]));
//  console.log(sumPossible(8, [5, 3, 4]));
// console.log(sumPossible(15, [4, 6, 10]));
