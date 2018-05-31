import Queue from './queue';

describe('Queue', () => {
  const queue = new Queue();

  test('should dequeue 1', () => {
    queue.enqueue(1);
    expect(queue.dequeue()).toEqual(1);
  });

  /*
  test('should dequeue 1 and 2', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);
  });

  test('should dequeue 1 then 2 then 3', () => {
    queue.enqueue(1);
    expect(queue.dequeue()).toEqual(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toEqual(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toEqual(3);
  });

  test('should dequeue 1, 2 and 3 then 4 and 5', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.dequeue()).toEqual(3);
    queue.enqueue(4);
    queue.enqueue(5);
    expect(queue.dequeue()).toEqual(4);
    expect(queue.dequeue()).toEqual(5);
  });
  */
});
