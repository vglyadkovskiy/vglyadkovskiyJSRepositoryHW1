"use strict";
var arr = [6, 12, 8, 34, 45, 67, 78, 23, 5];
console.log("Original Array: " + arr);

function replaceElements(arr, firstIndex, secondIndex){
    const temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}

function partition(arr, left, right) {
   var basicElem   = arr[(right + left - ((right + left) % 2)) / 2], 
        i = left,
        j = right;

    while (i <= j) {
        while (arr[i] < basicElem) {
            i++;
        }
        while (arr[j] > basicElem) {
            j--;
        }
        if (i <= j) {
            replaceElements(arr, i, j);
            i++;
            j--;
        }
    }
    return i;
} 

function quickSort(arr, left, right) {
    var index;
    if (arr.length > 1) {
        left = typeof left != "number" ? 0 : left;
        //left = 0;
        right = typeof right != "number" ? arr.length - 1 : right;
        //right = arr.length - 1;
        index = partition(arr, left, right);
        if (left < index - 1) {
            quickSort(arr, left, index - 1);
        }
        if (index < right) {
            quickSort(arr, index, right);
        }
    }
    return arr;
}

var result = quickSort(arr);

console.log("Sorted Array: " + result);