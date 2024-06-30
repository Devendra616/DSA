/*
"coin change problem", where you need to determine if it's possible to form a specific amount using any combination of elements from a given set, 
which can be used an unlimited number of times.
Find minimum no.of possible coins that can be used to attain the sum"
    minCoinSumPossible(8, [5, 12, 4]); -> 
    minCoinSumPossible(103, [6, 20, 1]); // ->
    minCoinSumPossible(8, [5, 3, 4]) ->
    minCoinSumPossible(15, [4, 6, 10]) -> 
*/

function minCoin(amount, coins, memo = {}) {
  if (amount in memo) return memo[amount];
  if (amount === 0) return 0;
  if (amount < 0) return -1;

  let minCoinsCount = Infinity;

  for (const coin of coins) {
    const result = minCoin(amount - coin, coins, memo);

    if (result !== -1) {
      minCoinsCount = Math.min(minCoinsCount, result + 1);
    }
  }

  // for (const coin of coins) {
  //   let recentCount = 1 + minCoin(coins, amount-coin, memo)
  //   minCoinsCount = Math.min(recentCount, minCoinsCount)
  // }

  memo[amount] = minCoinsCount === Infinity ? -1 : minCoinsCount;

  return memo[amount];
}

function maxCoin(amount, coins, memo = {}) {
  if (amount in memo) return memo[amount];
  if (amount === 0) return 0;
  if (amount < 0) return -1;

  let maxCoinsCount = 0;

  for (const coin of coins) {
    const result = maxCoin(amount - coin, coins, memo);

    if (result !== -1) {
      maxCoinsCount = Math.max(maxCoinsCount, result + 1);
    }
  }

  // for (const coin of coins) {
  //   let recentCount = 1 + minCoin(coins, amount-coin, memo)
  //   minCoinsCount = Math.min(recentCount, minCoinsCount)
  // }

  memo[amount] = maxCoinsCount === 0 ? -1 : maxCoinsCount;

  return memo[amount];
}

// console.log(minCoin(8, [12, 5, 4]));
// console.log(minCoin(103, [20, 6, 1])); //8
// console.log(maxCoin(103, [20, 6, 1])); //103
console.log(minCoin(10, [3, 5, 2])); //2
console.log(maxCoin(10, [3, 5, 2])); //5
// console.log(minCoin(8, [5, 3, 4])); //2
// console.log(maxCoin(8, [5, 3, 4])); //2
// console.log(minCoin(15, [4, 6, 10]));
