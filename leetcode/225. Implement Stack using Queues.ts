import { Queue } from '../algorithms/data_structure/queue';
import { NodeItem } from '../algorithms/data_structure/node';

const SIZE = 150;

class MyStack {
  queue: Queue<number>;

  constructor() {
    this.queue = new Queue(SIZE);
  }

  push(x: number): void {
    const item = new NodeItem(x);

    this.queue.enqueue(item);

    for (let i = 1; i < this.queue.length; i++) {
      const last = this.queue.dequeue();

      if (last) {
        this.queue.enqueue(last);
      }
    }
  }

  pop(): number {
    return this.queue.dequeue()?.item || -1;
  }

  top(): number {
    return this.queue.front?.item || -1;
  }

  empty(): boolean {
    return this.queue.isEmpty();
  }
}

/**
 * 테스트
 */
const stack = new MyStack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(2);

console.log(stack.top()); // 2
console.log(stack.pop()); // 4
console.log(stack.top()); // 2
