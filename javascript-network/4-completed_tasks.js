const request = require('request');

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// Make a GET request to the API URL
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode === 200) {
    const todos = JSON.parse(body);

    // Create an object to store the count of completed tasks for each user
    const completedTasks = {};

    // Loop through the todos to count completed tasks
    todos.forEach((todo) => {
      if (todo.completed) {
        if (completedTasks[todo.userId]) {
          completedTasks[todo.userId]++;
        } else {
          completedTasks[todo.userId] = 1;
        }
      }
    });

    // Print the count of completed tasks for each user
    for (const userId in completedTasks) {
      console.log(`User ID ${userId}: ${completedTasks[userId]} completed tasks`);
    }
  } else {
    console.error('Failed to fetch data. Status code:', response.statusCode);
  }
});
