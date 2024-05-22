//단일 연결리스트

//class로도 구현가능
function Node(data) {
  this.data = data; //노드의 값속성
  this.next = null; //다음 노드를 가리키는 포인터 속성
}

function SinglyLinkedList() {
  this.head = null;
  this.size = 0;
}

SinglyLinkedList.prototype.isEmpty = function () {
  return this.size == 0;
};

SinglyLinkedList.prototype.insert = function (value) {
  //헤드 노드가 있는지부터 확인
  if (this.head == null) this.head = new Node(value);
  else {
    let insertNode = new Node(value);
    let temp = this.head; //현재 헤드 임시저장
    this.head = insertNode;
    this.head.next = temp;
  }

  this.size++;
};

SinglyLinkedList.prototype.remove = function (value) {
  let curr = this.head;

  //찾던 값이 헤드노드에 있을 경우
  if (curr.data == value) {
    this.head = curr.next;
    this.size--;
  } else {
    let prev = curr;
    while (curr.next) {
      //원하는 값을 찾은 경우
      if (curr.data == value) {
        prev.next = curr.next;
        prev = curr;
        curr = curr.next;
        break;
      }
      prev = curr;
      curr = curr.next;
    }
    //못 찾은 경우 맨 끝 노드 탐색
    if (curr.data == value) prev.next = null;
    this.size--;
  }
};

//헤드 삭제하는 함수
SinglyLinkedList.prototype.removeHead = function () {
  if (this.head == null) return null;
  this.head = this.head.next;
  this.size--;
};

//링크드리스트 전체를 순회하는 겸 확인하기 편하도록
SinglyLinkedList.prototype.iterate = function () {
  let ret = "";
  if (this.head == null) return null;
  else {
    let curr = this.head;
    while (curr != null) {
      ret += curr.data + " -> ";
      curr = curr.next;
    }
  }
  ret += "null";
  console.log(ret);
};

SinglyLinkedList.prototype.search = function (value) {
  let curr = this.head;
  let count = 1;
  while (curr) {
    if (curr.data == value) {
      return console.log(`${count}번째 노드에 있습니다`);
      // return true;
    }
    curr = curr.next;
    count++;
  }

  return console.log("찾으시는 값이 없습니다");
  // return false;
};

let sll = new SinglyLinkedList();
sll.insert(1);
sll.insert(12);
sll.insert(20);
sll.search(1);
sll.iterate();
