import { HashTable } from '../hashTable/HashTable.mjs';

let hasTable = new HashTable();

hasTable.set(1, '이운재');
hasTable.set(4, '최진철');
hasTable.set(20, '홍명보');
hasTable.set(6, '유상철');
hasTable.set(22, '송종국');
hasTable.set(21, '박지성');
hasTable.set(5, '김남일');
hasTable.set(10, '이영표');
hasTable.set(8, '최태욱');
hasTable.set(9, '설기현');
hasTable.set(14, '이천수');

console.log(`1 : ${hasTable.get(1)}`)
hasTable.remove(1);
console.log(`1 : ${hasTable.get(1)}`)

console.log(`21 : ${hasTable.get(21)}`)
