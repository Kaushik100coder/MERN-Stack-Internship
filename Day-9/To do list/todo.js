const addBtn = document.querySelector(".add-btn");
const input = document.querySelector(".task-input");
const todoList = document.querySelector(".todo-list");

addBtn.addEventListener("click", addTask);
input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const taskText = input.value.trim();

    if (taskText === "") {
        showError("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.addEventListener("click", () => {
        todoList.removeChild(li);
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);
    input.value = "";
}

function showError(message) {
    const error = document.createElement("div");
    error.textContent = message;
    error.style.position = "fixed";
    error.style.top = "20px";
    error.style.left = "50%";
    error.style.transform = "translateX(-50%)";
    error.style.backgroundColor = "#dc3545";
    error.style.color = "#fff";
    error.style.padding = "10px 20px";
    error.style.borderRadius = "8px";
    error.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
    error.style.zIndex = "1000";
    document.body.appendChild(error);

    setTimeout(() => {
        error.remove();
    }, 3000);
}