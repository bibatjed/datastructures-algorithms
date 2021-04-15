
function bubbleSort(value = []){
    let swapped = true;
    while(swapped){
        swapped = false;
        for(let i = 0; i < value.length; i++){
            if(value[i] > value[i + 1]){
                let temp = value[i];
                value[i] = value[i+1];
                value[i+1] = temp;
                swapped = true
            }
            
        }
    }
  
  return value;
}


console.log(bubbleSort([1,0,3,8,2,4,5,9,6,7]))