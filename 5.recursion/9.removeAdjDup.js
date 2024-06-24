/* 
    remove adjacent duplicates
    
    let inputString = "aabcc"
    output = "abc"
    let i = 1    
    console.log(inputString.substring(0, i))
    console.log(inputString.substring(i + 1))
    console.log(inputString.substring(0, i) + inputString.substring(i + 1))
*/

function removeAdjacentDuplicates(string) {
  let result = "";
  for (let index = 0; index < string.length; index++) {
    if (string[index] !== string[index + 1] || index === string.length - 1) {
      result += string[index];
    }
  }
  return result;
}

function removeAdjacentDuplicatesRecursive(string) {
  if (string.length <= 1) {
    return string;
  }
  if (string[0] === string[1]) {
    return removeAdjacentDuplicatesRecursive(string.substring(1));
  } else {
    return string[0] + removeAdjacentDuplicatesRecursive(string.substring(1));
  }
}

let string = "aabbcdefeee";
console.log(removeAdjacentDuplicates(string));
console.log(removeAdjacentDuplicatesRecursive(string));
