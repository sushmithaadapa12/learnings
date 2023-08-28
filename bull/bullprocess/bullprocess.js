const Queue = require('bull');
const fs = require('fs');

// Create a writable stream to the log file
const logStream = fs.createWriteStream('job.log', { flags: 'a' });


const queue = new Queue('myQueue', {
  redis: {
    host: '127.0.0.1',
    port: 6379,
  },
});

queue.process(async (job) => {
  const jobData = job.data;
  console.log('Processing task:', jobData);
  
  logStream.write(`Processing task: ${JSON.stringify(jobData)}\n`);

  const result = { status: 'completed' };
  logStream.write(`Task completed: ${JSON.stringify(result)}\n`);

  // Return a result if needed
  return result;
});

queue.on('completed', (job, result) => {
  // Log the completed task to the log file
  logStream.write(`Task completed: ${JSON.stringify(result)}\n`);
});

// Event handler for failed tasks
queue.on('failed', (job, err) => {
  console.error('Task failed:', err);

  // Log the failed task to the log file
  logStream.write(`Task failed: ${JSON.stringify(err)}\n`);
});
