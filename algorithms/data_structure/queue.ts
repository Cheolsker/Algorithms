import { NodeItem } from './node';

export class Queue<T> {
  front: NodeItem<T> | null;
  rear: NodeItem<T> | null;
  size: number;
  length: number;

  constructor(size: number) {
    this.front = null;
    this.rear = null;
    this.size = size;
    this.length = 0;
  }

  enqueue(item: NodeItem<T>) {
    if (this.size === this.length) {
      console.log('Queue is Full!');
      return;
    }

    if (!this.rear) {
      this.front = item;
      this.rear = item;
      this.length = 1;
      return;
    }

    this.rear.next = item;
    this.rear = item;
    this.length = this.length + 1;
  }

  dequeue() {
    if (!this.front) {
      console.log('Queue is Empty');
      return;
    }

    if (this.length > 1) {
      const item = this.front;
      const next = item.next;
      item.next = null;

      this.front = next;
      this.length = this.length - 1;

      if (this.length === 1) {
        this.rear = this.front;
      }

      return item;
    } else {
      const item = this.front;
      this.front = null;
      this.rear = null;
      this.length = 0;

      return item;
    }
  }

  isEmpty() {
    return this.length === 0;
  }

  traverse() {
    if (!this.front) {
      console.log('Queue is Empty!');
    }

    let result = '';
    let curr = this.front;

    while (curr) {
      result += curr.item;

      if (curr.next) {
        result += ' -> ';
      }

      curr = curr.next;
    }

    console.log(result);
  }
}

/**
 * 테스트
 */

// const item1 = new NodeItem(1);
// const item2 = new NodeItem(2);
// const item3 = new NodeItem(3);
// const item4 = new NodeItem(4);
// const item5 = new NodeItem(5);

// const queue = new Queue(3);

// console.log(queue.isEmpty());

// queue.enqueue(item1);
// queue.enqueue(item3);
// queue.enqueue(item5);

// queue.traverse();

// queue.dequeue();
// queue.dequeue();

// queue.traverse();

// queue.enqueue(item4);
// queue.enqueue(item2);

// queue.traverse();
