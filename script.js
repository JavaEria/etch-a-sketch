const container = document.querySelector(".container");

for (let i = 0; i < 60; i++) {
  let row = document.createElement("div");
  row.classList.add("row");
  for (let j = 0; j < 60; j++) {
    let grid = document.createElement("div");
    grid.classList.add("box");
    row.appendChild(grid);
  }
  container.appendChild(row);
}
