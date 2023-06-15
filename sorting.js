//Bubble Sort Method

function bubbleSort(array) {
    let swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            let temp = array[i]
            array[i] = array[i + 1]
            array[i + 1] = temp
            swapped = true;
        }
    }
    if (swapped) {
        bubbleSort(array)
    }
    return array;
}


// ====================================

// Insertion Sort

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let check = array[i];
        let j = i - 1;
        while (j >= 0 && check < array[j]) {
            array[j + 1] = array[j]
            j = (j - 1)
        }
        array[j + 1] = check
    }
    return array
}


// ====================================

// Quick Sort:
function quickSort(array) {
    if (array.length <= 1) return array;
    let left = [];
    let right = [];
    const pivot = array[array.length - 1]    //taking lase element as pivot
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) left.push(array[i])
        else if (array[i] >= pivot) right.push(array[i])
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

// ====================================

// Selection Sort:

function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] < array[j]) {    // descending order
                let temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
    }
    return array
}

// ====================================

// Merge Sort:
const array = [69,47,5,-33,-4,-2,112]
function mergeSort(array) {
    if (array.length <= 1) return array;
    let pivot = Math.floor(array.length / 2)
    let leftArray = array.slice(0, pivot)
    let rightArray = array.slice(pivot)
    return merge(mergeSort(leftArray), mergeSort(rightArray))
}
function merge(leftArray, rightArray) {
    let sortedArray = []
    while (leftArray.length && rightArray.length) {
        if (leftArray[0] <= rightArray[0]) {
            sortedArray.push(leftArray.shift())
        } else {
            sortedArray.push(rightArray.shift())
        }
    }
    return sortedArray.concat(leftArray,rightArray)
}








// ======================================
//Sorting Methods:
// console.log(bubbleSort(array))
// console.log(insertionSort(array))
// console.log(quickSort(array))
// console.log(selectionSort(array))
console.log(mergeSort(array))