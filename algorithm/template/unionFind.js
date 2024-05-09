//n개의 노드는 0부터 n-1까지의 노드 번호를 가진다고 가정
class UnionFind {
  constructor(n) {
    this.parents = Array.from({ length: n }, (_, i) => i); //0 ~ n-1까지 번호를 가지는 배열 생성
  }

  find(node) {
    //찾던 노드가 현재 노드의 부모 노드면 스탑
    if (this.parents[node] === node) return node;

    //아니면 더 위의 부모 노드를 탐색
    const parent = this.find(this.parents[node]);
    this.parents[node] = parent;

    return parent;
  }

  // 두 노드의 부모를 합침
  union(node1, node2) {
    const parent1 = this.find(node1);
    const parent2 = this.find(node2);

    this.parents[parent2] = parent1;
  }
}