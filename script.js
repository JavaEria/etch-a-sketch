const container = document.querySelector(".container");

for (let i = 0; i < 60; i++) {
  for (let j = 0; j < 60; j++) {
    let grid = document.createElement("div");
    container.appendChild(grid);
  }
}
