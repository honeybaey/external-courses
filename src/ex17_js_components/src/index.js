import "./style.css";

import { createUserMenu } from "./components/userMenu.js";
import { DataStorage } from "./components/data.js";
import { createDropdownLists } from "./components/createTasks.js";
import { addSelectedTask } from "./components/manageTasks.js";
import { disableButton } from "./components/disableButton.js";
import { createNewList, main } from "./components/createNewList.js";
import { tasksCount } from "./components/tasksCount.js";
import { deleteList } from "./components/deleteList.js";

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", addSelectedTask);
  dropdown.addEventListener("click", disableButton);
});

createDropdownLists();

document.addEventListener("DOMContentLoaded", () => {
  DataStorage.load();
  disableButton();

  createUserMenu();
  createNewList();

  tasksCount(0);
  tasksCount(3);
});

deleteList();