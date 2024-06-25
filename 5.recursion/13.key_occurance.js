/* 
    Find no.of occurance of a key in array or string
    arr = [2,3,6,2,4,4,2,9,2]
    key = 2
    result = 4
*/
// iterative
function countKey(array, key) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === key) {
      count++;
    }
  }
  return count;
}

// recursive
function countKeyRecursive(array, key, index = 0) {
  if (index >= array.length) {
    return 0;
  }
  /* 
  if (array[index] === key) {
    return 1 + countKeyRecursive(array, key, index + 1);
  } else {
    return countKeyRecursive(array, key, index + 1);
  } */

  return (
    (array[index] === key ? 1 : 0) + countKeyRecursive(array, key, index + 1)
  );
}

let arr = [2, 3, 6, 2, 4, 4, 2, 9, 2];
let key = 2;
console.log(`Iterative: key:${key}, result:${countKey(arr, 2)}`);
console.log(`Recursive: key:${key}, result:${countKeyRecursive(arr, 2)}`);
