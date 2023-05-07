const container = document.querySelector(".container");
const colorPicker = document.getElementById("colorPicker");
const colorButton = document.getElementById("color");
const rainbowButton = document.getElementById("rainbow");
const eraserButton = document.getElementById("eraser");
const optionMode = ["RAINBOW", "COLOR", "ERASER"];
let selectedOption = optionMode[0];

let numberSquares = 16;

function drawGrids() {
  for (let i = 0; i < numberSquares; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < numberSquares; j++) {
      let grid = document.createElement("div");
      grid.classList.add("box");
      row.appendChild(grid);
    }
    container.appendChild(row);
  }
}

function redrawGrids() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  drawGrids();
  addHoverListeners();
}

function random(value) {
  return Math.floor(Math.random() * value);
}

function determineBoxColor(isEraseable) {
  if (selectedOption === optionMode[0])
    return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  else if (selectedOption === optionMode[1]) return colorPicker.value;
  else if (selectedOption === optionMode[2] && isEraseable) return "whitesmoke";
}

function addHoverListeners() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = determineBoxColor(false);
    });
    box.addEventListener("click", (event) => {
      event.target.style.backgroundColor = determineBoxColor(true);
    });
  });
}

function toggleOptions() {}

drawGrids();
addHoverListeners();
rainbowButton.classList.add("selectedButton");

const gridRangeInput = document.getElementById("gridInput");
const gridRangeLabel = document.getElementById("rangeLabel");
gridRangeInput.addEventListener("input", () => {
  numberSquares = gridRangeInput.value;
  gridRangeLabel.textContent = `${numberSquares} x ${numberSquares}`;
  redrawGrids();
});

const refreshButton = document.querySelector(".refresh");
refreshButton.addEventListener("click", () => {
  window.location.reload();
});

rainbowButton.addEventListener("click", () => {
  selectedOption = optionMode[0];
  toggleOptions();
  rainbowButton.classList.add("selectedButton");
  colorButton.classList.remove("selectedButton");
  eraserButton.classList.remove("selectedButton");
});

colorButton.addEventListener("click", () => {
  selectedOption = optionMode[1];
  rainbowButton.classList.remove("selectedButton");
  colorButton.classList.add("selectedButton");
  eraserButton.classList.remove("selectedButton");
});

eraserButton.addEventListener("click", () => {
  selectedOption = optionMode[2];
  rainbowButton.classList.remove("selectedButton");
  colorButton.classList.remove("selectedButton");
  eraserButton.classList.add("selectedButton");
});
