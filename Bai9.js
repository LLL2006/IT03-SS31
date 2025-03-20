document.addEventListener("DOMContentLoaded", function () {
    let todoList = [
        { id: 1, task: 'Hit the gym', completed: false },
        { id: 2, task: 'Pay bills', completed: true },
        { id: 3, task: 'Meet George', completed: false },
        { id: 4, task: 'Buy eggs', completed: false },
        { id: 5, task: 'Read a book', completed: false },
        { id: 6, task: 'Organize office', completed: false }
    ];

    let ul = document.getElementById("myUL");
    let input = document.getElementById("myInput");

    function renderList() {
        ul.innerHTML = "";
        todoList.forEach((item, index) => {
            let li = document.createElement("li");
            li.textContent = item.task;

            if (item.completed) {
                li.classList.add("checked");
            }

            li.addEventListener("click", () => {
                todoList[index].completed = !todoList[index].completed;
                renderList();
            });

            let closeBtn = document.createElement("span");
            closeBtn.textContent = "×";
            closeBtn.className = "close";
            closeBtn.onclick = function () {
                todoList.splice(index, 1);
                renderList();
            };

            li.appendChild(closeBtn);
            ul.appendChild(li);
        });
    }

    function addTask() {
        let newTask = input.value.trim();
        if (newTask === "") {
            alert("Vui lòng nhập nội dung!");
            return;
        }

        todoList.push({ id: todoList.length + 1, task: newTask, completed: false });
        input.value = "";
        renderList();
    }

    document.querySelector(".addBtn").addEventListener("click", addTask);

    renderList();
});
