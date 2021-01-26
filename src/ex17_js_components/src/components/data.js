import {
  createTask,
  backlogDropdown,
  readyDropdown,
  progressDropdown,
  finishedDropdown,
} from "./createTasks.js";

// saving data on LocalStorage
const DataStorage = {
  save() {
    const dataParams = {
      columns: {
        items: [],
      },
      tasks: {
        items: [],
      },
    };

    document.querySelectorAll(".dropdown").forEach((dropdownItem) => {
      const column = {
        title: dropdownItem.childNodes[1].innerText,
        tasks: [],
      };

      dropdownItem.querySelectorAll(".dropdown__item").forEach((taskItem) => {
        const task = {
          id: taskItem.getAttribute("data-task-id"),
          name: taskItem.textContent,
        };
        column.tasks.push(task);
      });

      dataParams.columns.items.push(column);
    });

    document.querySelectorAll(".dropdown__item").forEach((taskItem) => {
      const task = {
        id: parseInt(taskItem.getAttribute("data-task-id")),
        name: taskItem.textContent.trim(),
      };

      dataParams.tasks.items.push(task);
    });

    const json = JSON.stringify(dataParams);

    localStorage.setItem("tasksData", json);

    return dataParams;
  },

  load() {
    if (!localStorage.getItem("tasksData")) {
      return;
    }

    createLayoutFromStorage(backlogDropdown, 0);
    createLayoutFromStorage(readyDropdown, 1);
    createLayoutFromStorage(progressDropdown, 2);
    createLayoutFromStorage(finishedDropdown, 3);
  },
};

// creating layout from LocalStorage
const createLayoutFromStorage = (dropdown, index) => {
  const object = JSON.parse(localStorage.getItem("tasksData"));

  dropdown.textContent = "";

  object.columns.items[index].tasks.forEach((item) => {
    createTask(dropdown, item);
  });
};

export { DataStorage };
