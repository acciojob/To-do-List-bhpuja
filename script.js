//your code here

// Get references to the input, button, and ordered list
const inputElement = document.getElementById('newTodoInput');
const addButton = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

// Add event listener to the "Add todo" button
addButton.addEventListener('click', function () {
  const todoText = inputElement.value.trim(); // Trim whitespace from input

  // Validate if the input is not empty
  if (todoText === '') {
    alert('Please enter a valid todo item.');
    return; // Exit if input is invalid
  }

  // Create a new list item and add it to the ordered list
  const listItem = document.createElement('li');
  listItem.textContent = todoText;
  todoList.appendChild(listItem);

  // Clear the input field after adding the todo item
  inputElement.value = '';
});

