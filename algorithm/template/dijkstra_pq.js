//우선순위 큐를 활용한 다익스트라 구현
class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  push(data) {
    const heap = this.heap;
    heap.push(data);

    let child = heap.length - 1; //삽입한 노드의 index
    let parent = Math.floor(child / 2);

    //최소 힙이기 때문에 부모 > 자식일 경우 스왑(Bottom Up)
    while (child > 0 && heap[parent] > heap[child]) {
      [heap[parent], heap[child]] = [heap[child], heap[parent]];
      child = parent; //부모와 자식을 바꿔주었기 때문에 포인터를 부모쪽으로 옮김
      parent = Math.floor(index / 2); //다시 부모 계산
    }
  }

  pop() {
    const heap = this.heap;
    //0번 노드는 null로 놔두기 때문에 길이가 2면 루트노드만 남은것으로 간주
    if (heap.length <= 2) return heap.pop();

    const pop = heap[1]; //루트 노드를 꺼냄
    heap[1] = heap.pop(); //가장 말단에 있는 노드를 꺼내서 루트노드로 옮겨줌
    let parent = 1; //루트 노드부터 시작

    //이후 재정렬(Top Down)
    while (true) {
      let [leftChild, rightChild] = [parent * 2, parent * 2 + 1];
      let tmp = parent;

      if (leftChild < heap.length && heap[tmp] > heap[leftChild])
        tmp = leftChild;
      else if (rightChild < heap.length && heap[tmp] > heap[rightChild])
        tmp = rightChild;
      else break;

      if (tmp === parent) break;

      [heap[tmp], heap[parent]] = [heap[parent], heap[tmp]];
      parent = tmp;
    }

    return pop; //루트 노드에서 꺼낸 값이 최소값이므로 이를 리턴합니다
  }
}

//0번 노드를 빈칸으로 두었는데, 이는 시작 노드를 1번부터 하기 위함
const graph = [
  [],
  [
    { to: 2, dist: 1 },
    { to: 4, dist: 2 },
  ],
  [
    { to: 1, dist: 1 },
    { to: 3, dist: 3 },
    { to: 5, dist: 2 },
  ],
  [
    { to: 2, dist: 3 },
    { to: 5, dist: 1 },
  ],
  [
    { to: 1, dist: 2 },
    { to: 5, dist: 2 },
  ],
  [
    { to: 2, dist: 2 },
    { to: 3, dist: 1 },
    { to: 4, dist: 2 },
  ],
];

const dijkstra = (graph) => {
  //1번노드(시작노드)부터 각 노드까지의 최단 거리를 저장하는 배열 생성
  const distance = Array(graph.length).fill(Infinity);

  //큐 생성 및 1번 노드에 대한 정보 저장
  // const queue = new PriorityQueue();
  const queue = [];
  queue.push({ to: 1, dist: 0 });

  // console.log(queue);
  //1번 노드 -> 1번 노드 거리는 0
  distance[1] = 0;

  //큐가 빌 때까지 반복
  while (queue.length) {
    //큐에서 방문할 노드 꺼내기
    const { to, dist } = queue.pop();
    // console.log(to);

    if (distance[to] < dist) continue;
    //방문한 노드까지 이동한 거리(dist[to]) + 다음에 방문할 노드까지의 거리(next.dist)
    //기존에 저장된 값(dist[next.to])과 비교해서 갱신
    // graph[to].forEach((next) => {
    //   const cost = distance[to] + next.dist;
    //   if (distance[next.to] > cost) {
    //     distance[next.to] = cost;
    //     queue.push(next);
    //   }
    // });

    for (const adj of graph[to]) {
      const cost = distance[to] + adj.dist;
      if (distance[adj.to] > cost) {
        distance[adj.to] = cost;
        queue.push(adj);
      }
    }
  }

  console.log(distance);
};

dijkstra(graph);
