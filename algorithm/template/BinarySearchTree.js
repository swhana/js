//Binary Search Tree
//기존 Binary Tree와 다른 점은 왼쪽자식의 값 > 부모의 값 > 오른쪽 자식의 값을 유지해서 검색이 용이해진다는 점
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this._root = null;
}

BinarySearchTree.prototype.insert = function (value) {
  const node = new Node(value);
  if (!this._root) this._root = node;
  else {
    let curr = this._root;
    while (true) {
      //현재 노드보다 작은 경우 왼쪽
      if (curr.value > node.value) {
        if (curr.left != null) curr = curr.left;
        else {
          //curr.left가 비어있을 경우
          curr.left = node;
          break;
        }
      }
      //현재 노드보다 큰 경우 오른쪽
      else if (curr.value < value) {
        if (curr.right != null) curr = curr.right;
        else {
          curr.right = node;
          break;
        }
      }
      //현재 노드와 같은 경우
      else break;
    }
  }
};

BinarySearchTree.prototype.remove = function (value) {
  removeRecur(this._root, value);

  function removeRecur(node, value) {
    if (!node) return null;
    //찾는 값이 지금 노드의 값보다 작을 경우 왼쪽으로 내려감
    else if (value < node.value) {
      node.left = removeRecur(node.left, value);
    }
    //반대의 경우 오른쪽
    else if (value > node.value) {
      node.right = removeRecur(node.right, value);
    } else {
      //자식이 없는 경우
      if (!node.left && !node.right) return null;
      else if (!node.left) {
        node = node.right;
        return node;
      } else if (!node.right) {
        node = node.left;
        return node;
      } else {
        const temp = findMin(node.right);
        node.value = temp.value;
        node.right = removeRecur(node.right, temp.value);
        return node;
      }
    }
    return node;
  }

  //BST에서 가장 작은 노드를 탐색해 들어가는 함수
  function findMin(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }
};

BinarySearchTree.prototype.search = function (value) {
  let curr = this._root;
  let isFound = false;

  while (curr) {
    if (value < curr.value) {
      curr = curr.left;
    } else if (value > curr.value) {
      curr = curr.right;
    } else {
      isFound = true;
      break;
    }
  }

  return isFound;
};

let bst = new BinarySearchTree();
bst.insert(1);
bst.insert(3);
bst.insert(2);
bst.search(1);
bst.search(4);
