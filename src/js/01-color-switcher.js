const body_el = document.querySelector("body");
const startbutton_el = document.querySelector("button[data-start]");
const stopbutton_el = document.querySelector("button[data-stop]");
let body_color_interval;

startbutton_el.addEventListener("click", () => {
  body_el.style.backgroundColor = getRandomHexColor();
  body_color_interval = setInterval(() => {
    body_el.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startbutton_el.disabled = true;
  stopbutton_el.disabled = false;
});

stopbutton_el.addEventListener("click", () => {
  clearInterval(body_color_interval);
  stopbutton_el.disabled = true;
  startbutton_el.disabled = false;
});

function getRandomHexColor() {
  const colorcode = Math.floor(Math.random() * 0xffffff);
  return `#${colorcode.toString(16)}`;
}
