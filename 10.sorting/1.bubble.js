/* function bubbleSort(arr) {
  let isSwapped;
  do {
    isSwapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSwapped = true;
      }
    }
  } while (isSwapped);
  return arr;
} */

function bubbleSort(arr) {
  let isSwapped;
  let n = arr.length;
  do {
    isSwapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        isSwapped = true;
      }
    }
    n--; //reduce the range as right side is sorted
  } while (isSwapped);
  return arr;
}

const arr = [2, 4, 7, 3, 1];
console.log("Before sorting", arr);
console.log("After sorting", bubbleSort(arr));
