//최대 힙 구현
class MinHeap {
  //생성자
  constructor() {
    this.heap = [];
  }

  push(value) {
    const heap = this.heap;
    heap.push(value); //heap에 추가
    let index = heap.length - 1;
    let parentIdx = Math.floor((index - 1) / 2);

    //부모 노드가 자식 노드보다 크면 바꿔줌(최소 힙)
    //value가 객체고 정렬기준이 다르다면 여기서 수정해주면 된다
    while (index > 0 && heap[parentIdx] > heap[index]) {
      [heap[parentIdx], heap[index]] = [heap[index], heap[parentIdx]];
      index = parentIdx;
      parentIdx = Math.floor((index - 1) / 2);
    }
  }

  pop() {
    const heap = this.heap;
    if (heap.length <= 1) return heap.pop();

    const pop = heap[0]; //루트 노드
    heap[0] = heap.pop();
    let currentNodeIdx = 0;
    while (true) {
      let [left, right] = [currentNodeIdx * 2 + 1, currentNodeIdx * 2 + 2];
      if (left >= heap.length) break;

      let next = currentNodeIdx;
      //왼쪽 자식이 더 작을 경우
      if (heap[next] > heap[left]) next = left;
      //오른쪽 자식이 더 작을 경우
      else if (right < heap.length && heap[next] > heap[right]) next = right;

      if (next === currentNodeIdx) break;

      [heap[currentNodeIdx], heap[next]] = [heap[next], heap[currentNodeIdx]];
      currentNodeIdx = next;
    }

    return pop;
  }
}

const heap = new MinHeap();
heap.push(5);
heap.push(2);
heap.push(9);
heap.push(1);
heap.push(0);
heap.push(14);

console.log(heap.pop());
console.log(heap.pop());
console.log(heap.pop());
console.log(heap.pop());
console.log(heap.pop());
console.log(heap.pop());
