import { dataMock } from "./createNewList.js";

const activeTasks = document.querySelector(".active-tasks");
const finishedTasks = document.querySelector(".finished-tasks");

export const tasksCount = (i) => {
  const tasksCounter = 0 || dataMock[i].issues.length;

  if (i === 0) {
    return (activeTasks.textContent = tasksCounter);
  } else {
    return (finishedTasks.textContent = tasksCounter);
  }
};
