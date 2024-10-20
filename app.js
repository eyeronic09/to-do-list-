
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

function addTask() {
    const taskText = input.value.trim(); 

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

   
    const li = document.createElement("li");
    li.textContent = taskText;

    
    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    // Create delete button for the task
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    
    deleteBtn.addEventListener("click", function() {
        todoList.removeChild(li);
    });

    li.appendChild(deleteBtn);

  
    todoList.appendChild(li);

   
    input.value = "";
}
