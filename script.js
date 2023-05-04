const container = document.querySelector(".container");
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

function random() {
  return Math.floor(Math.random() * 255);
}

function addHoverListeners() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
    });
  });
}

drawGrids();
addHoverListeners();

const gridButton = document.querySelector(".option");
gridButton.addEventListener("click", (event) => {
  gridNumber = prompt("Enter Grid Squares per Side value (10-100):", 60);
  if (gridNumber >= 10 && gridNumber <= 100) {
    numberSquares = gridNumber;
    redrawGrids();
  }
});

const refreshButton = document.querySelector(".refresh");
refreshButton.addEventListener("click", () => {
  window.location.reload();
});
