import { DoublyNode } from '../algorithms/data_structure/doubly_node';

// 원형 데크
export class MyCircularDeque {
  private front: DoublyNode<number> | null = null;
  private rear: DoublyNode<number> | null = null;
  private length: number;
  private size: number;

  constructor(k: number) {
    this.length = 0;
    this.size = k;
  }

  insertFront(value: number): boolean {
    if (this.isFull()) return false;

    const node = new DoublyNode(value);

    if (this.isEmpty()) {
      this.front = node;
      this.rear = node;
      this.length++;

      return true;
    }

    this.front!.prev = node;
    node.next = this.front;
    this.front = node;

    this.front.prev = this.rear;
    this.rear!.next = this.front;

    this.length++;

    return true;
  }

  insertLast(value: number): boolean {
    if (this.isFull()) return false;

    const node = new DoublyNode(value);

    if (this.isEmpty()) {
      const node = new DoublyNode(value);
      this.front = node;
      this.rear = node;
      this.length++;

      return true;
    }

    this.rear!.next = node;
    node.prev = this.rear;
    this.rear = node;

    this.front!.prev = this.rear;
    this.rear!.next = this.front;

    this.length++;

    return true;
  }

  deleteFront(): boolean {
    if (this.isEmpty()) return false;

    if (this.length === 1) {
      this.front = null;
      this.rear = null;
      this.length--;
      return true;
    }

    const next = this.front!.next!;
    this.front!.prev = null;
    this.front!.next = null;

    this.front = next;
    this.front.prev = this.rear;
    this.rear!.next = this.front;

    this.length--;

    return true;
  }

  deleteLast(): boolean {
    if (this.isEmpty()) return false;

    if (this.length === 1) {
      this.front = null;
      this.rear = null;
      this.length--;
      return true;
    }

    const prev = this.rear!.prev;
    this.rear!.prev = null;
    this.rear!.next = null;

    this.rear = prev;
    this.front!.prev = this.rear;
    this.rear!.next = this.front;

    this.length--;

    return true;
  }

  getFront(): number {
    return this.isEmpty() ? -1 : this.front!.item;
  }

  getRear(): number {
    return this.isEmpty() ? -1 : this.rear!.item;
  }

  isEmpty(): boolean {
    if (this.length === 0) {
      console.log('Deque is Empty');
      return true;
    }

    return false;
  }

  isFull(): boolean {
    if (this.length === this.size) {
      console.log('Deque is Full');
      return true;
    }

    return false;
  }
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 */
const obj = new MyCircularDeque(3);

obj.insertFront(1);
obj.insertLast(2);
obj.insertLast(3);
// [1,2,3]

obj.deleteFront();
// [2,3]

obj.insertLast(4);
obj.insertFront(1); // Full, false
// [2,3,4]

obj.deleteFront();
obj.deleteFront();
// [4]
