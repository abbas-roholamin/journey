// set initial value to zero
let count = 0;

// select value and buttons container
const value = document.querySelector("#value");
const buttonContainer = document.querySelector(".button-container");

const buttons = new Map([
  ["decrease", () => --count],
  ["increase", () => ++count],
  ["reset", () => count = 0]
]);

buttonContainer.addEventListener("click", function (e) {
  const action = e.target.classList.item(1);
  if (buttons.has(action)) {
    value.textContent = buttons.get(action)();
  }
});

