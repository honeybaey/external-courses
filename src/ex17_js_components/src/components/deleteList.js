import { main, dataMock } from "./createNewList.js";
import { tasksCount } from "./tasksCount.js";

export const infoMessage = document.createElement("div");

export const deleteList = () => {
  let isDropdownShow = false;
  const fragment = `
        <div class="more-btn__dropdown">
          <span class="more-btn__dropdown-head">Actions</span>
          <ul class="more-btn__dropdown-list">
            <li class="more-btn__dropdown-item">
              <a href="#" class="more-btn__dropdown-link">Properties</a>
            </li>
            <li class="more-btn__dropdown-item" id="btn-delete">
              <a href="#" class="more-btn__dropdown-link">Delete</a>
            </li>
          </ul>
        </div>`;

  document.addEventListener("click", (e) => {
    if (e.target.className === "dropdown__header-icon fas fa-ellipsis-h") {
      if (isDropdownShow) {
        const moreDropdown = document.querySelector(".more-btn__dropdown");
        isDropdownShow = false;
        moreDropdown.remove();
      } else {
        isDropdownShow = true;
        e.target.insertAdjacentHTML("afterend", fragment);

        const deleteBtn = document.getElementById("btn-delete");
        deleteBtn.onclick = function () {
          isDropdownShow = false;

          const dropdownHeader = e.target.offsetParent.firstElementChild;
          const selectedDropdownName = dropdownHeader.firstElementChild.textContent.toLowerCase();
          const index = dataMock.findIndex(
            (item) => item.title === selectedDropdownName
          );
          dataMock.splice(index, 1);

          e.target.offsetParent.remove();

          if (main.childElementCount < 3) {
            main.style.justifyContent = "space-around";
          }

          if (main.childElementCount === 0) {
            infoMessage.classList.add("info-message");
            infoMessage.textContent =
              'There are no active lists. Create a new list using the "Create new list" button';
            main.prepend(infoMessage);
          }

          tasksCount();
        };
      }
    }
  });
};
