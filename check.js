// Retrieve the daily tasks from the API
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => {
    const todoList = document.getElementById('todo-list');

    // Create a list item for each task
    data.forEach(task => {
      const listItem = document.createElement('li');

      // Create a checkbox for the task
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.completed;
      checkbox.addEventListener('change', handleCheckboxChange);

      // Create a label for the task
      const label = document.createElement('label');
      label.textContent = task.title;

      listItem.appendChild(checkbox);
      listItem.appendChild(label);
      todoList.appendChild(listItem);
    });
  });

// Handle the validation of completed tasks
function handleCheckboxChange() {
  const completedTasks = document.querySelectorAll('input[type="checkbox"]:checked');

  // Use the concept of Promise() for the validation of 5 Completed TodoLists
  new Promise((resolve, reject) => {
    if (completedTasks.length >= 95) {
      resolve(completedTasks.length);
    } else {
      reject();
    }
  })
  .then(numCompletedTasks => {
    alert(`Congrats. Five Tasks have been Successfully Completed`);
  })
  .catch(() => {});
}
