import Queue from './Queue';

describe.skip('Queue', () => {
  const queue = new Queue();

  test('enqueu 1, dequeue', () => {
    queue.enqueue(1);
    expect(queue.dequeue()).toEqual(1);
  });
});
