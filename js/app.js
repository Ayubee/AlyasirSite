const burgerBtn = document.getElementById("burger__btn");
const burgerList = document.getElementById("burger__list");

burgerBtn.addEventListener("click", () => {
  burgerList.classList.toggle("none");
});
