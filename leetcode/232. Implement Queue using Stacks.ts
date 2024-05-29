import { Stack as MyStack } from '../algorithms/data_structure/stack';
import { NodeItem } from '../algorithms/data_structure/node';

const SIZE = 150;

class MyQueue {
  stack: MyStack<number>;

  constructor() {
    this.stack = new MyStack(SIZE);
  }

  push(x: number): void {
    const newStack = new MyStack<number>(SIZE);
    newStack.push(new NodeItem(x));

    let rev: NodeItem<number> | null = null;

    while (this.stack.top) {
      const last = this.stack.pop();

      if (last) {
        last.next = rev;
        rev = last;
      }
    }

    while (rev) {
      const next = rev.next;
      rev.next = null;

      newStack.push(rev);
      rev = next;
    }

    this.stack = newStack;
  }

  pop(): number {
    return this.stack.pop()?.item || -1;
  }

  peek(): number {
    return this.stack.top?.item || -1;
  }

  empty(): boolean {
    return this.stack.isEmpty();
  }
}
