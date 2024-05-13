function swap(obj, idx1, idx2) {
  const temp = obj[idx1];
  obj[idx1] = obj[idx2];
  obj[idx2] = temp;

  return obj;
}

function selectSort(array) {
  let min;
  for (let i = 0; i < array.length - 1; i++) {
    min = i;
    //최솟값의 index 찾기
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    //i보다 최솟값이 있으면 해당 위치와 array[i]를 바꿈
    if (min != i) swap(array, i, min);
  }

  return array;
}

console.log(selectSort([3, 4, 1, 7, 5, 2]));
