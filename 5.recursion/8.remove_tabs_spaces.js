/* 
    Remove Tabs and Spaces from given string
    this includes character \t and " " from a string
*/

// iterative
function removeTabsAndSpaces(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " " && string[i] !== "\t") {
      result += string[i];
    }
  }
  return result;
}

// recursive
function removeTabsAndSpacesRecursive(string, result = "") {
  if (string === "") {
    return string;
  }
  let stringLength = string.length;
  let lastChar = string[stringLength - 1];
  if (lastChar !== " " && lastChar != "\t") {
    result += lastChar;
  }

  return removeTabsAndSpaces(string.substring(0, stringLength - 1), result);
}
let string = "   Hello  Dev de             ";
console.log(removeTabsAndSpaces(string));
console.log(removeTabsAndSpacesRecursive(string));
