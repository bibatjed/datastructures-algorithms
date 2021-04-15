function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentValue = arr[i];
    let j;

    //add condition if arr[j] is greater than currentValue move arr[j] to +1 index
    for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = currentValue;
  }

  return arr;
}

console.log(insertionSort([2, 20, 3, 1, 10]));