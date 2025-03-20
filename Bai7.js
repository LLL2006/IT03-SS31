let todoList = [
    { id: 1, task: 'Hit the gym', completed: false },
    { id: 2, task: 'Pay bills', completed: true },
    { id: 3, task: 'Meet George', completed: false },
    { id: 4, task: 'Buy eggs', completed: false },
    { id: 5, task: 'Read a book', completed: false },
    { id: 6, task: 'Organize office', completed: false }
];

let ul = document.getElementById("myUL");

function renderList() {
    ul.innerHTML = ""; 
    todoList.forEach((item) => {
        let li = document.createElement("li");
        li.textContent = item.task;

        if (item.completed) {
            li.classList.add("checked");
        }

        li.addEventListener("click", () => {
            item.completed = !item.completed;
            renderList(); 
        });

        let closeBtn = document.createElement("span");
        closeBtn.textContent = "×";
        closeBtn.className = "close";
        

        li.appendChild(closeBtn);
        ul.appendChild(li);
    });
}

function addTask() {
    let input = document.getElementById("myInput");
    let newTask = input.value.trim();
    if (newTask) {
        todoList.push({
            id: todoList.length + 1,
            task: newTask,
            completed: false
        });
        input.value = "";
        renderList();
    } else {
        alert("Vui lòng nhập nội dung công việc!");
    }
}

renderList();