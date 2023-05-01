const container = document.querySelector(".container");

for (let i = 0; i < 60; i++) {
  let grid = document.createElement("div");
  grid.classList.add("box");
  container.appendChild(grid);
}
