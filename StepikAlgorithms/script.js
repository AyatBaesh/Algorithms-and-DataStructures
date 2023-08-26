// import createSubHeader from 'createSubHeader.js';
// const container = document.querySelector('.container');
// createSubHeader(container);


//SUM SQUARES

function sumSquares(arr){
let total = 0;
arr.forEach(element => {
        if(typeof(element) === 'number'){
            total += element * element;
        }else if(Array.isArray(element)){
            return total += sumSquares(element);
        }
    });
    return total;
}





//FIBONACCI SEQUENCE

function fibs(n){
    let fibArr =  [0, 1];
    if(n <= 0){
        alert('invalid number');
    }
    if(n ===1){
        return [0];
    }
    for( let i = 2; i < n; i ++){
        fibArr.push(fibArr[fibArr.length-1] + fibArr[fibArr.length-2]);
    }
    return fibArr;

}
function fibsRecursive(n){
    if (n <= 0){
        return [];
    }else if(n === 1){
        return [0];
    }else if(n === 2){
        return [0, 1];
    }
    const prevArr = fibsRecursive(n-1);

    return [...prevArr, prevArr[prevArr.length - 1] + prevArr[prevArr.length - 2]];
}



//MERGE SORT

function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    const middleIndex = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middleIndex);
    const rightHalf = arr.slice(middleIndex);
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    return(merge(sortedLeft, sortedRight));

}

function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let mergedArr = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArr.push(arr1[i]);
            i++;
        } else {
            mergedArr.push(arr2[j]);
            j++;
        }
    }

    // Merge any remaining elements from arr1 and arr2
    while (i < arr1.length) {
        mergedArr.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergedArr.push(arr2[j]);
        j++;
    }

    return mergedArr;
}
