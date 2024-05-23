//양방향 링크드리스트
class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size == 0;
  }

  insertHead(data) {
    if (this.head == null) {
      this.head = new Node(data);
      this.tail = this.head;
    } else {
      //새로 헤드가 될 노드 생성
      let newHead = new Node(data);
      //기존 헤드와 연결관계 확립
      newHead.next = this.head;
      this.head.prev = newHead;
      //헤드 교체
      this.head = newHead;
    }
    this.size++;
  }

  //헤드 노드를 없애고 헤드 노드값을 반환
  removeHead() {
    if (this.head == null) return null;
    else {
      var ret = null;
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        ret = this.head.data;
        this.head = this.head.next;
        this.head.prev = null;
      }
      this.size--;
      return ret;
    }
  }

  insertTail(data) {
    if (this.tail == null) {
      this.tail = new Node(data);
      this.head = this.tail;
    } else {
      //새로 테일이 될 노드 생성
      let temp = new Node(data);
      //기존 테일과 연결관계 확립
      temp.prev = this.tail;
      this.tail.next = temp;
      //테일 교체
      this.tail = temp;
    }
    this.size++;
  }

  //테일 노드를 없애고 테일 노드값을 반환
  removeTail() {
    if (this.tail == null) return null;
    else {
      var ret = null;
      if (this.tail === this.head) {
        this.tail = null;
        this.head = null;
      } else {
        ret = this.tail.data;
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      this.size--;
      return ret;
    }
  }

  //전체 리스트 순회 + 출력
  iterate() {
    var ret = "";
    if (this.head === null) ret += "null";
    else {
      let curr = this.head;
      while (curr.next) {
        ret += curr.data + " -> ";
        curr = curr.next;
      }
      ret += curr.data;
    }

    console.log(ret);
  }
}

let dll = new DoublyLinkedList();
dll.insertHead(1);
dll.insertHead(2);
dll.insertHead(3);
dll.insertTail(4);
dll.insertTail(5);
dll.removeTail();
dll.iterate();
