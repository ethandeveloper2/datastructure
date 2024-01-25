// 재귀란?
// 어떠한 것을 정의할 때, 자기 자신을 참조하는 것.

function myFunction(number) {
  // 기저조건
  if (number > 10) return;

  console.log(number);
  myFunction(number + 1);
}

// 메모리가 가득차서 에러 발생
myFunction(1);
// 따라서 특정 조건(기저조건)에서 함수를 종료하도록 만들어야 한다.

// 콜스텍이란
// 함수가 호출되면서 올라가는 메모리 영역, 스택이라고도 불린다. 콜스택 말고도 다른 메모리 영역도 있다.
// 재귀함수는 호출 때마다 콜스텍의 영역을 차지하게 된다.
// 그렇기 때문에 for문으로 해결할 수 있는 작업을 재귀함수로 해결하면, 비효율적일 수 있다.

// 팩토리얼을 재귀함수로 해결하기 좋다.

