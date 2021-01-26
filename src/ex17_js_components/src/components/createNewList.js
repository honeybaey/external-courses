import { removeBacklogButtonHandler, newTaskHandler } from "./createTasks.js";
import { manageTasks, addSelectedTask } from "./manageTasks.js";
import { infoMessage } from "./deleteList.js";

const main = document.querySelector("main");
const createButton = document.getElementById("button-create");

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

const deleteSpaces = (str) => {
  if (str.indexOf(" ") > 0) {
    let res = "";
    res =
      str.slice(0, str.indexOf(" ")) +
      str.slice(str.indexOf(" ") + 1, str.length);
    return res.toLowerCase();
  } else {
    return str.toLowerCase();
  }
};

const createNewList = () => {
  createButton.addEventListener("click", () => {
    const input = document.createElement("input");
    input.classList.add("input-task-name");
    main.prepend(input);
    input.focus();
    infoMessage.remove();

    input.onblur = function (e) {
      const listName = input.value;

      if (!listName) {
        input.remove();
        main.prepend(infoMessage);
      } else {
        if (main.childElementCount > 3) {
          main.style.justifyContent = "space-between";
        }
        if (main.childElementCount > 0) {
          infoMessage.remove();
        }

        const newSection = `<section class="dropdown dropdown-${deleteSpaces(
          listName
        )}">
                      <div class="dropdown__header">
                        <h4 class="dropdown__title">${listName}</h4>
                        <i class="dropdown__header-icon fas fa-ellipsis-h"></i>
                      </div>
                      <ul class="dropdown__list dropdown__list-${deleteSpaces(
                        listName
                      )}"></ul>
                      <button class="dropdown__button-add" id="button-${deleteSpaces(
                        listName
                      )}">
                        <i class="dropdown__button-icon fas fa-plus"></i>
                        Add card
                      </button>
                    </section>`;

        input.remove();

        removeBacklogButtonHandler();

        main.insertAdjacentHTML("afterbegin", newSection);

        dataMock.unshift({ title: `${listName}`, issues: [] });

        const firstList = main.firstChild;

        const setNewTaskHandler = function (e) {
          if (e.target.id === `button-${deleteSpaces(listName)}`) {
            const btn = document.getElementById(
              `button-${deleteSpaces(listName)}`
            );
            const list = document.querySelector(
              `.dropdown__list-${deleteSpaces(listName)}`
            );

            btn.onclick = newTaskHandler(list);
          }
        };

        firstList.addEventListener("click", setNewTaskHandler);

        firstList.nextElementSibling.onclick = function (e) {
          if (e.target.tagName === "BUTTON") {
            const list = document.querySelector(
              `.dropdown__list-${deleteSpaces(listName)}`
            );
            manageTasks(e, e.target, list, 0, 1);
          }
          addSelectedTask(e);
        };
      }
    };
  });
};

export { dataMock, createNewList, main };
