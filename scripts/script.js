console.log("Here I am!");

let icon = document.querySelector(".menu_icon");
let navBar = document.querySelector("#nav-bar");
let header = document.querySelector("#header");

icon.addEventListener("click", function() {
  icon.classList.toggle("change");
  navBar.classList.toggle("hide");
  header.classList.toggle("extend");
});