const graph = [[], [2, 3], [1, 7], [1, 4, 5], [3, 5], [3, 4], [7], [2, 6]];
// 방문 여부 체크를 위한 테이블
let visited = Array.from({ length: graph.length }, () => false);

function bfs(graph, start, visited) {
  const queue = [];

  //큐에 넣고 방문처리는 동시에
  queue.push(start);
  visited[start] = true;

  while (queue.length !== 0) {
    const now = queue.shift();

    /*여기에 실행할 함수 넣으면 됨 */
    process.stdout.write(`${now} `);

    // 현재 노드와 인접한 노드 확인 (Adjacency)
    for (const adj of graph[now]) {
      // 아직 방문하지 않은 노드라면 큐에 추가하고 방문 처리
      if (!visited[adj]) {
        queue.push(adj);
        visited[adj] = true;
      }
    }
  }
}

bfs(graph, 1, visited);
