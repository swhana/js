//재귀 및 분할정복을 알아보기 위한 파스칼의 삼각형 함수
function PascalTriangle(row, col) {
  if (row == 0) return 1; //맨 윗행
  else if (col == 0 || col == row) return 1;
  else {
    return PascalTriangle(row - 1, col - 1) + PascalTriangle(row - 1, col);
  }
}

console.log(PascalTriangle(5, 2));
