import { Stack as MyStack } from '../algorithms/data_structure/stack';
import { NodeItem } from '../algorithms/data_structure/node';

const SIZE = 150;

/**
 * 나의 풀이
 *
 * 2개의 스택을 사용
 *
 * push() : O(M) + O(1)
 * 기존 스택의 값들을 pop한 후, rev 연결리스트에 연결
 * 연결리스트를 돌면서, 값들을 새로운 스택에 넣고, 새로운 스택을 this.stack에 연결
 *
 * pop() : O(1)
 * 항상 top의 값을 꺼냄
 */
class MyQueue1 {
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

/**
 * 책 풀이
 *
 * 평균 시간복잡도가 O(1)
 * push() : O(1)
 *
 * pop() : 평균 시간복잡도 O(1) -> O(N) + (O(1) + O(1) + ...) / N
 * output이 empty일 때, M개 요소가 input에 있으면, POP시 O(M) + O(1)
 * output이 empty가 아니면, O(1)만큼 시간복잡도 발생
 */
class MyQueue2 {
  input: MyStack<number>;
  output: MyStack<number>;

  constructor() {
    this.input = new MyStack(SIZE);
    this.output = new MyStack(SIZE);
  }

  push(x: number): void {
    this.input.push(new NodeItem(x));
  }

  pop(): number {
    const top = this.peek();

    return this.output.pop()?.item ?? -1;
  }

  peek(): number {
    if (this.output.isEmpty()) {
      while (!this.input.isEmpty()) {
        const last = this.input.pop();

        if (last) {
          this.output.push(last);
        }
      }
    }

    return this.output.top?.item ?? -1;
  }

  empty(): boolean {
    return this.input.isEmpty() && this.output.isEmpty();
  }
}
