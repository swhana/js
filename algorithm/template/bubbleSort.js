//거품정렬 O(n^2)
function swap(obj, idx1, idx2) {
  const temp = obj[idx1];
  obj[idx1] = obj[idx2];
  obj[idx2] = temp;

  return obj;
}

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (array[j] > array[j + 1]) swap(array, i, j);
    }
  }

  return array;
}

console.log(bubbleSort([6, 1, 2, 3, 4, 5]));
