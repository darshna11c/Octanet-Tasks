document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const newTask = taskInput.value.trim();

    if (newTask) {
        const li = document.createElement('li');
        li.innerHTML = `<input type="checkbox"> ${newTask}`;
        document.getElementById('todo-list').appendChild(li);
        taskInput.value = ''; // Clear input field
    } else {
        alert("Please enter a task!");
    }
});
