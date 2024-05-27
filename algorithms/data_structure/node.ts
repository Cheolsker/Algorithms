/**
 * 단방향 연결리스트 형태의 노드로 구현
 */
export class NodeItem<T> {
  item: T;
  next: NodeItem<T> | null = null;

  constructor(item: T) {
    this.item = item;
  }
}
