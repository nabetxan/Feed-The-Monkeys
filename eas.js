let rowSetting = 1;
let isMouseDown = false;

// set the initial time and score values
let countDownLeft = 10;
let score = 0;

// get the HTML elements
const container = document.getElementById("container");
const divCountScale = document.getElementById("divCountScale");
const timerEl = document.getElementById("timeLeft");
const scoreEl = document.getElementById("total-bananas");
const leftMonkeyEl = document.getElementById("how-many-left");
const totalMonkeyEl = document.getElementById("total-monkeys");
const highScoreEl = document.getElementById("highScore");
const divCountDisplay = document.getElementById("divCountDisplay");
let currentDivCountValue = divCountScale.value;
let timerInterval = 0;
let currentHS = highScoreEl.textContent;
// let currentHS = localStorage.getItem("highScore", 0);
// console.log(currentHS)
let canvasDiv = [];

// divCountDisplayにcurrentDivCountValueを表示する
const setCurrentValue = (val) => {
  divCountDisplay.textContent = val;
  // Scoreの部分も連動させる
  totalMonkeyEl.textContent = val * val;
  leftMonkeyEl.textContent = val * val - scoreEl.textContent;
};

// Scale調整時に値をセットする
const rangeOnChange = (e) => {
  setCurrentValue(e.target.value);
};
window.onload = () => {
  divCountScale.addEventListener("input", rangeOnChange);
  // ページ読み込み時の値をセット
  setCurrentValue(divCountScale.value);
  // createDiv(divCountScale.value);
};

//　スタートボタンを押した時に実行される
function createDiv() {
  // Count down Reset
  countDownLeft = 10;
  // container内のchild divを消す
  container.textContent = "";
  rowSetting = divCountDisplay.outerText;
  container.style.setProperty("--get-row", rowSetting);
  for (i = 1; i <= rowSetting * rowSetting; i++) {
    const div = document.createElement("div");
    div.classList.add("canvas");
    div.textContent = "🐒";
    container.appendChild(div);
  }

  // start the countdown timer
  timerInterval = setInterval(countdown, 1000);
  // check if time is up
  if (countDownLeft > 0) {
    // Add event listeners to .canvas elements
    canvasDiv = document.querySelectorAll(".canvas");
    canvasDiv.forEach((div) => {
      div.addEventListener("mousedown", () => {
        isMouseDown = true;
        if (isMouseDown === true && div.textContent === "🐒") {
          div.textContent = "🍌🐒";
          scoreUpdate();
        } else if (isMouseDown === true && div.textContent === "🍌🐒") {
          div.textContent = "🐒";
          scoreUpdate();
        }
      });
      div.addEventListener("mouseenter", () => {
        if (isMouseDown === true && div.textContent === "🐒") {
          div.textContent = "🍌🐒";
          scoreUpdate();
        } else if (isMouseDown === true && div.textContent === "🍌🐒") {
          div.textContent = "🐒";
          scoreUpdate();
        }
      });

      div.addEventListener("mouseup", () => {
        isMouseDown = false;
        scoreUpdate();
      });
    });
  }
}

const button = document.getElementById("buttonToCreateDivs");
button.addEventListener("click", createDiv);
// button.addEventListener("click", createDiv, {once: true,});

//adding count down feature
function countdown() {
  // decrement the time left and update the timer element
  countDownLeft--;
  timerEl.textContent = countDownLeft;

  // check if time is up
  if (countDownLeft <= 0) {
    // stop the timer and display the final score
    clearInterval(timerInterval);
    // scoreUpdate();

    // if (score > currentHS) {
    //   currentHS = score;
    //   localStorage.setItem("highScore", currentHS);
    // }

    // update the high score element
    //   highScoreEl.textContent = currentHS;
    // }

    if (currentHS < score) {
      currentHS = score;
      localStorage.setItem("highScore", currentHS);
      highScoreEl.textContent = currentHS;
    }
  }
}

function scoreUpdate() {
  // check if time is up
  if (countDownLeft > 0) {
    score = 0;
    canvasDiv.forEach((div) => {
      if (div.textContent === "🍌🐒") {
        // return the score
        score++;
      }
    });
    scoreEl.textContent = score;
    leftMonkeyEl.textContent = totalMonkeyEl.textContent - score;

    // if (score > currentHS) {
    //   currentHS = score;
    //   localStorage.setItem("highScore", currentHS);
    //   highScoreEl.textContent = currentHS;
    // }
  }
}
