// js slice() 구현

function customSlice(array, beginIdx, endIdx) {
  if (!beginIdx && !endIdx) {
    return array;
  }

  if (!endIdx) {
    endIdx = array.length;
  }

  let retArray = [];

  for (let i = beginIdx; i < endIdx; i++) {
    retArray.push(array[i]);
  }

  return retArray;
}

console.log(customSlice([1, 2, 3, 4], 1, 2));
console.log(customSlice([1, 2, 3, 4], 2, 4));
