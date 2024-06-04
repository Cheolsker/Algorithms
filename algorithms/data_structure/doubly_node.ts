/**
 * 이중 연결리스트 형태의 노드
 */
export class DoublyNode<T> {
  item: T;
  prev: DoublyNode<T> | null = null;
  next: DoublyNode<T> | null = null;

  constructor(item: T) {
    this.item = item;
  }
}
