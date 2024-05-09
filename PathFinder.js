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

printMatrix(mazeMatrix);
