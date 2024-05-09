//위상 정렬

// 노드 개수, 간선 개수
const [n, e] = [7, 8];
// 연결 정보 [노드, 노드]
const edges = [
  [1, 2],
  [1, 5],
  [2, 3],
  [2, 6],
  [3, 4],
  [4, 7],
  [5, 6],
  [6, 4],
];

// 진입 차수 초기화
const indegree = Array.from({ length: n + 1 }, () => 0);
edges.forEach((edge) => {
  const [_, v] = edge;
  indegree[v]++;
});

// 0번 노드는 없는 노드이므로, 제외하고 위상 정렬 수행
const queue = [];
for (let v = 1; v <= n; v++) {
  if (indegree[v] === 0) queue.push(v);
}
// 최종 출력 결과는 1 2 5 3 6 4 7
while (queue.length !== 0) {
  // 큐의 맨 앞 노드를 제거한 후 출력
  const now = queue.shift();
  process.stdout.write(`${now} `);
  // 연결된 노드와의 진입 간선 제거
  for (const edge of edges) {
    if (edge[0] === now) {
      indegree[edge[1]]--;
      // 진입 차수가 0이 되었다면 큐에 삽입
      if (indegree[edge[1]] === 0) queue.push(edge[1]);
    }
  }
}
