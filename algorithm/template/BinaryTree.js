function BinaryNode(value) {
  this.data = value;
  //그냥 트리와 다른 점은 자식 노드의 개수가 정해져있냐 아니냐 정도
  this.left = null;
  this.right = null;
}

function BinaryTree() {
  this._root = null;
}

//전위 순회
BinaryTree.prototype.preOrder = function () {
  traverse(this._root);

  function traverse(node) {
    if (!node) return;
    //부모 -> 왼쪽 -> 오른쪽 순
    console.log(node.data);
    traverse(node.left);
    traverse(node.right);
  }
};

//중위 순회
BinaryTree.prototype.inOrder = function () {
  traverse(this._root);

  function traverse(node) {
    if (!node) return;
    //왼쪽자식 -> 부모 -> 오른쪽 자식
    traverse(node.left);
    console.log(node.data);
    traverse(node.right);
  }
};

//후위 순회
BinaryTree.prototype.postOrder = function () {
  traverse(this._root);

  function traverse(node) {
    if (!node) return;

    //왼쪽 자식 -> 오른쪽 자식 -> 부모
    traverse(node.left);
    traverse(node.right);
    console.log(node.data);
  }
};

BinaryTree.prototype.bfs = function () {
  let queue = []; //순서 관리용 큐

  if (!this._root) return;

  queue.push(this._root);

  while (queue.length) {
    const temp = queue.shift(); //선입선출
    console.log(temp.data);
    if (temp.left) queue.push(temp.left);
    if (temp.right) queue.push(temp.right);
  }
};
