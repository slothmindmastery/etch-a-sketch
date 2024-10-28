const createGrid = function(width, height) {
  const grid = document.querySelector("#grid");

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

createGrid (50, 50);

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
