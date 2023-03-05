// document.addEventListener("DOMContentLoaded", function(event) {
const rowSetting = 5;
const container = document.getElementById("container");

function createDiv() {
  //   console.log("test");
  container.style.setProperty("--get-row", rowSetting);
  for (i = 1; i <= rowSetting * rowSetting; i++) {
    const div = document.createElement("div");
    div.textContent = "🐒";
    container.appendChild(div);
  }
}

const button = document.getElementById("buttonToCreateDivs");
button.addEventListener("click", createDiv);
// });
