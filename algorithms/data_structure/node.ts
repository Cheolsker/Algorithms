export class NodeItem<T> {
  item: T;
  next: NodeItem<T> | null = null;

  constructor(item: T) {
    this.item = item;
  }
}
