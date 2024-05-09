//행을 체크하는 함수
//행 전체가 letter와 같을 경우에만 true
function checkRow(row, letter) {
  for (let i = 0; i < row.length; i++) {
    if (row[i] != letter) return false;
  }

  return true;
}

//열을 체크하는 함수
function checkCol(board, colIdx, letter) {
  for (let i = 0; i < board[0].length; i++) {
    if (board[i][colIdx] != letter) return false;
  }

  return true;
}

function ticTacToe(board, letter) {
  for (let i = 0; i < board.length; i++) {
    if (checkRow(board[i], letter)) return true;
  }

  for (let i = 0; i < board.length; i++) {
    if (checkCol(board, i, letter)) return true;
  }

  let checkLCross = 0;
  let checkRCross = 0;
  for (let i = 0; i < board.length; i++) {
    if (board[i][i] == letter) checkLCross++;
  }
  if (checkLCross == board.length) return true;

  for (let i = 0; i < board.length; i++) {
    if (board[board.length - 1 - i][i] == letter) checkRCross++;
  }
  if (checkRCross == board.length) return true;

  return false;
}

const board = [
  ["O", "-", "X", "O"],
  ["-", "O", "-", "O"],
  ["-", "X", "-", "O"],
  ["X", "O", "-", "O"],
];

console.log(ticTacToe(board, "X"));
console.log(ticTacToe(board, "O"));
