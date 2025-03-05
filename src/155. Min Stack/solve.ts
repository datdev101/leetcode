class MinStack {
  private stack: number[] = [];
  private minStack: number[] = [];

  constructor() {}

  push(val: number): void {
    this.stack.push(val);
    this.minStack.push(
      this.minStack.length == 0
        ? val
        : Math.min(val, this.minStack[this.minStack.length - 1])
    );
  }

  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}
