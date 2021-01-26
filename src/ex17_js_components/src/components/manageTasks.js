import { DataStorage } from "./data.js";
import { dataMock } from "./createNewList.js";
import {
  backlogDropdown,
  readyDropdown,
  progressDropdown,
} from "./createTasks.js";
import { tasksCount } from "./tasksCount.js";
import { disableButton } from "./disableButton.js";

const readyDropdownWrap = document.querySelector(".dropdown-ready");
const progressDropdownWrap = document.querySelector(".dropdown-progress");
const finishedDropdownWrap = document.querySelector(".dropdown-finished");

const dropdownTitles = document.querySelectorAll(".dropdown__title");

const readyButton = document.getElementById("button-ready");
const progressButton = document.getElementById("button-progress");
const finishedButton = document.getElementById("button-finished");

// managing tasks in list
const manageTasks = (e, button, dropdown, initialIndex, receivedIndex) => {
  if (e.target === button) {
    const mountPoint = document.createElement("div");
    mountPoint.classList.add("tasks-container");
    const dropdownCopy = dropdown.cloneNode(true);
    dropdownCopy.classList.add("extralist");
    mountPoint.append(dropdownCopy);
    button.insertAdjacentElement("beforebegin", mountPoint);
  }

  dropdownTitles.forEach((title) => {
    if (
      e.target.closest(".extralist") &&
      title.textContent.toLowerCase() === dataMock[initialIndex].title
    ) {
      let index;
      index = dataMock[initialIndex].issues.findIndex(
        (item) => item.id === e.target.getAttribute("data-task-id")
      );

      const arrCopy = dataMock[initialIndex].issues.slice(0);

      dataMock[initialIndex].issues.splice(index, 1);

      dataMock[receivedIndex].issues.push(arrCopy[index]);

      dropdown.innerHTML = "";
      dataMock[initialIndex].issues.forEach((item) => {
        const li = document.createElement("li");
        li.classList.add("dropdown__item");
        li.setAttribute("contenteditable", "true");
        li.setAttribute("data-task-id", item.id);
        li.textContent = item.name;

        dropdown.append(li);
      });
    }
  });

  disableButton();
};

// adding selected task from the dropdown list
function addSelectedTask(e) {
  const tasksContainer = document.querySelector(".tasks-container");
  const extralist = document.querySelector(".extralist");

  let hasClick = false;

  if (
    !(e.target.className === "dropdown__item" && e.target.closest(".extralist"))
  ) {
    return;
  } else {
    tasksContainer.previousElementSibling.append(e.target);
    hasClick = true;
  }

  if (!extralist.hasChildNodes() || hasClick) {
    tasksContainer.remove();
  }

  // DataStorage.save();
}

readyDropdownWrap.addEventListener("click", (e) => {
  manageTasks(e, readyButton, backlogDropdown, 0, 1);
  tasksCount(0)
});

progressDropdownWrap.addEventListener("click", (e) => {
  manageTasks(e, progressButton, readyDropdown, 1, 2);
});

finishedDropdownWrap.addEventListener("click", (e) => {
  manageTasks(e, finishedButton, progressDropdown, 2, 3);
  tasksCount(3);
});

export { addSelectedTask, manageTasks };
