// count the number of vowels in a string

// iterative solution
function countVowelsIterative1(str) {
  str = str.toLowerCase();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}

function countVowelsIterative2(str) {
  str = str.toLowerCase();
  let count = 0;
  let vowels = "aeiou";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

// recursive solution
function countVowelsRecursive(str) {
  if (str.length === 0) {
    return 0;
  }
  if (
    str[0] === "a" ||
    str[0] === "e" ||
    str[0] === "i" ||
    str[0] === "o" ||
    str[0] === "u"
  ) {
    return 1 + countVowelsRecursive(str.slice(1));
  }
  console.log(str);
  return countVowelsRecursive(str.slice(1));
}

// returns true if the character is a vowel
function isVowel(character) {
  character = character.toLowerCase();
  return (
    character === "a" ||
    character === "e" ||
    character === "i" ||
    character === "o" ||
    character === "u"
  );
}

function countVowelsRecursive2(str, stringLength = str.length) {
  console.log(
    `Checking Length: ${stringLength}, currentString: ${str.substring(
      0,
      stringLength
    )}`
  );
  if (stringLength === 1) {
    return Number(isVowel(str[0]));
  }

  /*  return (
    countVowelsRecursive2(str, stringLength - 1) +
    Number(isVowel(str[stringLength - 1]))
  ); */

  let result =
    countVowelsRecursive2(str, stringLength - 1) +
    Number(isVowel(str[stringLength - 1]));
  console.log(
    `Count after checking ${str[stringLength - 1]}, Result: ${result}`
  );
  return result;
}

// console.log(countVowelsIterative1("hello world"));
// console.log(countVowelsIterative2("hello world"));
// console.log(countVowelsRecursive("hello world"));
console.log(countVowelsRecursive2("hello world"));
