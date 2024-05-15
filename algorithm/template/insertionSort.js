//삽입 정렬: 정렬되지 않은 항목을 배열의 정렬된 부분으로 이동시키는 정렬방법
function insertionSort(array) {
  let i, j, temp;
  //배열 항목 하나씩 순회
  for (i = 0; i < array.length; i++) {
    temp = array[i];

    for (j = i - 1; j >= 0 && array[j] > temp; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }

  return array;
}

console.log(insertionSort([6, 1, 23, 4, 3, 2]));
