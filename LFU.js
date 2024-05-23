//Least Frequency Used Caching

//이중 연결 리스트를 사용해 구현한다
class LFUNode {
  constructor(key, value) {
    this.prev = null;
    this.next = null;
    this.key = key;
    this.data = value;
    this.freqCount = 1; //접근빈도수를 체크하기 위한 카운터
  }
}

class LFUDoublyLinkedList {
  constructor() {
    this.head = new LFUNode("Head Buffer", null);
    this.tail = new LFUNode("Tail Buffer", null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }

  //삽입은 헤드
  insertHead(node) {
    node.next = this.head.next; //head와 tail은 초기버퍼로 남겨놓기 때문에 head.next가 실질적 헤드노드
    this.head.next.prev = node;
    this.head.next = node; //헤드노드 교체
    node.prev = this.head; //헤드버퍼와 헤드노드 연결
    this.size++;
  }

  //제거는 테일
  removeTail() {
    let ret = this.tail.prev; //반환용
    let old = this.tail.prev; //제거할 기존 테일노드
    //기존 테일노드 이전 노드와 테일버퍼를 연결
    old.prev.next = this.tail;
    this.tail.prev = old.prev;
    this.size--;
    return ret;
  }

  removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.size--;
  }
}

class LFUCache {
  constructor(capacity) {
    this.keys = {}; //LFUNode 저장용 해시테이블
    this.freq = {}; //LFUDoublyLinkedList 저장용 해시테이블
    this.capacity = capacity;
    this.minFreq = 0;
    this.size = 0;
  }

  set(key, value) {
    var node = this.keys[key];

    //key에 해당하는 node가 없을 경우 새로 만들어서 저장
    if (node == undefined) {
      node = new LFUNode(key, value);
      this.keys[key] = node;

      //캐시용량이 다 차지 않은 경우 삭제없이 삽입
      if (this.size < this.capacity) {
        if (this.freq[1] === undefined) this.freq[1] = new LFUDoublyLinkedList();
        this.freq[1].insertHead(node);
        this.size++;
      } else {
        let oldTail = this.freq[this.minFreq].removeTail(); //Tail node부터 제거
        delete this.keys[oldTail.key];

        if (this.freq[1] === undefined) this.freq[1] = new LFUDoublyLinkedList();
        this.freq[1].insertHead(node);
      }
      this.minFreq = 1;
    } else {
      let oldFreqCount = node.freqCount;
      node.data = value;
      node.freqCount++; //참조빈도를 늘림

      this.freq[oldFreqCount].removeNode(node);
      if (this.freq[node.freqCount] == undefined) this.freq[node.freqCount] = new LFUDoublyLinkedList();
      this.freq[node.freqCount].insertHead(node);

      if (oldFreqCount == this.minFreq && Object.keys(this.freq[oldFreqCount].size === 0)) this.minFreq++;
    }

    return console.log(this);
  }


  get(key) {
    var node = this.keys[key];

    if (node == undefined) return null;
    else {
      let oldFreqCount = node.freqCount;
      node.freqCount++;

      this.freq[oldFreqCount].removeNode(node);

      if (this.freq[node.freqCount] == undefined) this.freq[node.freqCount] = new LFUDoublyLinkedList();
      this.freq[node.freqCount].insertHead(node);

      if (oldFreqCount == this.minFreq && Object.keys(this.freq[oldFreqCount]).length === 0) this.minFreq++;

      return console.log(node.data);
    }
  }
}



let myLFU = new LFUCache(5);

myLFU.set(1, 1);
myLFU.set(2, 2);
myLFU.set(3, 3);
myLFU.set(4, 4);
myLFU.set(5, 5);
myLFU.get(1);
myLFU.get(1);
myLFU.get(2);
//1노드를 2번, 2노드를 1번 참조했기 때문에 가장 빈도가 낮은 3 4 5 중 테일에 가장 가까운 3 노드가 제거된다
myLFU.set(6, 6);
myLFU.get(6);