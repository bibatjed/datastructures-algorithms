//O(n^2)
const snail = function (array) {
  // enjoy

  const stack = [];

  while (array.length) {
    //get the top of array;
    stack.push(...array.shift());
    //get right side of array
    for (let a = 0; a < array.length - 1; a++) {
      stack.push(array[a].pop());
    }
    //get bottom of array
    stack.push(...(array.pop() || []).reverse());
    //get left side of array;
    for (let a = array.length - 1; a > 0; a--) {
      stack.push(array[a].shift());
    }
  }
  return stack;
};

console.log(
  snail([
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5],
  ])
); // should equal = [1,2,3,4,5,6,7,8,9]
