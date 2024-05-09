/**
 * board의 모양
 * %e%%%%%%%%%
 * %...%.%...%
 * %.%.%.%.%%%
 * %.%.......%
 * %.%%%%.%%.%
 * %.%.....%.%
 * %%%%%%%%%x%
 */

const board = `%e%%%%%%%%%\n%...%.%...%\n%.%.%.%.%%%\n%.%.......%\n%.%%%%.%%.%\n%.%.....%.%\n%%%%%%%%%x%`;

const rows = board.split("\n");
//문제해결에 쓰기 쉽도록 2차원 배열(행렬)로 정리
const mazeMatrix = rows.map((row) => row.split(""));

//입력한 char 문자가 있는 행과 열 좌표를 반환하는 함수
function findChar(matrix, char) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] == char) return [i, j];
    }
  }

  //못 찾았을 경우 (-1, -1)을 반환한다
  return [-1, -1];
}

//문자열에서 분리해냈던 행렬을 다시 문자열로 출력하는 함수
function printMatrix(matrix) {
  let ret = "";

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      ret += matrix[i][j];
    }
    ret += "\n";
  }

  console.log(ret);
}

function pathFinder(matrix) {
  const row = matrix.length;
  const col = matrix[0].length;
  const stPos = findChar(matrix, "e");
  const edPos = findChar(matrix, "x");

  function path(x, y) {
    //범위 탈출
    if (x < 0 || y < 0 || x > row - 1 || y > col - 1) return false;

    //벽이나 지나온 길일 경우
    if (matrix[x][y] == "%" || matrix[x][y] == "+") return false;

    //목적지에 도착
    if (x == edPos[0] && y == edPos[1]) return true;

    //그 외
    matrix[x][y] = "+"; //지나온 길
    printMatrix(matrix); //확인차 표시

    //재귀형 사분탐색
    if (path(x + 1, y) || path(x, y + 1) || path(x - 1, y) || path(x, y - 1))
      return true;

    matrix[x][y] = ".";
    return false;
  }
  path(stPos[0], stPos[1]);
}

pathFinder(mazeMatrix);
