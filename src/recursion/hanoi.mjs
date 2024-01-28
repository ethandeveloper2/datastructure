function hanoi(count, from, to, temp){
  if (count == 0) return;
  // 2개의 원반을 A에서 C로 이동하는데, B를 사용할 수 있다.
  hanoi(count - 1, from, temp, to);
  console.log(`원반 ${count}를 ${from}에서 ${to}로 이동`)
  // 2개의 원반을 C에서 B로 이동하는데, A를 사용할 수 있다.
  hanoi(count - 1, temp, to, from );
}

// 3개의 원반을 A에서 B로 이동하는데 C를 사용할 수 있다.
hanoi(2, "A", "B", "C")