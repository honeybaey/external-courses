import "./style.css";

import { createUserMenu } from "./components/userMenu.js";
import { DataStorage } from "./components/data.js";
import { createDropdownLists } from "./components/createTasks.js";
import { addSelectedTask } from "./components/manageTasks";
import { disableButton } from "./components/disableButton.js";

const dropdowns = document.querySelectorAll(".dropdown");

createUserMenu();
createDropdownLists();

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", addSelectedTask);
  dropdown.addEventListener("click", disableButton);
});

document.addEventListener("DOMContentLoaded", () => {
  DataStorage.load();
  disableButton();
});
