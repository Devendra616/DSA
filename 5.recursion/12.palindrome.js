// check if string is palindrome or not

function palindrome(input) {
  for (let i = 0, j = input.length - 1; i <= j; i++, j--) {
    console.log(`i:${i}, j:${j}, i:${input[i]}, j:${input[j]}`);
    if (input[i] !== input[j]) {
      return false;
    }
  }
  return true;
}

function palindromeRec(input) {
  if (input.length <= 1) {
    return true;
  }

  if (input[0] === input[input.length - 1]) {
    return palindromeRec(input.substring(1, input.length - 1));
  } else {
    return false;
  }
}

let string1 = "madam";
let string2 = "amddema";
console.log("Iterative", palindrome(string1));
console.log("Iterative", palindrome(string2));

console.log("Recursive", palindromeRec(string1));
console.log("Recursive", palindromeRec(string2));
