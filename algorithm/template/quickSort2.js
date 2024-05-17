function quickSort(array) {
  return quickSortHelper(array, 0, array.length - 1);
}

function quickSortHelper(array, left, right) {
  let index;
  if (array.length - 1 > 0) {
    index = partition(array, left, right);

    if (left < index - 1) {
      quickSortHelper(array, left, index - 1);
    }

    if (index < right) {
      quickSortHelper(array, index, right);
    }
  }

  return array;
}

function partition(array, left, right) {
  let pivot = array[Math.floor((left + right) / 2)];

  while (left <= right) {
    while (pivot > array[left]) {
      left++;
    }
    while (pivot < array[right]) {
      right--;
    }

    if (left <= right) {
      let temp = array[left];
      array[left] = array[right];
      array[right] = temp;
      left++;
      right--;
    }
  }
  return left;
}

console.log(quickSort([6, 1, 23, 4, 2, 3]));
