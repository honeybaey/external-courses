import {
  createTask,
  backlogDropdown,
  readyDropdown,
  progressDropdown,
  finishedDropdown,
} from "./createTasks.js";

// tasks data
const dataMock = [
  {
    title: "backlog",
    issues: [
      {
        id: "1",
        name: "Login page – performance issues",
      },
      {
        id: "2",
        name: "Sprint bugfix",
      },
    ],
  },
  {
    title: "ready",
    issues: [
      {
        id: "3",
        name: "Shop page – performance issues",
      },
      {
        id: "4",
        name: "Checkout bugfix",
      },
      {
        id: "5",
        name: "Shop bug1",
      },
      {
        id: "6",
        name: "Shop bug2",
      },
      {
        id: "7",
        name: "Shop bug3",
      },
      {
        id: "8",
        name: "Shop bug4",
      },
      {
        id: "9",
        name: "Shop bug5",
      },
      {
        id: "10",
        name: "Shop bug6",
      },
      {
        id: "11",
        name: "Shop page – performance issues",
      },
    ],
  },
  {
    title: "in progress",
    issues: [
      {
        id: "12",
        name: "User page – performance issues",
      },
      {
        id: "13",
        name: "Auth bugfix",
      },
    ],
  },
  {
    title: "finished",
    issues: [
      {
        id: "14",
        name: "Main page – performance issues",
      },
      {
        id: "15",
        name: "Main page bugfix",
      },
    ],
  },
];

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

let tasksIdCounter = 16; // next task ID

export { dataMock, DataStorage, tasksIdCounter };
