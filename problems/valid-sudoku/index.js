const isValidSudoku = function (board) {
  const set = new Set();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const cell = board[i][j];
      if (cell === ".") continue;
      const boxNum = 3 * Math.floor(i / 3) + Math.floor(j / 3);
      let row = `row: ${i}, value: ${cell}`;
      let col = `col: ${j}, value: ${cell}`;
      let boxNums = `boxNum: ${boxNum}, value: ${cell}`;
      if (set.has(row) || set.has(col) || set.has(boxNums)) return false;
      set.add(row);
      set.add(col);
      set.add(boxNums);
    }
  }

  return true;
};

//should equal to true;
console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
