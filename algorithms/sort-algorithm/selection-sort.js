function selectionSort(value = []){
    for(let i = 0; i < value.length; i++){
      let minimumValueIndex = i;
      for(let y = i + 1; y < value.length; y++){
        if(value[y] < value[minimumValueIndex]){
          minimumValueIndex = y;
        }
      }
      
      if(i != minimumValueIndex){
        let temp = value[i];
        value[i] = value[minimumValueIndex];
        value[minimumValueIndex] = temp;
      }
    }
  
  return value;
}


console.log(selectionSort([6,1,3,4,5,0]))