const container = document.querySelector("#container");

function newgrid(answer) {
  let totalsquares = answer * answer;
  for (let i = 0; i < totalsquares; i++) {
    const new_square = document.createElement("div");
    new_square.classList.add("grid");
    new_square.style.width = `calc(100% / ${answer})`;
    new_square.style.height = `calc(100% / ${answer})`;

    let currentopacity = 0;

    new_square.addEventListener("mouseover", () => {
      if (currentopacity < 1) {
        currentopacity += 0.1;
      }

      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      new_square.style.backgroundColor = `rgb(${r},${g},${b},${currentopacity})`;
    });
    container.appendChild(new_square);
  }
}

newgrid(16);

function getcolour() {}

const button = document.createElement("button");
button.textContent = "New Grid";
document.body.insertBefore(button, container);

button.addEventListener("click", () => {
  let answer = prompt("Enter number of squares per side");
  if (answer > 100) {
    alert("Enter a number less than 100!");
  } else if (answer > 0) {
    const boxes = document.querySelectorAll(".grid");
    boxes.forEach((item) => {
      container.removeChild(item);
    });

    newgrid(answer);
  }
});
