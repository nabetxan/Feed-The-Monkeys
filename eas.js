// document.addEventListener("DOMContentLoaded", function(event) {
const rowSetting = 2;
const container = document.getElementById("container");

function createDiv() {
  //   console.log("test");
  for (i = 1; i <= rowSetting * 2; i++) {
    const div = document.createElement("div");
    div.textContent = "🐒";
    container.appendChild(div);
  }
}

const button = document.getElementById("buttonToCreateDivs");
button.addEventListener("click", createDiv);
// });
