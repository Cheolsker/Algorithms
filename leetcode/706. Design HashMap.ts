/**
 * 해시맵 사이즈
 */
const BUCKET_SIZE = 10000;

/**
 * 해시맵에 쓰이는 노드
 */
class HashNode {
  key: number;
  value: number;
  next: HashNode | null;

  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

/**
 * 해시맵 디자인 & 구현하기
 */
class MyHashMap {
  private bucket: (HashNode | null)[];

  constructor() {
    this.bucket = Array.from<HashNode | null>({ length: BUCKET_SIZE + 1 }).fill(
      null
    );
  }

  /**
   * key를 버킷사이즈로 나누고 남은 값을 hashKey로 설정
   */
  private hashFunc(key: number) {
    return key % BUCKET_SIZE;
  }

  getBucket() {
    return this.bucket;
  }

  /**
   * hashKey로 버킷을 조회하고, 해당 key가 존재하면 덮어씀
   * 해당 key가 없으면 추가
   *
   * O(N)
   */
  put(key: number, value: number): void {
    let prev: HashNode | null = null;
    let curr: HashNode | null = this.bucket[this.hashFunc(key)];

    // 노드가 있다면
    while (curr) {
      if (curr.key === key) {
        curr.value = value;
        return;
      }

      prev = curr;
      curr = curr.next;
    }

    const node = new HashNode(key, value);

    // 이전 노드가 있다면 이어서 추가
    if (prev) {
      prev.next = node;
    }
    // 이전 노드가 없으면 첫번째 노드로 저장
    else {
      this.bucket[this.hashFunc(key)] = node;
    }
  }

  /**
   * hashKey로 버킷을 조회
   *
   * O(N)
   */
  get(key: number): number {
    let curr = this.bucket[this.hashFunc(key)];

    while (curr) {
      if (curr.key === key) {
        return curr.value;
      }

      curr = curr.next;
    }

    return -1;
  }

  /**
   * hashKey로 버킷을 조회해서 key가 존재하면 제거
   *
   * O(N)
   */
  remove(key: number): void {
    let prev: HashNode | null = null;
    let curr: HashNode | null = this.bucket[this.hashFunc(key)];

    // 노드가 없다면 얼리 리턴
    if (!curr) return;

    // 노드가 있을 때, key를 조회
    while (curr) {
      // key가 있다면 제거
      if (curr.key === key) {
        // 이전 노드가 있을 때
        if (prev) {
          prev.next = curr.next;
        }
        // 이전 노드가 없을 때
        else {
          this.bucket[this.hashFunc(key)] = curr.next;
        }

        return;
      }

      prev = curr;
      curr = curr.next;
    }
  }
}

/**
 * 테스트 1
 */
const hashMap = new MyHashMap();
hashMap.put(1, 1);
hashMap.put(2, 2);

console.log(hashMap.get(1)); // 1
console.log(hashMap.get(2)); // 2
console.log(hashMap.get(3)); // -1

hashMap.put(2, 22);
console.log(hashMap.get(2)); // 22

hashMap.remove(2);
console.log(hashMap.get(2)); // -1

/**
 * 테스트 2
 */
const hashMap2 = new MyHashMap();
hashMap2.put(1000000, 1);
const get1 = hashMap2.get(1000000);
hashMap2.put(0, 2);
const get2 = hashMap2.get(0);

console.log(get1, get2);
