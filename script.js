// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");

        // Create new task element
        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item");

        // Task text
        const taskTextElement = document.createElement("span");
        taskTextElement.textContent = taskText;

        // Mark as complete button
        const completeButton = document.createElement("button");
        completeButton.classList.add("complete-btn");
        completeButton.textContent = "Complete";
        completeButton.onclick = () => completeTask(taskItem);

        // Delete button
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-btn");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => deleteTask(taskItem);

        // Append elements
        taskItem.appendChild(taskTextElement);
        taskItem.appendChild(completeButton);
        taskItem.appendChild(deleteButton);

        // Add task to the list
        taskList.appendChild(taskItem);

        // Clear input field
        taskInput.value = "";
    }
}

// Function to mark a task as complete
function completeTask(taskItem) {
    taskItem.classList.toggle("completed");
}

// Function to delete a task
function deleteTask(taskItem) {
    taskItem.remove();
}
