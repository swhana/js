class Queue {
  constructor() {
    this.queue = [];
    this.front = 0; // 큐의 맨 앞을 가리키는 front index
    this.rear = 0; // 큐의 맨 뒤를 가리키는 rear index
  }

  size() {
    if (this.queue[this.rear] === undefined) return 0; // rear에 값이 없다면 비어있는 것으로 간주
    return this.rear - this.front + 1;
  }

  isEmpty() {
    if (this.size() === 0) return true;
    return false;
  }

  enqueue(value) {
    if (this.isEmpty()) this.queue.push(value); //this.queue[0] = value로 해도 같은 결과
    else {
      this.rear++; //rear를 1칸 뒤로 밀고
      this.queue[this.rear] = value; //그 곳에 새로운 값을 삽입
    }
  }

  dequeue() {
    let temp;

    if (this.front === this.rear) {
      temp = this.queue[this.front];
      delete this.queue[this.front];
      this.front = 0;
      this.rear = 0;
    } else {
      temp = this.queue[this.front];
      delete this.queue[this.front];
      this.front++;
    }

    return temp;
  }
}


const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.size());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.isEmpty());
