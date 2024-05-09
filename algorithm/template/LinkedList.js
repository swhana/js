class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //Insert first node
  //기존 헤드가 다음으로 밀려남
  insertFirst(data) {
    const node = new Node(data, this.head); //현재 리스트의 헤드를 다음 노드로 가리키는 노드 생성
    this.head = node; //해당 노드를 새 헤드로 지정한다

    this.size++; //사이즈 1 추가
  }

  //Insert last node
  insertLast(data) {
    const node = new Node(data);
    let current;

    //If empty, make head
    if (!this.head) this.head = node;
    else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  //Insert at index
  insertAt(data, index) {
    const node = new Node(data);
    //If index is Out of Range
    if (index > 0 && index > this.size) return;

    //If first index
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    let current, previous;

    current = this.head;
    let countIdx = 0;

    //countIdx == index가 될때까지 노드탐색
    while (countIdx < index) {
      previous = current;
      current = current.next;
      countIdx++;
    }

    previous.next = node;
    node.next = current;

    this.size++;
  }

  //Get at index
  getAt(index) {
    let countIdx = 0;
    let current = this.head;
    while (current) {
      if (countIdx === index) {
        console.log(current.data);
      }

      countIdx++;
      current = current.next;
    }

    return null;
  }

  //Remove at index
  removeAt(index) {
    //Out of Range
    if (index > 0 && index > this.size) {
      return;
    }

    let countIdx = 0;
    let current, previous;
    current = this.head;

    //remove first
    if (index === 0) this.head = current.next;
    else {
      while (countIdx < index) {
        countIdx++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }
  }

  //Clear list
  //실질적으로 메모리에서 데이터를 지우는 것은 아님
  clearList() {
    this.head = null;
    this.size = 0;
  }

  //Print list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertAt(500, 3);

ll.removeAt(2);
ll.removeAt(2);

ll.printListData();
