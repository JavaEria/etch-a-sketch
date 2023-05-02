const container = document.querySelector(".container");
let numberSquares = 60;

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

function random() {
  return Math.floor(Math.random() * 255);
}

const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
  box.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
  });
});
