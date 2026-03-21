const container = document.querySelector("#container");

function create_grid() {
  for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("grid");
    container.appendChild(square);
  }
}

create_grid();
