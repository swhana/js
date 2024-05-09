/**
 * @param {number} n 노드 갯수
 * @param {[number, number, number]} edges [출발점, 도착점, 가중치] 를 담은 배열로 전달
 * @returns 그래프 [[number, number, ...], [number, number, ...] ...]
 */

function makeGraph(n, edges) {
  const graph = Array.from({ length: n }, () => []); // 길이 n의 인접리스트
  edges.forEach(([st, ed, dist]) => graph[st].push([ed, dist]));
  //여기서 ed나 dist에 관해 정렬이 들어갈 필요성도 있다

  //ed에 관해 정렬
  // graph.forEach(arr => {
  //   arr.sort((a, b) => a[0] - b[0]);
  // })

  //dist에 관해 정렬(가중치)
  graph.forEach(arr => {
    arr.sort((a, b) => a[1] - b[1]);
  })

  return graph;
}

const edges = [[1, 2, 1], [1, 5, 2], [2, 4, 2], [2, 3, 1], [3, 1, 5], [3, 2, 1], [3, 4, 2], [4, 5, 1], [5, 2, 1]]

function BFS(graph, start) {
  const visited = Array(graph.length).fill(false); //방문 처리 배열
  let queue = [start]; //시작점
  visited[start] = true;

  while (queue.length) {
    const node = queue.shift();
    console.log(node);
    //방문할 때마다 수행할 함수(생략 가능)
    // func(node);

    graph[node].forEach(([newNode]) => {
      if (visited[newNode]) return;
      visited[newNode] = true;
      queue.push(newNode);
    })
  }
}

const graph = makeGraph(6, edges);
console.log(graph);
BFS(graph, 1);