# Sorting

Sorting is the process of arranging elements in a specific order. There are many sorting algorithms, but in this section, we will focus on five sorting algorithms: Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, and Quick Sort.

## Bubble Sort

Bubble Sort is a simple sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. It is easy to understand and implement.

### Example 
Initial Array : `[5, 1, 4, 2, 8]`

**First Iteration :**
- Compare 5 and 1: Swap because 5 > 1 
```js
[1, 5, 4, 2, 8]
```
- Compare 5 and 4: Swap because 5 > 4
```js
    [1, 4, 5, 2, 8]
```
- Compare 5 and 2: Swap because 5 > 2
```js
    [1, 4, 2, 5, 8]
```
- Compare 5 and 8: No swap because 5 < 8
```js
    [1, 4, 2, 5, 8]
```
**Second Iteration :**
- Compare 1 and 4: No swap because 1 < 4
```js
    [1, 4, 2, 5, 8]
```
- Compare 4 and 2: Swap because 4 > 2
```js
    [1, 2, 4, 5, 8]
```
- Compare 4 and 5: No swap because 4 < 5
```js
    [1, 2, 4, 5, 8]
```
Last element is sorted, so we stop the loop.

**Third Iteration :**
- Compare 1 and 2: No swap because 1 < 2
```js
   [1, 2, 4, 5, 8]
```
- Compare 2 and 4: No swap because 2 < 4
```js
   [1, 2, 4, 5, 8]
```
Last two elements are sorted, so we stop the loop.

**Fourth Iteration :**
 - There were no swaps in the previous iteration, so we don't need to do anything.
 
Final Array : `[1, 2, 4, 5, 8]`
### Complexity
| **Case**       | **Time Complexity** | **Space Complexity** |
|----------------|---------------------|----------------------|
| Best Case      | $$O(n)$$            | $$O(1)$$             |
| Average Case   | $$O(n^2)$$          | $$O(1)$$             |
| Worst Case     | $$O(n^2)$$          | $$O(1)$$             |


### Code
[View Code](./1.bubble.js)

## Insertion Sort
Insertion Sort is a simple comparison-based sorting algorithm that works by repeatedly inserting an element from the unsorted part of the array into its correct position in the sorted part of the array.

### Algorithm

1. Start from the second element (index 1), as the first element is considered sorted.
2. Compare the current element with the previous elements.
3. If the current element is smaller than the previous element, compare it with the elements before. Move the greater elements one position up to make space for the swapped element.

### Example
Let's sort the array `[12, 11, 13, 5, 6]` using Insertion Sort.

1. **Initial Array**: `[12, 11, 13, 5, 6]`

2. **First Pass**:
   - Compare `11` with `12`.
   - Since `11` is smaller, swap them.
   - Array: `[11, 12, 13, 5, 6]`

3. **Second Pass**:
   - Compare `13` with `12`.
   - `13` is greater, so no change.
   - Array: `[11, 12, 13, 5, 6]`

4. **Third Pass**:
   - Compare `5` with `13`, `12`, and `11`.
   - Move `13`, `12`, and `11` one position up.
   - Insert `5` at the beginning.
   - Array: `[5, 11, 12, 13, 6]`

5. **Fourth Pass**:
   - Compare `6` with `13`, `12`, and `11`.
   - Move `13`, `12`, and `11` one position up.
   - Insert `6` after `5`.
   - Array: `[5, 6, 11, 12, 13]`

6. **Sorted Array**: `[5, 6, 11, 12, 13]`

### Complexity
| **Case**       | **Time Complexity** | **Space Complexity** |
|----------------|---------------------|----------------------|
| Best Case      | $$O(n)$$            | $$O(1)$$             |
| Average Case   | $$O(n^2)$$          | $$O(1)$$             |
| Worst Case     | $$O(n^2)$$          | $$O(1)$$             |

### Code
[View Code](./2.insertion.js)

## Merge Sort
Merge Sort is a popular sorting algorithm that uses the divide-and-conquer approach to sort an array. It works by recursively dividing the array into smaller subarrays, sorting those subarrays, and then merging them back together.

### Algorithm

1. If the array has one or zero elements, it is already sorted.
2. Divide the array into two halves.
3. Recursively sort each half.
4. Merge the two sorted halves to produce the sorted array.

### Example

Let's sort the array `[38, 27, 43, 3, 9, 82, 10]` using Merge Sort.

### Step-by-Step

1. **Initial Array**: `[38, 27, 43, 3, 9, 82, 10]`

2. **Divide**:
   - Split into `[38, 27, 43]` and `[3, 9, 82, 10]`

3. **Conquer**:
   - Split `[38, 27, 43]` into `[38]` and `[27, 43]`
   - Split `[27, 43]` into `[27]` and `[43]`
   - Split `[3, 9, 82, 10]` into `[3, 9]` and `[82, 10]`
   - Split `[3, 9]` into `[3]` and `[9]`
   - Split `[82, 10]` into `[82]` and `[10]`

4. **Merge**:
   - Merge `[27]` and `[43]` to get `[27, 43]`
   - Merge `[38]` and `[27, 43]` to get `[27, 38, 43]`
   - Merge `[3]` and `[9]` to get `[3, 9]`
   - Merge `[82]` and `[10]` to get `[10, 82]`
   - Merge `[3, 9]` and `[10, 82]` to get `[3, 9, 10, 82]`
   - Merge `[27, 38, 43]` and `[3, 9, 10, 82]` to get `[3, 9, 10, 27, 38, 43, 82]`

