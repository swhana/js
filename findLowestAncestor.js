//두 노드의 최소공통조상 찾기
function findLA(node, val1, val2) {
    if (!node) return;
    if (Math.max(val1, val2) < node.val) {
        return findLA(node.left, val1, val2);
    }

    if (Math.min(val1, val2) > node.val) {
        return findLA(node.right, val1, val2);
    }

    return node.val;
}