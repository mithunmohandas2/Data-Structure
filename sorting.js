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
    if (array.length<=1) return array;
    let left=[];
    let right=[];
    const pivot=array[array.length-1]    //taking lase element as pivot
    for (let i = 0; i < array.length-1; i++) {
        if (array[i]<pivot)left.push(array[i])
        else if (array[i]>=pivot)right.push(array[i])
    }
    return  [...quickSort(left),pivot,...quickSort(right)]
}



// ======================================
//Sorting Methods:

const array = [0,22,-29,445,-9099,1,13,12,-9]

// console.log(bubbleSort(array))
// console.log(insertionSort(array))  
console.log(quickSort(array))