// 그래프 (1번 노드는 2, 3번 노드와 연결되어 있음)
const graph = [[], [2, 3], [1, 7], [1, 4, 5], [3, 5], [3, 4], [7], [2, 6]];
// 방문 여부 체크를 위한 테이블
let visited = Array.from({ length: graph.length }, () => false);

function dfs(graph, start, visited) {
  const stack = [];
  //스택에 넣고 방문처리는 동시에
  stack.push(start);
  visited[start] = true;

  while (stack.length !== 0) {
    const now = stack.pop();
    // 이미 방문한 노드가 나왔다면 다시 반복
    process.stdout.write(`${now} `);
    // 현재 노드와 인접한 노드를 역순으로 확인
    // 스택은 선입후출이므로 나중에 들어간 노드가 먼저 나오게 하기 위함
    for (let i = graph[now].length - 1; i >= 0; i--) {
      const adj = graph[now][i];
      if (!visited[adj]) {
        //인접한 노드를 스택에 넣고 방문처리는 동시에
        stack.push(adj);
        visited[adj] = true;
      }
    }
  }
}

dfs(graph, 1, visited);
