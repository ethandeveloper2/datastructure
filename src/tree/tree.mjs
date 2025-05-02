import { Queue } from '../queue/Queue.mjs';

// ctrl+shift+p
// disable cursor tab

// 트리 자료구조의 규칙

// - 노드는 자식만 가리킬 수 있다.(형제 X, 부모 X)
// - 출발점은 하나여야 한다.
// - Root : 트리의 최상단 노드
// - Child : Root로 부터 아래로 이동할 때, 직접적으로 연결되어 있는 노드
// - Parent: 자식 노드에서 부터 Root 방향으로 이동할 때, 직접적으로 연결되어 있는 노드
// - Siblings : 같은 부모를 가진 노드 그룹
// - Leaf: 자식이 없는 노드
// - Edge: 노드 간의 연결

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const node = new Node(value);
    if (this.root === null) {
      this.root = node;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = node;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }

  // 너비 우선 탐색 (BFS)
  // - 큐와 방문한 노드들을 저장할 수 있는 변수를 만든다.
  // - 큐에 Root 노드를 넣는다.
  // - 큐에 아무것도 없을 때까지 반복한다.
  //     - 큐에서 노드를 꺼내서, 방문한 노드에 표기한다.
  //     - 만약 왼쪽 요소가 있다면, 꺼내서 큐에 넣는다.
  //     - 만약 오른쪽 요소가 있다면, 꺼내서 큐에 넣는다.
  // - 방문한 노드가 저장된 변수를 리턴한다.
  bfs() {
    const visited = [];
    const queue = new Queue();
    queue.enqueue(this.root);

    while(!queue.isEmpty()) {
      let selectedNode = queue.dequeue().data;
      if (selectedNode) {
        visited.push(selectedNode.value);
        if (selectedNode.left !== null) {
          queue.enqueue(selectedNode.left);
        }
        if (selectedNode.right !== null) {
          queue.enqueue(selectedNode.right);
        }
      }
    }

    return visited;
  }

  // 전위 순회 ROOT -> LEFT -> RIGHT
  // - 방문한 노드들을 저장할 변수를 만든다.
  // - current라는 변수에 BST의 루트를 저장한다.
  // - 노드를 인자로 받을 helper 함수를 만든다.
  //     - 노드의 값을 방문한 노드를 저장하는 변수에 넣는다.
  //     - 노드가 left 요소를 가지고 있다면, helper function에 left 요소를 넣어 실행한다.
  //     - 노드가 right 요소를 가지고 있다면, , helper function에 right 요소를 넣어 실행한다.
  // - current 변수를 이용해서 helper 함수를 실행한다.
  // - 방문한 노드들을 반환한다.
  dfsPreOrder() {
    const visited = [];

    function traverse(node) {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return visited
  }
  // dfsPreOrder() {
  //   const visited = [];
  //   const current = this.root;
  //   this.preOrderHelper(visited, current);
  //   return visited;
  // }

  // preOrderHelper(visited, node) {
  //   console.log(node)
  //   visited.push(node.value);
  //   if (node.left) {
  //     this.preOrderHelper(visited, node.left);
  //   }
  //   if (node.right) {
  //     this.preOrderHelper(visited,node.right);
  //   }
  // }

  // 중위 순회 LEFT -> ROOT -> RIGHT
  dfsInOrder() {
    const visited = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(this.root)

    return visited;
  }

  // 후위 순회 LEFT -> RIGHT -> ROOT
  dfsPostOrder() {
    const visited = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    }

    traverse(this.root)

    return visited;
  }
}


const tree = new Tree();
tree.add(10);
tree.add(6);
tree.add(15);
tree.add(3);
tree.add(2);
tree.add(1);
tree.add(8);
tree.add(20);


console.log(tree.dfsInOrder())