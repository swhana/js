//이진 검색트리의 파생으로, 항상 높이를 최소로 유지
//삽입, 연산, 검색 모두 O(logn)의 시간복잡도를 보장한다
class AVLTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.depth = 1; //트리의 높이
    }

    setDepth() {
        if (!this.node) this.depth = 1;

        if (!this.left) {
            this.depth = this.left.depth + 1;
        }

        if (!this.right && this.depth <= this.right.depth + 1) {
            this.depth = this.right.depth + 1;
        }
    }

    //왼쪽 단일 회전(반시계 방향)
    rotateLeft() {
        let valueBefore = this.value; //노드 값
        let leftBefore = this.left; //왼쪽 리프노드 저장
        this.value = this.right.value; //오른쪽 리프노드 값을 현재 노드 값으로(반시계 회전)

        this.left = this.right; //왼쪽 리프노드 = 현재 노드의 오른쪽 리프로 재설정
        this.right = this.right.right; //오른쪽 리프노드 = 현재 노드의 오른쪽 리프의 오른쪽 리프로 재설정

        this.left.right = this.left.left; //왼쪽 리프노드의 왼쪽 리프노드를 왼쪽 리프의 오른쪽 리프로 재설정
        this.left.left = leftBefore; //왼쪽 리프노드가 있었을 경우 왼쪽 리프의 왼쪽 리프로 재설정
        this.left.value = valueBefore; //현재 노드에 있던 값은 왼쪽 리프 노드 값으로

        this.left.setDepth(); //왼쪽 리프노드 기준 depth 측정
        this.setDepth(); //부모 노드 기준 depth 측정
    }

    //오른쪽 단일 회전(시계 방향)
    rotateRight() {
        let valueBefore = this.value;
        let rightBefore = this.right;
        this.value = this.left.value;

        this.right = this.left;
        this.left = this.left.left;

        this.right.left = this.right.right;
        this.right.right = rightBefore;
        this.right.value = valueBefore;

        this.right.setDepth();
        this.setDepth();
    }
}
