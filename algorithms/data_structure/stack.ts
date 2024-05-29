import { NodeItem } from './node';

export class Stack<T> {
  top: NodeItem<T> | null;
  size: number;
  length: number;

  constructor(size: number) {
    this.top = null;
    this.size = size;
    this.length = 0;
  }

  push(item: NodeItem<T>) {
    if (this.size === this.length) {
      console.log('Stack is Full');
      return;
    }

    if (this.top) {
      item.next = this.top;
      this.top = item;
    } else {
      this.top = item;
    }

    this.length = this.length + 1;
  }

  pop(): NodeItem<T> | null {
    if (this.length === 0) {
      console.log('Stack is Empty');
      return null;
    }

    if (this.top) {
      const item = this.top;
      this.top = item.next;
      this.length = this.length - 1;
      return item;
    } else {
      this.length = 0;
      return null;
    }
  }

  peek() {
    return this.top;
  }

  isEmpty() {
    return this.length === 0;
  }

  traverse() {
    if (!this.top) {
      console.log('Stack is Empty');
      return;
    }

    let result: string = '';
    let curr: typeof this.top | null = this.top;

    while (curr) {
      result = result.length ? `${result} -> ${curr.item}` : String(curr.item);
      curr = curr.next;
    }

    result += ' -> null';

    console.log(result);
  }
}

/**
 * 테스트
 */
const item1 = new NodeItem(1);
const item2 = new NodeItem(2);
const item3 = new NodeItem(3);
const item4 = new NodeItem(4);
const item5 = new NodeItem(5);

const stack = new Stack<number>(3);

stack.pop();
stack.push(item1);
stack.push(item2);
stack.push(item3);
stack.push(item4);
stack.push(item5);

stack.traverse();
