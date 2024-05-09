const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const tail = arr.slice(1);

  const left = tail.filter((item) => item < pivot);
  const right = tail.filter((item) => item > pivot);

  return quickSort(left).concat([pivot], quickSort(right));
};
console.time();
console.log(quickSort([1, 6, 3, 4, 2]));
console.timeEnd();
console.time();
console.log([1, 6, 3, 4, 2].sort());
console.timeEnd();
