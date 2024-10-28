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


// create a function that changes the colour of a square to a random color (if the colour is not black!) and store in a variable

// create an event-listener that adds the colourchanging function to the squares

// create an event-listener that removes the colourchanging function from the squares if it is there

// make these event-listeners work on button clicks


createGrid (50, 50);

const clearButton = document.querySelector("#clear-button");
const squares = document.querySelectorAll(".square");
clearButton.onclick = () => {
  squares.forEach((square) => {
    square.style.opacity = "0.2";
  });
};

const gridSizeButton = document.querySelector("#grid-size-button");
gridSizeButton.onclick = () => {
  let text;
  let person = prompt("Please enter the width of your grid", "10");
  if (person == null || person == "") {
    // validate information and if true break, if not true alert that it's not a valid input
    ;
  } else {
    text = "Hello " + person + "! How are you today?";
    // remove the current grid and create a new grid of the right size
  }
};
