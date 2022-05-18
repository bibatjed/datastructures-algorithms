const twoSum = function (nums, target) {
  const list = new Map();

  for (let [index, num] of nums.entries()) {
    const finalTarget = target - num;
    if (list.has(finalTarget)) {
      return [list.get(finalTarget), index];
    }

    list.set(num, index);
  }
};

// should return [0,1]
console.log(twoSum([2, 7, 11, 15], 9));
