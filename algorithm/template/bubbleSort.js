//거품정렬 O(n^2)
function swap(obj, idx1, idx2) {
  const temp = obj[idx1];
  obj[idx1] = obj[idx2];
  obj[idx2] = temp;

  return obj;
}

function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) swap(array, i, j);
    }
  }

  return array;
}

console.log(bubbleSort([6, 1, 2, 3, 4, 5]));
