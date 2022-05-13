//brute-force might not work with large datasets - timeout
function sumIntervals(intervals) {
  let counter = 0;
  let hash = {};
  for (let a = 0; a <= intervals.length - 1; a++) {
    let innerCounter = 0;
    for (let b = intervals[a][0]; b < intervals[a][1]; b++) {
      if (!hash[b]) {
        innerCounter += 1;
      }

      hash[b] = 1;
    }

    counter += innerCounter;
  }

  return counter;
}

//should equal 8
console.log(
  sumIntervals([
    [1, 5],
    [6, 10],
  ])
);
