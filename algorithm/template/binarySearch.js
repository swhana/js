//재귀적 방식
function binarySearch(arr, target, start, end) {
  if (start > end) return null;

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) return mid;
  else if (arr[mid] < target) binarySearch(arr, target, mid + 1, end);
  else binarySearch(arr, target, start, mid - 1);
}
