//순차탐색 방식을 활용한 다익스트라 구현

//노드 간 거리 초기화
const graph = [
  [Infinity, 1, Infinity, 2, Infinity],
  [1, Infinity, 3, Infinity, 2],
  [Infinity, 3, Infinity, Infinity, 1],
  [2, Infinity, Infinity, Infinity, 2],
  [Infinity, 2, 1, 2, Infinity],
];

const visited = Array.from({ length: graph.length }, () => false);
// const visited = Array(graph.length).fill(false);

//시작 노드로부터 각 노드까지의 최단거리를 저장한 배열
const distance = visited.map((_, i) => graph[0][i]);

//방문한적 없는 노드 중 가장 작은 값을 가진 노드(가장 가까운 노드) 탐색
const findSmallestNode = (visited, distance) => {
  let minDist = Infinity;
  let minIdx = 0;

  for (let i = 0; i < distance.length; i++) {
    if (visited[i]) continue;
    if (distance[i] < minDist) {
      minDist = distance[i];
      minIdx = i;
    }
  }

  return minIdx;
};

const dijkstra = (start) => {
  distance[start] = 0; // 시작노드 => 시작노드 거리는 0
  visited[start] = true; // 시작노드는 방문한 것으로 처리

  for (let i = 0; i < distance.length; i++) {
    //시작 노드로부터 가장 거리가 가까운 노드 탐색
    const nodeIdx = findSmallestNode(visited, distance);
    visited[nodeIdx] = true;
    for (let j = 0; j < distance.length; j++) {
      if (visited[j]) continue;
      /**
       * 다음으로 방문할 노드에 저장된 값(distance[j])이
       * 현재 방문한 노드까지의 누적 이동거리(distance[nodeIdx]) + 다음 노드까지의 거리(graph[nodeIdx][j]) 보다 크다면 갱신해줌
       */
      if (distance[j] > distance[nodeIdx] + graph[nodeIdx][j])
        distance[j] = distance[nodeIdx] + graph[nodeIdx][j];
    }
  }
};

dijkstra(0);

console.log(distance);
