/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */


//
// Variables
//

// Constants
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


//
let appContainer = document.getElementById(appID);


// Functions
formSubmit.addEventListener("submit", add_todo);

function inititialise() {
  
  if (!appContainer) {
    console.error("Error: Could not find app contianer");
    return;
  }

  const h2 = document.createElement("h2");
  h1.innerText = headingText;
  appContainer.appendChild(h2);
  

  // Init complete
  console.log("Successfully Addedd");

}

function add_todo(event){
  //event.preventDefault();
  if(inputBox.value === ""){
    alert("You must write something");
  }
  else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    li.setAttribute("id", "todo-box");
    li.className = "unchecked";
    listContainer.appendChild(li);


    let this_button = document.createElement("button");
    this_button.innerHTML = "\u00d7";
    li.appendChild(this_button);
  }
  
  inputBox.value = "";
  
}

listContainer.addEventListener("click", removeTodo, false);

function removeTodo(event){

  if (event.target.tagName === "LI"){
    event.target.classList.toggle("checked");
  }

 
  else if (event.target.tagName === "SPAN"){

    let exitingItems = event.target.parentElement;
    event.target.parentElement.remove();
   
  }
  
}

inputBox.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    add_todo();
  }
});

const formSubmit = document.querySelector(".row");

btn_clear.addEventListener("click", clear_all, false);

function clear_all(){
  listContainer.innerHTML = "";
  
}

function countTodo(){
  const toTalTodo = listContainer.children.length;
  const checkedTodos = document.querySelectorAll(".checked").length;

  const todoCount = document.getElementById("todo-count");
  const doneCount = document.getElementById("done-count")

  todoCount.innerHTML = toTalTodo;
  doneCount.innerHTML = checkedTodos;
}

countTodo();


function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
  countTodo();
}

showSaved();
