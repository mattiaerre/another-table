class Stack {
  array1 = [];

  push = x => {
    this.array1.push(x);
  };

  pop = () => this.array1.pop();

  isEmpty = () => this.array1.length === 0;
}

class Queue {
  stack1 = new Stack();
  stack2 = new Stack();

  enqueue = x => {
    this.stack1.push(x);
  };

  dequeue = () => {
    /*
    if (this.stack2.isEmpty()) {
      while (!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
    */
  };

  isEmpty = () => this.stack1.isEmpty() && this.stack2.isEmpty();
}

export default Queue;
