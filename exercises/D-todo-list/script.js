function todoList(toDos) {
  let content = document.querySelector("#content");
  addToTheList(toDos);
}

const toDos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

function addToTheList(todoList) {
  let list = document.createElement("ul");
  content.appendChild(list);

  todoList.forEach((task) => {
    li = document.createElement("li");
    list.appendChild(li);
    li.innerText = task.todo;
    li.addEventListener("click", (lineThrough) => {
      li.style = "text-decoration:line-through" ;
    });
  });
}
//function lineThrough(param) {
//li.style = "text-decoration:line-through";

todoList(toDos);
