// implement length method without using .length or length()

function lengthItr(input) {
  let i = 0;
  while (input[i]) {
    i++;
  }
  return i;
}

function lengthRec(input) {
  if (input === "") {
    return 0;
  }

  return 1 + lengthRec(input.substring(1));
}

function getLengthRecursive(str, index = 0) {
  if (str[index] === undefined) {
    return index;
  }
  return getLengthRecursive(str, index + 1);
}

let string = "hello0";
console.log(lengthItr(string));
console.log(lengthRec(string));
console.log(getLengthRecursive(string));
