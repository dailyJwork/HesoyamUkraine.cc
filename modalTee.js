const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".productsListItemBtn");
const closebtn = document.querySelector(".modalCloseBtn");

openModalBtn.onclick = function () {
  modal.style.display = "block";
};
closebtn.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

const openModalTee2 = document.getElementById("tee2");
const openModalTee3 = document.getElementById("tee3");
const openModalTee4 = document.getElementById("tee4");

openModalTee2.onclick = function () {
  modal.style.display = "block";
};

openModalTee3.onclick = function () {
  modal.style.display = "block";
};

openModalTee4.onclick = function () {
  modal.style.display = "block";
};
