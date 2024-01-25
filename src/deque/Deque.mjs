// 스택 : FILO 헤드에만 삽입, 제거
// 큐 : FIFO 헤드에 삽입, 테일에서 제거
// 덱 : 삽입 과 제거를 헤드와 테일 두군데에서 자유롭게

// 덱의 추상 자료형
// 1. printAll = 모든 데이터 출력
// 2. addFirst = head에 데이터 삽입
// 3. removeFirst = head에서 데이터 제거
// 4. addLast = tail 에 데이터 삽입
// 5. removeLast = tail 에서 데이터 제거
// 6. isEmpty = 덱이 비었는지 체크

import { DoublyLinkedList } from '../LinkedList/DoublyLinkedList.mjs';

class Deque {
  constructor() {
    this.list = new DoublyLinkedList();
  }

  printAll() {
    this.list.printAll();
  }

  // O(1)
  addFirst(data) {
    this.list.insertAt(0, data);
  }

  // O(1)
  removeFirst() {
    return this.list.deleteAt(0);
  }

  addLast(data) {
    this.list.insertAt(this.list.count, data);
  }

  removeLast() {
    return this.list.deleteLast();
  }

  isEmpty() {
    return this.list.count == 0;
  }
}

export { Deque };
