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








