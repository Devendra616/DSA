/* 
    check in array if paranthesis are balanced
    Input = ["(", "(", ")", ")", "(", ")"]
    Output= true
*/

// iterative: count=1 for opening, count=-1 for closing
function balancePar(array) {
  let check = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === ")") {
      check--;
    }
    if (array[i] === "(") {
      check++;
    }
    if (check < 0) {
      // should not close before opening
      return false;
    }
  }
  return check === 0;
}

// recursive: count=1 for opening, count=-1 for closing
function balanceParRec(array, startIndex = 0, count = 0) {
  if (startIndex === array.length) {
    return count === 0;
  }

  // if closing found first then false
  if (count < 0) {
    return false;
  }

  if (array[startIndex] === "(") {
    return balanceParRec(array, startIndex + 1, count + 1);
  } else {
    return balanceParRec(array, startIndex + 1, count - 1);
  }
}

let input = ["(", ")", ")", ")", ")"];
let input2 = ["(", "(", ")", ")", "(", ")"];
console.log("Iterative:", balancePar(input));
console.log("Recursive:", balanceParRec(input));

console.log("Iterative:", balancePar(input2));
console.log("Recursive:", balanceParRec(input2));
