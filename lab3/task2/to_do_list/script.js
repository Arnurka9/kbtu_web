// DOM elements
const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("todoList");
const emptyState = document.getElementById("emptyState");
const taskCount = document.getElementById("taskCount");

function updateUI() {
    const count = list.children.length;
    taskCount.textContent = String(count);
    emptyState.style.display = count === 0 ? "block" : "none";
}

function createTodoItem(text) {
    // <li class="item">
    const li = document.createElement("li");
    li.className = "item";

    // checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // text span
    const span = document.createElement("span");
    span.className = "text";
    span.textContent = text;

    // label wraps checkbox + text (clickable)
    const label = document.createElement("label");
    label.appendChild(checkbox);
    label.appendChild(span);

    // delete button
    const delBtn = document.createElement("button");
    delBtn.className = "delete-btn";
    delBtn.type = "button";
    delBtn.textContent = "Delete";

    // events
    checkbox.addEventListener("change", () => {
    // dynamic styling via class
    if (checkbox.checked) li.classList.add("done");
    else li.classList.remove("done");
    });

    delBtn.addEventListener("click", () => {
    // removeChild демонстрация
    list.removeChild(li);
    updateUI();
    });

    // assemble
    li.appendChild(label);
    li.appendChild(delBtn);

    return li;
}

function addTask() {
    const text = input.value.trim();
    if (!text) return;

    const item = createTodoItem(text);
    list.appendChild(item); // appendChild демонстрация
    input.value = "";
    input.focus();

    updateUI();
}

// add on button click
addBtn.addEventListener("click", addTask);

// add on Enter key
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTask();
});

// initial UI
updateUI();