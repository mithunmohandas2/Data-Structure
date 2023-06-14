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

// ======================================
//Sorting Methods:

const array = [8,0, -7, 5, 4, -6, 8, 2, 4, -1]

// console.log(bubbleSort(array)) 
console.log(insertionSort(array))  