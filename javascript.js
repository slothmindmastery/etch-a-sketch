const gridSizeButton = document.querySelector("#grid-size-button");
const clearButton = document.querySelector("#clear-button");
const toggleColorModeOnButton = document.querySelector("#toggle-color-mode-on-button");
const toggleColorModeOffButton = document.querySelector("#toggle-color-mode-off-button");

function generateGrid(width, height) {
  const grid = document.querySelector("#grid");

  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }

  for (let i = 0; i < height; i++) {
    const gridRow = document.createElement("div");
    gridRow.setAttribute("class", "row");
    gridRow.setAttribute("id", "row" + i);
    grid.appendChild(gridRow);

    for (let j = 0; j < width; j++) {
      const gridSquare = document.createElement("div");
      gridSquare.setAttribute("class", "square");
      gridSquare.setAttribute("id", "square " + i + ":" + j);
      gridRow.appendChild(gridSquare);

      gridSquare.addEventListener("mouseover", (event) => {
        let opacity = parseFloat(getComputedStyle(event.target).opacity);
        if (opacity < 1) {
          opacity += 0.2;
          event.target.style.opacity = opacity;
        }
      });
    }
  }
}

function promptGridSize() {
  let size;
  let isValid = false;

  do {
    size = Number(prompt("Please enter the width of your grid", "10"));
    isValid = Number.isInteger(size) && size > 0 && size <= 100;

    if (!isValid) {
      alert("Enter a number between 1 and 100");
    }
  } while (!isValid);

  generateGrid(size, size);
}

function clearGrid() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.style.backgroundColor = "black";
    square.style.opacity = "0.2";
  });
}

function changeColorOnHover(event) { // only changes color if color has not been changed already
  const currentColor = getComputedStyle(event.target).backgroundColor;

  if (currentColor === "rgb(0, 0, 0)") {
    event.target.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
}

function toggleColorModeOn() {
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("mouseover", changeColorOnHover);
  });
}

function toggleColorModeOff() {
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.removeEventListener("mouseover", changeColorOnHover);
  });
}

generateGrid (50, 50);
gridSizeButton.onclick = promptGridSize;
clearButton.onclick = clearGrid;
toggleColorModeOnButton.onclick = toggleColorModeOn;
toggleColorModeOffButton.onclick = toggleColorModeOff;
