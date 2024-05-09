// 나선형으로 표를 돌면서 출력하기

const matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];

function spiralPrint(matrix) {
  let topRow = 0; //위 행
  let bottomRow = matrix.length - 1; //아래 행
  let leftCol = 0; //왼쪽 열
  let rightCol = matrix[0].length - 1;

  while (topRow < bottomRow && leftCol < rightCol) {
    // 왼쪽 위 -> 오른쪽 위 출력
    for (let col = 0; col < rightCol; col++) {
      console.log(matrix[topRow][col]);
    }
    //다 출력했으면 topRow를 한칸 늘린다
    topRow++;

    // 오른쪽 위 -> 오른쪽 아래 출력
    for (let row = 0; row <= bottomRow; row++) {
      console.log(matrix[row][rightCol]);
    }
    //rightCol을 하나 줄인다
    rightCol--;

    //topRow를 늘리고 rightCol을 늘렸으므로 한번 체크
    if (topRow <= bottomRow) {
      //오른쪽 아래 -> 왼쪽 아래 출력
      for (let col = rightCol; col >= leftCol; col--) {
        console.log(matrix[bottomRow][col]);
      }
      bottomRow--;
    }

    //동일
    if (leftCol <= rightCol) {
      //왼쪽 아래 -> 왼쪽 위 출력
      for (let row = bottomRow; row > topRow; row--) {
        console.log(matrix[row][leftCol]);
      }
      leftCol++;
    }
  }
}

spiralPrint(matrix);
