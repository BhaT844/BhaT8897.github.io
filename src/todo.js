const toDoForm  = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList  = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

const saveToDos = () => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

const deleteToDo = event => {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(item => item.id != li.id);
    saveToDos();
};

const paintToDo = newTodo => {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const strong = document.createElement("strong");
    strong.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(strong);
    li.appendChild(button);
    toDoList.appendChild(li);
};

const handleToDoSubmit = event => {
    event.preventDefault();
    const newTodoObj = {
        text: toDoInput.value,
        id: Date.now()
    }
    toDoInput.value = "";
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
};

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
