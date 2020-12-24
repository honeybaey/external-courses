// user dropdown
const userBlock = document.querySelector(".user");

let isDropdownShow = false;

userBlock.addEventListener("click", () => {
  const userIcon = document.querySelector(".user__icon");

  let fragment = `<div class="user__dropdown">
<ul class="user__dropdown-list">
  <li class="user__dropdown-item">
    <a href="#" class="user__dropdown-link">My account</a>
  </li>
  <li class="user__dropdown-item">
    <a href="#" class="user__dropdown-link">My tasks</a>
  </li>
  <li class="user__dropdown-item">
    <a href="#" class="user__dropdown-link">Log out</a>
  </li>
</ul>
</div>`;

  if (isDropdownShow) {
    const userDropdown = document.querySelector(".user__dropdown");
    isDropdownShow = false;
    userDropdown.remove();
  } else {
    isDropdownShow = true;
    userIcon.insertAdjacentHTML("afterend", fragment);
  }

  userIcon.classList.toggle("fa-angle-down");
  userIcon.classList.toggle("fa-angle-up");
});

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

let tasksIdCounter = 16;

// dropdowns
const dropdowns = document.querySelectorAll(".dropdown");
const dropdownTitles = document.querySelectorAll(".dropdown__title");

const backlogDropdownWrap = document.querySelector(".dropdown-backlog");
const readyDropdownWrap = document.querySelector(".dropdown-ready");
const progressDropdownWrap = document.querySelector(".dropdown-progress");
const finishedDropdownWrap = document.querySelector(".dropdown-finished");

// task-lists
const dropdownList = document.querySelector(".dropdown__list");

const backlogDropdown = document.querySelector(".dropdown__list-backlog");
const readyDropdown = document.querySelector(".dropdown__list-ready");
const progressDropdown = document.querySelector(".dropdown__list-progress");
const finishedDropdown = document.querySelector(".dropdown__list-finished");

// buttons
const backlogButton = document.getElementById("button-backlog");
const readyButton = document.getElementById("button-ready");
const progressButton = document.getElementById("button-progress");
const finishedButton = document.getElementById("button-finished");

// creating task template
const createTask = (dropdown, item) => {
  const li = document.createElement("li");
  li.classList.add("dropdown__item");
  li.setAttribute("contenteditable", "true");
  li.setAttribute("data-task-id", item.id);
  li.textContent = item.name;
  dropdown.insertAdjacentElement("beforeend", li);
};

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
createDropdownLists();

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

  Data.save();
}

function disableButton() {
  const subFunc = (dropdown, button) => {
    if (dropdown.hasChildNodes()) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  };

  subFunc(backlogDropdown, readyButton);
  subFunc(readyDropdown, progressButton);
  subFunc(progressDropdown, finishedButton);
}

// creating layout from LocalStorage
const createLayoutFromStorage = (dropdown, index) => {
  const object = JSON.parse(localStorage.getItem("tasksData"));

  dropdown.textContent = "";

  object.columns.items[index].tasks.forEach((item) => {
    createTask(dropdown, item);
  });
};

// saving data on LocalStorage
const Data = {
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

    Data.save();
  };
});

// listeners
readyDropdownWrap.addEventListener("click", (e) => {
  /* if (e.target === readyButton) {
    const mountPoint = document.createElement("div");
    mountPoint.classList.add("tasks-container");
    const backlogDropdownCopy = backlogDropdown.cloneNode(true);
    backlogDropdownCopy.classList.add("extralist");
    mountPoint.append(backlogDropdownCopy);
    readyButton.insertAdjacentElement("beforebegin", mountPoint);
  }

  dropdownTitles.forEach((title) => {
    if (
      e.target.closest(".extralist") &&
      title.textContent.toLowerCase() === dataMock[0].title
    ) {
      let index;
      index = dataMock[0].issues.findIndex(
        (item) => item.id === e.target.getAttribute("data-task-id")
      );
      const arrCopy = dataMock[0].issues.slice(0);

      dataMock[0].issues.splice(index, 1);

      dataMock[1].issues.push(arrCopy[index]);

      backlogDropdown.innerHTML = "";
      dataMock[0].issues.forEach((item) => {
        const li = document.createElement("li");
        li.classList.add("dropdown__item");
        li.setAttribute("contenteditable", "true");
        li.setAttribute("data-task-id", item.id);
        li.textContent = item.name;

        backlogDropdown.append(li);
      });
    }
  }); */

  manageTasks(e, readyButton, backlogDropdown, 0, 1);
});

progressDropdownWrap.addEventListener("click", (e) => {
  manageTasks(e, progressButton, readyDropdown, 1, 2);
});

finishedDropdownWrap.addEventListener("click", (e) => {
  manageTasks(e, finishedButton, progressDropdown, 2, 3);
});

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", addSelectedTask);
  dropdown.addEventListener("click", disableButton);
});

document.addEventListener("DOMContentLoaded", () => {
  Data.load();
  disableButton();
});
