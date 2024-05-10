// .prototype 속성을 사용해서 프로토타입 활용 상속을 해보기
function ExampleFn() {
  this.array = [1, 2, 3, 4, 5];
  this.name = "Function";
}

const ex1 = new ExampleFn();

console.log(ex1.array);
console.log(ex1.name);

// 프로토타입 활용 상속으로 callName 메소드를 추가했다
ExampleFn.prototype.callName = function () {
  console.log("Name: " + this.name);
};

ex1.callName();

//class 생성자로 해도 같은 결과를 얻을 수 있다
class ExampleClass {
  constructor() {
    this.array = [5, 4, 3, 2, 1];
    this.name = "Class";
  }
}

const ex2 = new ExampleClass();

console.log(ex2.array);
console.log(ex2.name);

ExampleClass.prototype.callArray = function () {
  console.log("Array: " + this.array);
};

ex2.callArray();
