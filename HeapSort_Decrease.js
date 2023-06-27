function heapSort(arr) {
  buildMaxHeap(arr);


  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i);
    heapify(arr, i, 0);
  }

  return arr;
}

function buildMaxHeap(arr) {
  const n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
}

function heapify(arr, heapSize, index) {
  const leftChildIndex = 2 * index + 1;
  const rightChildIndex = 2 * index + 2;
  let largestIndex = index;

  if (
    leftChildIndex < heapSize &&
    arr[leftChildIndex] < arr[largestIndex]
  ) {
    largestIndex = leftChildIndex;
  }

  if (
    rightChildIndex < heapSize &&
    arr[rightChildIndex] < arr[largestIndex]
  ) {
    largestIndex = rightChildIndex;
  }

  if (largestIndex !== index) {
    swap(arr, index, largestIndex);
    heapify(arr, heapSize, largestIndex);
  }
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

const array = [69, 72, 51, 13, 28, 49, 3];
const sortedArray = heapSort(array);
console.log(sortedArray);
