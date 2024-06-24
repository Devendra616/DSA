/* Program to find the first occurrence of a character in an array
  arr = [3, 4, 1, 8, 1, 7];
  findMe = 1;
  currIndex = 0;
  -> Output = 2
  if not found = -1 
*/

// iterative
const firstOccurrenceIterative = (arr, findMe, currentIndex = 0) => {
  for (let i = currentIndex; i < arr.length; i++) {
    if (arr[i] === findMe) {
      return i;
    }
  }
  return -1;
};

// recursive
function firstOccurrenceRecursive(arr, findMe, currentIndex = 0) {
  if (arr.length === currentIndex) {
    return -1;
  }
  if (arr[currentIndex] === findMe) {
    return currentIndex;
  }
  return firstOccurrenceRecursive2(arr, findMe, currentIndex + 1);
}

// Driver code
let str = "Devendra";
let char = "e";

index = firstOccurrenceIterative(str, char, 1);
console.log(
  "firstOccurrenceIterative: Index of '" +
    char +
    "' in '" +
    str +
    "' is " +
    index
);

console.log(
  "firstOccurrenceRecursive: Index of '" +
    char +
    "' in '" +
    str +
    "' is " +
    index
);

index = firstOccurrenceRecursive(str, char, 1);
