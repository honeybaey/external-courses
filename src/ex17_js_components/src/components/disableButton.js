import {
  backlogDropdown,
  readyDropdown,
  progressDropdown,
} from "./createTasks.js";

const readyButton = document.getElementById("button-ready");
const progressButton = document.getElementById("button-progress");
const finishedButton = document.getElementById("button-finished");

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

export { disableButton };
