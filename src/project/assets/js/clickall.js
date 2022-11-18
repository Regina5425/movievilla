export let clickAll = function (e) {
  let active = e.currentTarget;

  let number = active.className.match(/\d+/)[0];
  let title = document.querySelector(
    ".slider" + number + "__title"
  ).textContent;
  localStorage.setItem("title", title);
};
