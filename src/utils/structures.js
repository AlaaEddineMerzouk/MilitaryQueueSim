// Priority Queue (File)
export class PriorityQueue {
    constructor() {
      this.items = [];
    }
  
    enqueue(item) {
      this.items.push(item);
      // Sort: lower number = higher priority
      this.items.sort((a, b) => a.priority - b.priority);
    }
  
    dequeue() {
      return this.items.shift();
    }
  
    getAll() {
      return [...this.items];
    }
  
    clear() {
      this.items = [];
    }
  }
  
  // Stack (Pile)
  export class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
    }
  
    pop() {
      return this.items.pop();
    }
  
    getAll() {
      return [...this.items];
    }
  
    clear() {
      this.items = [];
    }
  }
  