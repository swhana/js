//문장에서 문자열이 나오는 횟수 세기
function wordCount(sentence) {
  const sentenceToArr = sentence.replace(/[^a-zA-z ]/g, "").split(" "); //알파벳, 공백문자 제외한 특수문자는 전부 제거
  let occurList = {}; //등장 빈도 세는 해시
  let answerList = {};

  for (let i = 0; i < sentenceToArr.length; i++) {
    const currentWord = sentenceToArr[i].toLowerCase(); // toLowerCase 뺄 경우 대소문자 구분
    if (!occurList[currentWord]) occurList[currentWord] = 1;
    else occurList[currentWord]++;
  }

  let tempArr = [];
  for (let prop in occurList) {
    tempArr.push([occurList[prop], prop]); // [...[등장횟수, 단어]]
  }

  tempArr.sort((a, b) => b[0] - a[0]);

  for (let i = 0; i < tempArr.length; i++) {
    const curr = tempArr[i];
    answerList[curr[1]] = curr[0];
  }

  return answerList;
}

console.log(
  wordCount("Practice makes perfect. Get perfect by practice, just practice.")
);
