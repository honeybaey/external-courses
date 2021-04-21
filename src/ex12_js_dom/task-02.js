const userBlock = document.querySelector(".user");
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

let isDropdownShow = false;

userBlock.addEventListener("click", () => {
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
