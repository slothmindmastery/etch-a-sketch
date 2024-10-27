const createGrid = function(width, height) {
  const grid = document.querySelector("#grid");
  for (let i = 0; i < height; i++){
    const gridRow = document.createElement("div");
    gridRow.setAttribute("class", "row");
    gridRow.setAttribute("id","row"+height);
    grid.appendChild(gridRow)
    for (let i = 0; i < width; i++) {
      const gridSquare = document.createElement("div");
      gridSquare.setAttribute("class", "square");
      gridSquare.setAttribute("id", width + ":" + height);
      gridRow.appendChild(gridSquare);
    }
  }
}

createGrid (150, 150);


const squares = document.querySelectorAll(".square");
squares.forEach((div) => {
  div.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = "black";
  });
  div.addEventListener("mouseout", (event) => {
      event.target.style.backgroundColor = "gray";
  });
});

const clearButton = document.querySelector("#clear-button");
clearButton.onclick = () => {
  squares.forEach((square) => {
    square.style.backgroundColor = "lightgray";
  });
};

const gridSizeButton = document.querySelector("#grid-size-button");
gridSizeButton.onclick = () => {
  let text;
  let person = prompt("Please enter the width of your grid", "10");
  if (person == null || person == "") {
    ;
  } else {
    text = "Hello " + person + "! How are you today?";
  }
};
