//단일 링크드리스트 뒤집기
function reverseSll(sll) {
  var node = sll.head;
  var prev = null;

  while (node) {
    let temp = node.next; //미리 다음 노드 위치 저장
    node.next = prev; //꼬리부터 채워나가기
    prev = node;
    if (!temp) break;
    node = temp;
  }

  return node;
}
