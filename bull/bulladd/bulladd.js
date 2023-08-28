const Queue = require('bull');

const queue = new Queue('myQueue', {
  redis: {
    host: '127.0.0.1',
    port: 6379,
  },
});

async function addTaskToQueue(data) {
  await queue.add(data);
  console.log('Task added to the queue:', data);
}

const duration = 1000; // 1 minute
const startTime = Date.now();

let loopNumber = 0;

async function addTasks() {
  while (Date.now() - startTime < duration) {
    try {
      await addTaskToQueue({ message: `sushmitha${loopNumber}` });
    } catch (err) {
      console.error('Error adding task to queue:', err);
    }
    loopNumber++;
  }
}

addTasks();
