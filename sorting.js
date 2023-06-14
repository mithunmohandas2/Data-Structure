const array = [8,0, -7, 5, 4, -6, 8, 2, 4, -1]

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


// console.log(bubbleSort(array))    

// ====================================

