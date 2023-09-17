let taski = []
const tasks = document.querySelector(".tasks")
const TextAdd = document.querySelector(".text-adding")
const ButAdd = document.querySelector(".but-adding")
const addwin = document.querySelector(".add-win")
const TextTask = document.querySelector(".text-task")
const tsk = document.querySelector (".task")
const red = document.querySelector(".redact")

function deleteTask(i) {
    taski.splice(i, 1)
    render()
}

ButAdd.addEventListener("click", () => {
    if (TextAdd.value != '') {
        taski.push(TextAdd.value)
        render()
        TextAdd.value = ""
    }
})

function render(params) {
    tasks.innerHTML = ""
    taski.forEach((task, i) => {
        tasks.insertAdjacentHTML('beforeend', 
    `<div class="task">
        <div class="text-task">${task}</div>
        <button onclick="edit(${i})" class="redact"><img class="redact-pen" src="ssssssss.svg"></button>
        <button onclick="deleteTask(${i})" class="btn-trash"><img class="trash" src="trash.svg" alt=""></button>
    </div>`)
    })
}

render()


function edit(i) {
    const task = taski[i]
    const newTask = prompt("изменение задачи", task)
    taski[i] = newTask
    render()
}