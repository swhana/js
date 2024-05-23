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
  }
}

let dll = new DoublyLinkedList();
dll.insertHead(1);
dll.insertHead(2);
