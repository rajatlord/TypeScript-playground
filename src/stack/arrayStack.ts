class StackArray<T> {
  // instialization
  private items: T[];

  constructor() {
    this.items = [];
  }

  push(element: T): void {
    this.items.push(element);
  }

  // Remove element from top
  pop(): T | undefined {
    if (this.isEmpty()) {
      console.log("This stack is empty");
    }
    return this.items.pop();
  }

  // View top element
  peek(): T | undefined {
    if (this.isEmpty()) {
      console.log("This stack is empty");
    }
    return this.items[this.items.length - 1];
  }

  // Check if empty
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Get stack size
  size(): number {
    return this.items.length;
  }

  // Clear stack
  clear(): void {
    this.items = [];
  }

  // Print stack
  print(): void {
    console.log(this.items.join(" -> "));
  }
}


const stack = new StackArray<number>();

stack.push(10);
stack.push(20);
stack.push(30);

stack.print(); // 10 -> 20 -> 30

console.log(stack.peek()); // 30
console.log("current stack array size",stack.size()); // 2
console.log("removing element from the stack"); // 30

stack.pop();

console.log(stack.size()); // 2