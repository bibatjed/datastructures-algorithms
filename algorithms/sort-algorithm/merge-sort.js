/**
 * learning mergesort not yet finished 
 */

function mergeSort(arr1,arr2){

    let leftCounter = 0;
    let rightCounter = 0;

    const mergeSortArray = [];
    while(leftCounter < arr1.length || rightCounter < arr2.length){
        if(arr1[leftCounter] < arr2[rightCounter]){
            mergeSortArray.push(arr1[leftCounter]);
            leftCounter++;
        }else{
            mergeSortArray.push(arr2[rightCounter]);
            rightCounter++;
        }
    }

    return mergeSortArray;

}


console.log(mergeSort([1,10,49,50], [2,14,99,1000,30000]))