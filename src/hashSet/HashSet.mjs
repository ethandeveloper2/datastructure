// 셋(Set) - 데이터의 중복을 허용하지 않는 자료 구조. 해시셋이라고도 불린다. 해시 테이블에서 key만 사용한다.
// 중복되지 않는 값을 저장하고 싶다면, 셋을 사용하면 된다.

// 셋의 추상자료형
// 1. add(data) - 데이터 삽입
// 2. isContain(data) - 데이터 체크
// 3. remove(data) - 데이터 제거
// 4. clear() - 셋비우
// 5. isEmpty() - 셋이 비었는지 체크
// 6. printAll() - 모든 데이터 출력

import { HashTable } from '../hashTable/HashTable.mjs';

class HashSet {
  constructor() {
    this.hashTable = new HashTable();
  }

  add(data) {
    if (this.hashTable.get(data) == null) {
      this.hashTable.set(data, -1);
    }
  }

  isContain(data) {
    return this.hashTable.get(data) != null;
  }

  remove(data) {
    this.hashTable.remove(data);
  }

  clear() {
    for (let i = 0; i < this.hashTable.arr.length; i++) {
      this.hashTable.arr[i].clear();
    }
  }

  isEmpty() {
    let empty = true;
    for (let i = 0; i < this.hashTable.arr.length; i++) {
      if (this.hashTable.arr[i].count > 0) {
        empty = false;
        break;
      }
    }
    return empty;
  }

  printAll() {
    for (let i = 0; i < this.hashTable.arr.length; i++) {
      let currentNode = this.hashTable.arr[i].head;
      while (currentNode != null) {
        console.log(currentNode.data.key);
        currentNode = currentNode.next;
      }
    }
  }
}

export { HashSet };
