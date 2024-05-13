//주로 파이썬에서 자주 사용하는 Dictionary 형태의 자료구조
const dictionary = {
  Key1: "1",
  Key2: {
    a: 2,
    b: "3",
    c: {
      d: "3",
      e: 1,
    },
  },
};

function flatten(dict) {
  let ret = {};
  function flat(dict, props) {
    //dict가 객체가 아닐 경우
    if (typeof dict != "object") {
      ret[props] = dict;
      return;
    }

    //자식 노드를 전부 탐색
    for (let prop in dict) {
      if (props == "") flat(dict[prop], props + prop);
      else flat(dict[prop], props + "." + prop);
    }
  }

  flat(dict, "");
  return ret;
}

console.log(flatten(dictionary));
