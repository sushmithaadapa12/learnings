const Queue = require('bull');

// Create high priority queue
const highPriorityQueue = new Queue('highPriority', { redis: { port: 6379, host: 'localhost' } });

// Create medium priority queue
const mediumPriorityQueue = new Queue('mediumPriority', { redis: { port: 6379, host: 'localhost' } });

// Create low priority queue
const lowPriorityQueue = new Queue('lowPriority', { redis: { port: 6379, host: 'localhost' } });

// Add tasks to queues with priorities
highPriorityQueue.add({ data: 'High Priority Task' }, { priority: 1 });
mediumPriorityQueue.add({ data: 'Medium Priority Task' }, { priority: 2 });
lowPriorityQueue.add({ data: 'Low Priority Task' }, { priority: 3 });

// Process tasks from the queues
highPriorityQueue.process((job) => {
  console.log(`Processing high priority job: ${job.data}`);
  // Process the job here
});

mediumPriorityQueue.process((job) => {
  console.log(`Processing medium priority job: ${job.data}`);
  // Process the job here
});

lowPriorityQueue.process((job) => {
  console.log(`Processing low priority job: ${job.data}`);
  // Process the job here
});
