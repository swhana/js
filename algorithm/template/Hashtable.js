//해시테이블 선형 탐사 방식으로 구현해보기
function Hashtable(size) {
  this.size = size;
  this.keys = new Array(size).fill(null);
  this.values = new Array(size).fill(null);
  this.limit = 0;
}

Hashtable.prototype.hash = function (key) {
  if (!Number.isInteger(key)) throw new Error("Must be integer");
  return key % this.size; //해시테이블의 모듈러연산을 한 값을 키로
};

Hashtable.prototype.put = function (key, value) {
  if (this.limit >= this.size) throw new Error("Hashtable is Full");

  let hashedIndex = this.hash(key);
  //Hash key값이 null일때까지 hashIndex 확장
  while (this.keys[hashedIndex] != null) {
    hashedIndex++;
    hashedIndex = hashedIndex % this.size;
  }
  this.keys[hashedIndex] = key;
  this.values[hashedIndex] = value;
  this.limit++;
};

Hashtable.prototype.get = function (key) {
  let hashedIndex = this.hash(key);

  //Hash key값이 나올때까지 탐색
  while (this.keys[hashedIndex] != key) {
    hashedIndex++;
    hashedIndex = hashedIndex % this.size;
  }

  return this.values[hashedIndex];
};

let exTable = new Hashtable(13);
exTable.put(7, "Hi");
exTable.put(20, "Hello");
exTable.put(33, "sunny");
exTable.put(46, "weather");
exTable.put(59, "wow");
exTable.put(72, "forty");
exTable.put(85, "happy");
exTable.put(98, "sad");
exTable.put("324", "blue");

console.log(exTable);
