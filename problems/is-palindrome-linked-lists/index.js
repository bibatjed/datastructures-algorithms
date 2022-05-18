const isPalindrome = function (head) {
  const array = [];
  while (head) {
    array.push(head.val);
    head = head.next;
  }

  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    if (array[left] != array[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

//should return true
console.log(
  isPalindrome({
    val: 1,
    next: {
      val: 2,
      next: {
        val: 2,
        next: {
          val: 1,
          next: null,
        },
      },
    },
  })
);
