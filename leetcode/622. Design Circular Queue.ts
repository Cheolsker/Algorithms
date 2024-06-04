/**
 * 버퍼사이즈를 사이즈+1로 지정
 * 빈 버퍼를 한 개 둠으로써, empty와 full 조건을 간단하게 판단함
 *
 * enqueue()
 * rear를 한 칸 이동시키고, 값을 추가
 *
 * dequeue()
 * front를 한 칸 이동시키고, 값을 제거
 */
class MyCircularQueue1 {
  buffer: number[] = [];
  front: number;
  rear: number;
  bufferSize: number;

  constructor(k: number) {
    this.buffer = new Array(k + 1).fill(-1);
    this.front = 0;
    this.rear = 0;
    this.bufferSize = k + 1;
  }

  enQueue(value: number): boolean {
    if (this.isFull()) return false;

    this.rear = (this.rear + 1) % this.bufferSize;
    this.buffer[this.rear] = value;

    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) return false;

    this.front = (this.front + 1) % this.bufferSize;
    this.buffer[this.front] = -1;

    return true;
  }

  Front(): number {
    if (this.isEmpty()) return -1;

    return this.buffer[(this.front + 1) % this.bufferSize];
  }

  Rear(): number {
    if (this.isEmpty()) return -1;

    return this.buffer[this.rear];
  }

  isEmpty(): boolean {
    return this.front === this.rear;
  }

  isFull(): boolean {
    return (this.rear + 1) % this.bufferSize === this.front;
  }
}

/**
 * front=0, rear=-1 로 rear 포인터를 front 포인터 보다 한칸 뒤에 두고 시작
 *
 * enqueue()
 * rear를 한 칸 이동시키고, 새로운 값을 추가
 *
 * dequeue()
 * 제거할 값의 위치를 front가 가리키고 있음
 *
 */
export class MyCircularQueue2 {
  q: number[] = [];
  front: number;
  rear: number;
  len: number;

  constructor(k: number) {
    this.q = new Array(k);
    this.front = 0;
    this.rear = -1;
    this.len = 0;
  }

  enQueue(value: number): boolean {
    if (this.isFull()) return false;

    // rear 포인터를 한 칸 이동
    this.rear = (this.rear + 1) % this.q.length;
    // rear 위치에 값 삽입
    this.q[this.rear] = value;
    this.len++;

    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) return false;

    // front 포인터를 한 칸 앞으로 이동
    this.front = (this.front + 1) % this.q.length;
    this.len--;

    return true;
  }

  Front(): number {
    return this.isEmpty() ? -1 : this.q[this.front];
  }

  Rear(): number {
    return this.isEmpty() ? -1 : this.q[this.rear];
  }

  isEmpty(): boolean {
    return this.len === 0;
  }

  isFull(): boolean {
    return this.len === this.q.length;
  }
}
