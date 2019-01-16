var button = document.querySelector(".button-search");

var popup = document.querySelector(".search-form");

var arrival_date = popup.querySelector("[name=arrival_date]");
var departure_date = popup.querySelector("[name=departure_date]");
var people = popup.querySelector("[name=people]");
var children = popup.querySelector("[name=children]");

var isStorageSupport = true;

try {
  arrival_date.value = localStorage.getItem("arrival_date");
  departure_date.value = localStorage.getItem("departure_date");
  people.value = localStorage.getItem("people");
  children.value = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}

popup.classList.add("modal-hide");
button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-hide");
  arrival_date.focus();
});
popup.addEventListener("submit", function (evt) {
  if (!arrival_date.value || !departure_date.value || !people.value || !children.value) {
  evt.preventDefault();
} else { 
  if (isStorageSupport) {
    localStorage.setItem("arrival_date", arrival_date.value);
    localStorage.setItem("departure_date", departure_date.value);
    localStorage.setItem("people", people.value);
    localStorage.setItem("children", children.value);
  }
}});


