import Queue from './queue';

describe('Queue', () => {
  const queue = new Queue();

  test('should dequeue 1', () => {
    queue.enqueue(1);
    expect(queue.dequeue()).toEqual(1);
  });
});
