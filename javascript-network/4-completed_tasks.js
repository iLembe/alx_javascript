const request = require('request');

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// Make a GET request to the API
request(apiUrl, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const tasks = JSON.parse(body);
    
    // Initialize an empty object to store completed task counts per user
    const completedTasks = {};

    // Process the tasks and count completed tasks for each user
    tasks.forEach((task) => {
      if (task.completed) {
        if (completedTasks[task.userId]) {
          completedTasks[task.userId] += 1;
        } else {
          completedTasks[task.userId] = 1;
        }
      }
    });

    console.log(completedTasks);
  } else {
    console.error('Error: Unable to fetch data from the API');
  }
});
