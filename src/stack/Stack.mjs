import { LinkedList } from '../LinkedList/linkedList.mjs';

// 스택의 추상 자료형
// push = 데이터 삽입
// Pop = 데이터 제거
// peek = 데이터 참조
// isEmpty = 비어있는지 체크

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  push(data) {
    this.list.insertAt(0, data);
  }

  pop() {
    try {
      return this.list.deleteAt(0);
    } catch (e) {
      return null;
    }
  }

  peek() {
    return this.list.getNodeAt(0);
  }

  isEmpty() {
    return this.list.count === 0;
  }
}

export { Stack };
