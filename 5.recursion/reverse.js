// Reverse a string

// iterative
function reverseIterative(str) {
  let reverse = "";
  let length = str.length;

  while (length > 0) {
    reverse += str[length - 1];
    length--;
  }
  return reverse;
}

// recursive
function reverseRecursive(str) {
  console.log(`current string ${str}`);
  if (str.length === 0) {
    return "";
  }
  let reversePart = reverseRecursive(str.substring(0, str.length - 1));
  let result = str[str.length - 1] + reversePart;

  console.log(
    `Reversing: Last char ${
      str[str.length - 1]
    } is added infront of ${reversePart} to form ${result}`
  );

  return result;
}

console.log("Iteractive ", reverseIterative("Hello"));
console.log("Recursive ", reverseRecursive("Hello"));
