let taskName = document.querySelector(".task-name");
let taskDate = document.querySelector(".tast-date");
let taskDetails = document.querySelector(".task-details");
let taskSubmit = document.querySelector(".task-submit");
let tasksDiv = document.querySelector(".tasks");
let tasks = [];

taskSubmit.addEventListener("click", () => {
  let taskNameValue = taskName.value;
  let taskDateValue = taskDate.value;
  let taskDetailsValue = taskDetails.value;
  if (
    taskNameValue === "" ||
    taskNameValue === " " ||
    taskDateValue === "" ||
    taskDateValue === " "
  ) {
    alert("The Fields are required");
  } else {
    createTask(taskNameValue, taskDateValue, taskDetailsValue);
  }
});

function createTask(taskName, taskDate, taskDetails) {
  let task = {
    id: Date.now(),
    name: taskName,
    date: taskDate,
    details: taskDetails,
  };
  tasks.push(task);
  localStorage.setItem("toDo", JSON.stringify(tasks));
  tasksDiv.innerHTML = "";
  read();
}
function read() {
  let value = JSON.parse(localStorage.getItem("toDo"));
  value.forEach((el) => {
    createTaskContent(el);
  });
}
read();
function createTaskContent(ob) {
  let createMainDiv = document.createElement("div");
  let titleDate = document.createElement("div");
  let taskTitle = document.createElement("h3");
  taskTitle.textContent = ob.name;
  let taskDate = document.createElement("h3");
  taskDate.textContent = ob.date;
  let remove = document.createElement("h3");
  remove.textContent = "x";
  remove.addEventListener("click", () => {
    deleteTask(ob.id);
  });
  let line = document.createElement("hr");
  let taskDetails = document.createElement("h3");
  taskDetails.textContent = ob.details;
  createMainDiv.append(titleDate);
  titleDate.append(taskTitle);
  titleDate.append(taskDate);
  createMainDiv.append(remove);
  createMainDiv.append(line);
  createMainDiv.append(taskDetails);
  tasksDiv.append(createMainDiv);
  //   Make Style
  createMainDiv.style.cssText =
    "width: 100% ; background-color: #f6fafb; display:flex;flex-wrap:wrap; padding: 30px; justify-content: space-between; flex-wrap: wrap; margin-bottom:20px";
  titleDate.style.cssText = "width: 95% ; display:flex;align-items:flex-start";
  remove.style.cssText = "width: 5%; text-align:end; color:red;";
  taskTitle.style.cssText = "margin-right: 20px;";
  line.style.cssText = "width:100%; margin-top:10px";
  taskDetails.style.cssText = "width: 100%; margin-top:25px";
}
const deleteTask = (id) => {
  console.log("OK");
  tasks = tasks.filter((task) => task.id !== id);
  read();
};
