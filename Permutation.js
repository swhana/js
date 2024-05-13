//문자열의 모든 순열 찾기

//문자열의 index 2개를 받아 위치를 바꿔주는 함수
function swap(string, idx1, idx2) {
  const temp = string[idx1];
  string[idx1] = string[idx2];
  string[idx2] = temp;

  // return string;
}

function Permutation(string, beginIdx, endIdx) {
  if (beginIdx == endIdx) console.log(string);
  else {
    for (let i = beginIdx; i <= endIdx; i++) {
      swap(string, beginIdx, i);
      Permutation(string, beginIdx + 1, endIdx);
      swap(string, beginIdx, i);
    }
  }
}

Permutation(["A", "B", "C", "D"], 0, 3);
