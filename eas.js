let rowSetting = 5;
const container = document.getElementById("container");

// input要素
const divCountScale = document.getElementById("divCountScale");
// input用Scaleから取得する値
const currentDivCountValue = divCountScale.value;
// currentValue表示するDiv
const divCountDisplay = document.getElementById("divCountDisplay");
// // divCountDisplayにcurrentDivCountValueを表示する
// divCountDisplay.textContent = currentDivCountValue;

// divCountDisplayにcurrentDivCountValueを表示する
const setCurrentValue = (val) => {
  divCountDisplay.textContent = val;
};

// inputイベント時に値をセットする関数
const rangeOnChange = (e) => {
  setCurrentValue(e.target.value);
};
window.onload = () => {
  divCountScale.addEventListener("input", rangeOnChange);
  // ページ読み込み時の値をセット
  setCurrentValue(divCountScale.value);
  // createDiv(divCountScale.value);
};

function createDiv() {
  container.textContent = "";
  rowSetting = divCountDisplay.outerText;
  container.style.setProperty("--get-row", rowSetting);
  for (i = 1; i <= rowSetting * rowSetting; i++) {
    const div = document.createElement("div");
    div.classList.add("canvas");
    div.textContent = "🐒";
    container.appendChild(div);
  }
}

const button = document.getElementById("buttonToCreateDivs");
button.addEventListener("click", createDiv);
// button.addEventListener("click", createDiv, {once: true,});
