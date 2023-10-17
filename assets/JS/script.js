console.log("conectado el JS")
const tasks = [];
let completedTasks = 0;

function addTask() {
    const taskInput = document.getElementById('task');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = '';
        updateTaskList();
        updateTotalTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    updateTaskList();
    updateTotalTasks();
}

function toggleTaskStatus(index) {
    tasks[index].completed = !tasks[index].completed;
    if (tasks[index].completed) {
        completedTasks++;
    } else {
        completedTasks--;
    }
    updateTaskList();
    updateTotalTasks();
}

function updateTaskList() {
    const taskList = document.getElementById('tasks');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Borrar';
        deleteButton.onclick = () => deleteTask(index);
        listItem.innerText = task.text;
        if (task.completed) {
            listItem.classList.add('completed');
        }
        listItem.appendChild(deleteButton);
        const toggleButton = document.createElement('button');
        toggleButton.innerText = 'Completada';
        toggleButton.onclick = () => toggleTaskStatus(index);
        listItem.appendChild(toggleButton);
        taskList.appendChild(listItem);
    });
}

function updateTotalTasks() {
    const totalTasks = document.getElementById('total-tasks');
    totalTasks.innerText = tasks.length;
}

updateTaskList();
updateTotalTasks();