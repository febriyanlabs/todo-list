document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("input");
  const addTaskBtn = document.getElementById("add-task");
  const taskList = document.getElementById("task-list");

  const empty = document.querySelector(".empty-container");
  const toggleEmptyState = () => {
    empty.style.display = taskList.children.length === 0 ? "block" : "none";
  };

  const addTask = (task, completed = false) => {
    event.preventDefault();
    const taskValue = task || taskInput.value.trim();
    if (!taskValue) {
      return;
    }

    const filterTasks = (filter) => {
      Array.from(taskList.children).forEach((li) => {
        const isCompleted = li.classList.contains("completed");

        if (filter === "All") {

        } else if (filter === "Pending" && !isCompleted) {
          li.style.display = "flex";
        } else if (filter === "Finished" && isCompleted) {
          li.style.display = "flex";
        } else {
          li.style.display = "none";
        }
      });
    };

    // Event listener untuk filter buttons
    document.querySelectorAll(".filter button").forEach((btn) => {
      btn.addEventListener("click", () => {
        filterTasks(btn.id);
        // Visual indicator active button
        document
          .querySelectorAll(".filter button")
          .forEach((b) => (b.style.opacity = "0.6"));
        btn.style.opacity = "1";
      });
    });

    const li = document.createElement("li");
    li.innerHTML = `
      <div class="tasks">
        <input type="checkbox" class="checkbox" ${completed ? "checked" : ""} />
        <span class="taskName">${taskValue}</span>
      </div>
      <div class="task-button">
        <button class="edit-btn"><i class="fa-solid fa-pen"></i></button>
        <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
      </div>
        `;
    const taskName = li.querySelector(".tasks");

    taskName.addEventListener("dblclick", function () {
      const oldTask = li.querySelector("span").textContent;
      taskInput.value = oldTask;
      const newTask = () => {
        taskInput.value = oldTask;
        li.remove();
        taskInput.value = "";
      };
      addTaskBtn.addEventListener("click", () => {
        newTask();
      });
      taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          newTask();
        }
      });
      //taskName.value = taskInput.value;
      //const oldTask = taskName.textContent;
    });

    const checkbox = li.querySelector(".checkbox");
    const editBtn = li.querySelector(".edit-btn");

    if (completed) {
      li.classList.add("completed");
      editBtn.disabled = true;
      editBtn.style.opacity = "0.5";
      editBtn.style.pointerEvents = "none";
    }

    checkbox.addEventListener("change", () => {
      const isChecked = checkbox.checked;
      li.classList.toggle("completed", isChecked);
      editBtn.disabled = isChecked;
      editBtn.style.opacity = isChecked ? "0.5" : "1";
      editBtn.style.pointerEvents = isChecked ? "none" : "auto";
    });

    editBtn.addEventListener("click", () => {
      if (!checkbox.checked) {
        const oldTask = li.querySelector("span").textContent;
        taskInput.value = oldTask;
        const newTask = () => {
          taskInput.value = oldTask;
          li.remove();
          taskInput.value = "";
        };
        addTaskBtn.addEventListener("click", () => {
          newTask();
        });
        taskInput.addEventListener("keypress", (e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            newTask();
          }
        });
      }
    });

    li.querySelector(".delete-btn").addEventListener("click", () => {
      li.remove();
      toggleEmptyState();
    });
    taskList.appendChild(li);
    taskInput.value = "";
    toggleEmptyState();
  };

  addTaskBtn.addEventListener("click", () => addTask());
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTask();
    }
  });
});
