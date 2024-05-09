//다차원 배열 구현하기
/**
 * [
    [ 0, 1, 4, 9, 16 ],
    [ 0, 1, 4, 9, 16 ],
    [ 0, 1, 4, 9, 16 ],
    [ 0, 1, 4, 9, 16 ],
    [ 0, 1, 4, 9, 16 ]
   ]
 */

const arr = Array.from({ length: 5 }, () =>
  Array.from({ length: 5 }, (_, i) => i * i)
);

console.log(arr);

//arr1과 arr2는 같습니다
// [ 0, 0, 0, 0, 0 ]
const arr1 = Array(5).fill(0);
const arr2 = Array.from({ length: 5 }, () => 0);

console.log(arr1);
console.log(arr2);

/**
 * [
    [ 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0 ],
    [ 0, 0, 0, 0, 0 ]
   ]
 */
const arr3 = Array.from({ length: 5 }).fill(Array.from({ length: 5 }, () => 0));
const arr4 = Array.from({ length: 5 }, () => Array(5).fill(0));

console.log(arr3);
console.log(arr4);

const arr5 = [...Array(5).fill(0)]; // [ 0, 0, 0, 0, 0 ]
const arr6 = Array.from(Array(5), () => []); // [ [], [], [], [], [] ]

console.log(arr5);
console.log(arr6);

const arr7 = new Array(10);
console.log(arr7[0]);
