class Stack {
  _ = [];

  push = x => {
    this._.push(x);
  };

  pop = () => this._.pop();

  isEmpty = () => this._.length === 0;
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
