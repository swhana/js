//이진 검색트리의 파생으로, 항상 높이를 최소로 유지
//삽입, 연산, 검색 모두 O(logn)의 시간복잡도를 보장한다
class Node {
    constructor(data) {
        this.data = data;
        this.height = 1; //트리의 높이
        this.left = null; //왼쪽 리프 노드
        this.right = null; //오른쪽 리프 노드
    }
}

class AVLTree {
    constructor() {
        this._root = null;
    }

    getHeight(node) {
        if (!node) return 0;
        return node.height;
    }

    //왼쪽 서브트리의 높이 - 오른쪽 서브트리의 높이 = BF
    getBalanceFactor(node) {
        if (!node) return 0;
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    rotateLeft(x) {
        //x의 오른쪽 자식 노드가 y노드이고, T2는 y의 왼쪽 서브트리
        const y = x.right;
        const T2 = y.left;

        //y노드의 왼쪽 자식노드를 x노드로 바꾼다
        y.left = x;
        //x노드의 오른쪽 자식 노드를 기존 왼쪽 서브트리로 바꾼다
        x.right = T2;

        //높이 업데이트 이후 새로운 루트노드 y를 return
        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

        return y;
    }

    rotateRight(x) {
        const y = x.left;
        const T2 = y.right;

        y.right = x;
        x.left = T2;

        y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
        x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

        return y;
    }

    //특정 노드를 기준으로 새 노드 삽입
    insertNode(node, data) {
        if (!node) return new Node(data);

        //기존 이진 검색트리와 같은 과정
        if (data < node.data) {
            node.left = this.insertNode(node.left, data);
        } else if (data > node.data) {
            node.right = this.insertNode(node.right, data);
        } else return node;


        return this.balance(node, data);
    }

    insert(data) {
        this._root = this.insertNode(this._root, data);
    }


    removeNode(node, data) {
        if (!node) return null;

        if (data < node.data) {
            node.left = this.removeNode(node.left, data);
        } else if (data > node.data) {
            node.right = this.removeNode(node.right, data);;
        } else {
            if (!node.left) {
                node = node.right;
                return node;
            } else if (!node.right) {
                node = node.left;
                return node;
            } else {
                //left right 모두 서브트리가 있을경우
                //루트 노드가 사라질 자리를 대체할 노드는 오른쪽 서브트리의 가장 작은 값이 된다
                const min = this.findMinNode(node.right);
                node.data = min.data;
                node.right = this.removeNode(node.right, min.data);

                return node;
            }
        }


        return this.balance(node, data);
    }

    remove(data) {
        this._root = this.removeNode(this._root, data);
    }

    findMinNode(node) {
        while (node.left) node = node.left;

        return node;
    }

    balance(node, data) {
        //여기부터 AVL트리의 차별점
        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;

        const bf = this.getBalanceFactor(node);

        //LL Case
        if (bf > 1 && data < node.left.data) return this.rotateRight(node);

        //RR Case
        if (bf < -1 && data > node.right.data) return this.rotateLeft(node);

        //LR Case
        if (bf > 1 && data > node.left.data) {
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }

        //RL Case
        if (bf < -1 && data < node.right.data) {
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }

        return node;
    }

    printTree(node = this._root, space = 0, height = this._root.height) {
        if (!node) return;
        space += height;

        this.printTree(node.right, space);
        console.log(" ".repeat(space - height) + `${node.data}`);
        this.printTree(node.left, space);
    }
}

let tree = new AVLTree();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);
tree.insert(25);

tree.printTree();