import Queue from './queue';

describe('Queue', () => {
  const queue = new Queue();

  test('enqueu 1, dequeue', () => {
    queue.enqueue(1);
    expect(queue.dequeue()).toEqual(1);
  });

  test('enqueu 2, dequeue', () => {
    queue.enqueue(2);
    expect(queue.dequeue()).toEqual(2);
  });

  test('enqueu 1, dequeue, enqueue 2, dequeue, euqueue 3, dequeue', () => {
    queue.enqueue(1);
    expect(queue.dequeue()).toEqual(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toEqual(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toEqual(3);
  });

  test('enqueu 1, enqueue 2, dequeue, dequeue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);
  });

  test('enqueu 1, enqueue 2, enqueue 3, dequeue, dequeue, dequeue, enqueue 4, enqueue 5, dequeue, dequeue"', () => {
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

  test('enqueu 1, enqueue 2, enqueue 3, dequeue, enqueue 4, enqueue 5, dequeue, dequeue, dequeue, dequeue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toEqual(1);

    queue.enqueue(4);
    queue.enqueue(5);

    expect(queue.dequeue()).toEqual(2);
    expect(queue.dequeue()).toEqual(3);
    expect(queue.dequeue()).toEqual(4);
    expect(queue.dequeue()).toEqual(5);
  });

  test('enqueue undefined, dequeue', () => {
    queue.enqueue(undefined);

    expect(queue.dequeue()).toEqual(undefined);
  });

  test('dequeue', () => {
    expect(() => {queue.dequeue()}).toThrow();
  });
});
