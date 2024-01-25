// 해시, 맵, 해시맵, 딕셔너리로 불린다.

// 11명의 축구 선수 명단을 테이블로 정리해서, 배열에 넣는다고 가정해보자.
// 등번호를 배열의 인덱스, 이름을 값으로 배열에 넣으면, 가장 큰 번호 + 1의 크기를 가진 배열이 생성되고, 낭비되는 공간이 생긴다.
// 낭비되는 공간을 없애기 위해서, 등번호에 특정한 계산(10으로 나눈 나머지)를 통해서, 제한된 인덱스를 만들고, 그 인덱스에 해당 선수의 이름을 추가할 수도 있다. => 해시 테이블
// 그런데 이런 경우, 충돌이 발생할 수 있다.(같은 인덱스에 다수의 값이 들어가는 경우) 이 때 값에 연결리스트를 넣는다. 값 2개를 하나의 데이터에 저장한다. O(n)의 성능
// 데이터를 골고루 뿌려주는 해시 함수가 중요하다.

// 장점 
// 1. 빠른 데이터 읽기
// 2. 삽입
// 3. 삭제
// 단점
// 1. 메모리를 많이 차지한다. (미리 공간을 확보해둬야 한다. 해시함수에 따라 다르다.)
// 2. 좋은 해시 함수의 구현은 필수 적이다.

// 추상 자료형
// set - 데이터 삽힙
// get - 데이터 읽기
// remove - 데이터 제거

import { DoublyLinkedList } from '../LinkedList/DoublyLinkedList.mjs';

class HashData {
  // get과 set에서 key를 알야하기 때문에 만든다.
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class HashTable {
  constructor() {
    this.arr = [];
    // 빈배열 생성 후, 10개의 인덱스에 빈 이중 연결리스트를 만든다.
    for (let i = 0; i < 10; i++) {
      this.arr[i] = new DoublyLinkedList();
    }
  }

  hashFunction(number) {
    return number % 10;
  }

  set(key, value) {
    this.arr[this.hashFunction(key)].insertAt(0, new HashData(key, value));
  }

  get(key) {
    let currentNode = this.arr[this.hashFunction(key)].head;
    while (currentNode != null) {
      if (currentNode.data.key == key) {
        return currentNode.data.value;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  remove(key) {
    let list = this.arr[this.hashFunction(key)];
    let currentNode = list.head;
    let deletedIndex = 0;
    while (currentNode != null) {
      if (currentNode.data.key == key) {
        return list.deleteAt(deletedIndex);
      }
      currentNode = currentNode.next;
      deletedIndex++;
    }
    return null;
  }
}

export { HashTable };