5. **Sorted Array**: `[3, 9, 10, 27, 38, 43, 82]`

### Complexity
| **Case**       | **Time Complexity** | **Space Complexity** |
|----------------|---------------------|----------------------|
| Best Case      | $$O(n \log n)$$     | $$O(n)$$             |
| Average Case   | $$O(n \log n)$$     | $$O(n)$$             |
| Worst Case     | $$O(n \log n)$$     | $$O(n)$$             |

### Code
[View Code](./3.merge.js)

## Quick Sort
Quick Sort is a highly efficient sorting algorithm and is based on the divide-and-conquer approach. It works by selecting a pivot element and partitioning the array around the pivot. It then recursively sorts the sub-arrays on either side of the pivot.

### How It Works

1. **Divide**: Choose a pivot element from the array.
2. **Partition**: Rearrange the elements so that all elements less than the pivot come before it, and all elements greater than the pivot come after it.
3. **Conquer**: Recursively apply the above steps to the sub-arrays of elements with smaller and larger values.

### Example
Let's sort the array `[5, 2, 8, 3, 1, 7, 4, 6]` using Quick Sort.    
    
### Step-by-Step
    
1. **Initial Array**: `[10, 7, 8, 9, 1, 5]`

2. **First Pass**:
   - Choose `5` as the pivot.
   - Partition the array:
     - Compare `10` with `5`: `10` > `5`, no swap.
     - Compare `7` with `5`: `7` > `5`, no swap.
     - Compare `8` with `5`: `8` > `5`, no swap.
     - Compare `9` with `5`: `9` > `5`, no swap.
     - Compare `1` with `5`: `1` < `5`, swap `1` and `10`.
   - Array after partition: `[1, 7, 8, 9, 10, 5]`
   - Swap pivot `5` with `7`: `[1, 5, 8, 9, 10, 7]`
   - Pivot `5` is now at its correct position.

3. **Second Pass**:
   - Apply Quick Sort to the left sub-array `[1]` (already sorted).
   - Apply Quick Sort to the right sub-array `[8, 9, 10, 7]`.

4. **Third Pass**:
   - Choose `7` as the pivot for the right sub-array.
   - Partition the array:
     - Compare `8` with `7`: `8` > `7`, no swap.
     - Compare `9` with `7`: `9` > `7`, no swap.
     - Compare `10` with `7`: `10` > `7`, no swap.
   - Array after partition: `[1, 5, 8, 9, 10, 7]`
   - Swap pivot `7` with `8`: `[1, 5, 7, 9, 10, 8]`
   - Pivot `7` is now at its correct position.

5. **Fourth Pass**:
   - Apply Quick Sort to the left sub-array `[8, 9, 10]`.

6. **Fifth Pass**:
   - Choose `10` as the pivot.
   - Partition the array:
     - Compare `8` with `10`: `8` < `10`, swap `8` with `8`.
     - Compare `9` with `10`: `9` < `10`, swap `9` with `9`.
   - Array after partition: `[1, 5, 7, 8, 9, 10]`
   - Pivot `10` is now at its correct position.

7. **Sorted Array**: `[1, 5, 7, 8, 9, 10]`

### Complexity
| **Case**       | **Time Complexity** | **Space Complexity** |
|----------------|---------------------|----------------------|
| Best Case      | $$O(n \log n)$$     | $$O(n)$$             |
| Average Case   | $$O(n \log n)$$     | $$O(n)$$             |
| Worst Case     | $$O(n^2)$$          | $$O(n)$$             |

### Code
[View Code](./4.quick.js)   

## Selection Sort
Selection Sort is a simple and efficient sorting algorithm. It works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the list and moving it to the sorted portion of the list.

## Algorithm

1. Start with the first element as the minimum.
2. Compare this minimum with the rest of the elements.
3. If a smaller element is found, update the minimum.
4. Swap the minimum element with the first element.
5. Move to the next element and repeat the process until the entire array is sorted.

### Example

1. **Initial Array**: `[64, 25, 12, 22, 11]`

2. **First Pass**:
   - Find the minimum element in the array `[64, 25, 12, 22, 11]`, which is `11`.
   - Swap `11` with the first element `64`.
   - Array after first pass: `[11, 25, 12, 22, 64]`

3. **Second Pass**:
   - Find the minimum element in the remaining array `[25, 12, 22, 64]`, which is `12`.
   - Swap `12` with the second element `25`.
   - Array after second pass: `[11, 12, 25, 22, 64]`

4. **Third Pass**:
   - Find the minimum element in the remaining array `[25, 22, 64]`, which is `22`.
   - Swap `22` with the third element `25`.
   - Array after third pass: `[11, 12, 22, 25, 64]`

5. **Fourth Pass**:
   - Find the minimum element in the remaining array `[25, 64]`, which is `25`.
   - Swap `25` with itself (no change).
   - Array after fourth pass: `[11, 12, 22, 25, 64]`

6. **Sorted Array**: `[11, 12, 22, 25, 64]`

### Complexity
| **Case**       | **Time Complexity** | **Space Complexity** |
|----------------|---------------------|----------------------|
| Best Case      | $$O(n^2)$$          | $$O(1)$$             |
| Average Case   | $$O(n^2)$$          | $$O(1)$$             |
| Worst Case     | $$O(n^2)$$          | $$O(1)$$             |

### Code
[View Code](./5.selection.js)

