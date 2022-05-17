const isValidSudoku = function (board) {
  const rows = [],
    cols = [],
    boxes = [];
  for (let i = 0; i < board.length; i++) {
    rows.push(new Set());
    cols.push(new Set());
    boxes.push(new Set());
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const cell = board[i][j];
      if (cell === ".") continue;
      const boxNum = 3 * Math.floor(i / 3) + Math.floor(j / 3);
      if (rows[i].has(cell) || cols[j].has(cell) || boxes[boxNum].has(cell))
        return false;
      rows[i].add(cell);
      cols[j].add(cell);
      boxes[boxNum].add(cell);
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
