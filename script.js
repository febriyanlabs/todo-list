document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("input");
  const addTaskBtn = document.getElementById("add-task");
  const taskList = document.getElementById("task-list");

  const empty = document.querySelector(".empty");
  const toggleEmptyState = () => {
    empty.style.display = taskList.children.length === 0 ?
    'block' : 'none';
  };

  const addTask = (event) => {
    event.preventDefault();
    const taskValue = taskInput.value.trim();
    if(!taskValue) {
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
      <input type="checkbox" class="checkbox">
      <span>${taskValue}</span>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
    toggleEmptyState();
  } 

  addTaskBtn.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        addTask(e);
    }
  })
});
