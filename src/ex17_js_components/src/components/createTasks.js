import { dataMock, DataStorage, tasksIdCounter } from "./data.js";

const dropdownList = document.querySelector(".dropdown__list"); // task-lists

const backlogDropdown = document.querySelector(".dropdown__list-backlog");
const readyDropdown = document.querySelector(".dropdown__list-ready");
const progressDropdown = document.querySelector(".dropdown__list-progress");
const finishedDropdown = document.querySelector(".dropdown__list-finished");

const backlogButton = document.getElementById("button-backlog");

// task template
const createTask = (dropdown, item) => {
  const li = document.createElement("li");
  li.classList.add("dropdown__item");
  li.setAttribute("contenteditable", "true");
  li.setAttribute("data-task-id", item.id);
  li.textContent = item.name;
  dropdown.insertAdjacentElement("beforeend", li);
};

// creating a new task
backlogButton.addEventListener("click", (e) => {
  const newTask = document.createElement("li");
  newTask.classList.add("dropdown__item");
  newTask.setAttribute("contenteditable", "true");
  newTask.setAttribute("data-task-id", tasksIdCounter);

  dropdownList.append(newTask);
  newTask.focus();

  newTask.onblur = function (e) {
    let index;

    index = dataMock[0].issues.findIndex((item) => {
      if (
        e.target.tagName === "LI" &&
        e.target.getAttribute("data-task-id") == item.id
      ) {
        return true;
      }
    });

    if (index >= 0) {
      dataMock[0].issues[index].name = newTask.textContent;
    } else {
      dataMock[0].issues.push({
        id: `${tasksIdCounter}`,
        name: newTask.textContent,
      });
      tasksIdCounter++;
    }

    DataStorage.save();
  };
});

// creating task list
const createTaskList = (dropdown, index) => {
  dataMock[index].issues.forEach((item) => {
    createTask(dropdown, item);
  });
};

// creating default layout
const createDropdownLists = () => {
  createTaskList(backlogDropdown, 0);
  createTaskList(readyDropdown, 1);
  createTaskList(progressDropdown, 2);
  createTaskList(finishedDropdown, 3);
};

export {
  createTask,
  createDropdownLists,
  backlogDropdown,
  readyDropdown,
  progressDropdown,
  finishedDropdown,
};
