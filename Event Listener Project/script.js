const eventInfo = document.getElementById("event-info");

const singleClickBtn = document.getElementById("onclick-btn");

const ondblbtn = document.getElementById("ondblbtn");

const mouseoverBtn = document.getElementById("mouseover-btn");

const mouseoutBtn = document.getElementById("mouseout-btn");

//  onkeypress event has been deprecated in modern web standard.

const keydownInput = document.getElementById("keydown-input");

singleClickBtn.addEventListener("click", () => {
  alert("Single Click on button!!!");
});

ondblbtn.addEventListener("dblclick", () => {
  alert("double Click on button!!!");
});

mouseoverBtn.addEventListener("mouseover", () => {
  alert("mouse over button!!!");
});

mouseoutBtn.addEventListener("mouseout", () => {
  alert("mouse out button!!!");
});

keydownInput.addEventListener("keydown", (event) => {
  eventInfo.innerHTML = event.key;
});

document.getElementById("keyUp-input").onkeyup = function (event) {
  event = event || window.event; // For older browser compatibility
  var keyCode = event.keyCode || event.which; // Get the key code
  eventInfo.innerHTML = event.key;
};
