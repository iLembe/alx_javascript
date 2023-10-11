const request = require('request');

const url = 'https://jsonplaceholder.typicode.com/todos';

request(url, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const data = JSON.parse(body);
    const completedTasks = {};

    data.forEach((task) => {
      const userId = task.userId;
      if (task.completed) {
        if (completedTasks[userId]) {
          completedTasks[userId]++;
        } else {
          completedTasks[userId] = 1;
        }
      }
    });

    console.log(completedTasks);
  }
});
