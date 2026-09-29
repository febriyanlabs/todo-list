document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("input");
  const addTaskBtn = document.getElementById("add-task");
  const taskList = document.getElementById("task-list");

  const empty = document.querySelector(".empty");
  const toggleEmptyState = () => {
    empty.style.display = taskList.children.length === 0 ? "block" : "none";
  };

  const addTask = (event) => {
    event.preventDefault();
    const taskValue = taskInput.value.trim();
    if (!taskValue) {
      return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
      <div class="tasks">
        <input type="checkbox" class="checkbox">
        <span>${taskValue}</span>
      </div>
      <div class="task-button">
        <button class="edit-btn"><i class="fa-solid fa-pen"></i></button>
        <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
      </div>
    `;

    li.querySelector(".delete-btn").addEventListener
    ("click", () => {
      li.remove();
      toggleEmptyState();
    } )
    taskList.appendChild(li);
    taskInput.value = "";
    toggleEmptyState();
  };

  addTaskBtn.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTask(e);
    }
  });
});
