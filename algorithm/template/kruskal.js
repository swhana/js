//unionfind의 확장
function findParent(parent, x) {
  // x의 부모가 x가 아니라면, 부모 노드가 있는 것이므로
  // 재귀적으로 호출하며 집합의 최상위 부모를 구함
  if (parent[x] !== x) {
    parent[x] = findParent(parent, parent[x]);
  }
  return parent[x];
}

function union(parent, a, b) {
  // a 노드와 b 노드의 최상위 부모를 구함
  a = findParent(parent, a);
  b = findParent(parent, b);
  // 더 작은 값을 가진 노드를 부모로 설정
  if (a < b) parent[b] = a;
  else parent[a] = b;
}

// 노드 개수, 부모 테이블 (초기값은 자기 자신으로 설정)
const n = 6;
const parent = Array.from({ length: n + 1 }, (_, i) => i);

// 간선 연결 [노드, 노드, 거리(가중치)]
const edges = [
  [1, 2, 29],
  [1, 5, 75],
  [2, 3, 35],
  [2, 6, 34],
  [3, 4, 7],
  [4, 6, 23],
  [5, 6, 53],
];
// 가중치가 가장 짧은 노드부터 연결하도록 정렬
edges.sort((a, b) => a[2] - b[2]);

// 간선 정보를 바탕으로 최소 신장 트리 구축
// 총 거리를 result 변수에 저장
let result = 0;
edges.forEach((edge) => {
  const [a, b, cost] = edge;

  // 포함된 집합이 같은 경우 두 노드 사이 사이클 발생
  // 사이클이 발생하지 않은 경우 합집합 수행과 거리를 누적함
  if (findParent(parent, a) !== findParent(parent, b)) {
    union(parent, a, b);
    result += cost;
  }
});
// 총 거리: 146
console.log(result);
