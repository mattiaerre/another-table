/* eslint-disable max-classes-per-file */
class Stack {
  array1 = [];

  push = (x) => {
    this.array1.push(x);
  };

  pop = () => this.array1.pop();

  isEmpty = () => this.array1.length === 0;
}

class Queue {
  stack1 = new Stack();

  stack2 = new Stack();

  enqueue = (x) => {
    this.stack1.push(x);
  };

  dequeue = () => {};

  isEmpty = () => this.stack1.isEmpty() && this.stack2.isEmpty();
}

export default Queue;
