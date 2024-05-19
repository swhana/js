//배열에서 단 한번만 등장하는 요소 찾기
function findOne(array, lo, hi) {
  if (lo > hi) return null;
  if (lo == hi) return array[lo];

  let mid = Math.floor((lo + hi) / 2); //중간

  //이진검색
  if (mid % 2 == 0) {
    if (array[mid] == array[mid + 1]) return findOne(array, mid + 2, hi);
    else return findOne(array, lo, mid);
  } else {
    if (array[mid] == array[mid - 1]) return findOne(array, mid + 1, hi);
    else return findOne(array, lo, mid - 1);
  }
}

const array = [1, 1, 2, 4, 4, 5, 5, 6, 6];

console.log(findOne(array, 0, array.length)); // 2
