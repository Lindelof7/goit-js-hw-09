const startButtonEl = document.querySelector(('button[data-start]'))
const stopButtonEl = document.querySelector(('button[data-stop]'))
const bodyEl = document.querySelector("body")


startButtonEl.addEventListener("click", onStartButtonClick)
stopButtonEl.addEventListener("click", onStopButtonClick)
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBodyColor() {
    bodyEl.style.backgroundColor = getRandomHexColor();
}

function onStartButtonClick() {
    changeBodyColor()
    colorChanger = setInterval(changeBodyColor, 1000)
    startButtonEl.disabled = true;
    stopButtonEl.disabled = false;
}

function onStopButtonClick() {
    clearTimeout(colorChanger)
    stopButtonEl.disabled = true;
    startButtonEl.disabled = false;
}