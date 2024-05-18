//계수정렬 O(n+k)
//각 항목의 등장횟수를 센 후에 정렬

function countSort(array) {
  let hash = {}; //각 항목별 등장횟수를 세서 저장
  let countArr = []; //등장횟수대로 정렬한 배열
  for (let i = 0; i < array.length; i++) {
    if (!hash[array[i]]) hash[array[i]] = 1;
    else hash[array[i]]++;
  }

  for (let key in hash) {
    for (let i = 0; i < hash[key]; i++) {
      countArr.push(parseInt(key));
    }
  }

  return countArr;
}

console.log(
  countSort([
    4, 23, 1, 4, 6, 2, 3, 5, 6, 7, 12, 23, 11, 1, 1, 0, 0, 34, 5, 5, 5, 3, 2, 7,
    8, 65, 5,
  ])
);
