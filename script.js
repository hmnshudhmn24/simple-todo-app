
// Selecting the elements
const addButton = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Function to add a new task
function addTask() {
  if (todoInput.value.trim() === '') {
    alert('Please enter a task!');
    return;
  }

  const li = document.createElement('li');
  li.textContent = todoInput.value;

  // Create a delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    todoList.removeChild(li);
  });

  // Toggle completed task
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  // Clear the input field
  todoInput.value = '';
}

// Add task on button click
addButton.addEventListener('click', addTask);

// Add task on Enter key press
todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});
