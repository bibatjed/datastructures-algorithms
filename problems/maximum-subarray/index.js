const maxSubArray = function (nums) {
  let currentSum = 0;
  let maxSum = nums[0];

  for (let i = 0; i <= nums.length - 1; i++) {
    if (currentSum < 0) {
      currentSum = 0;
    }
    currentSum += nums[i];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};

//shoule equal to 6
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
