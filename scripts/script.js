let squaresPerSide = 15;
let squareNumber;
function getSquareNumber() {
  squareNumber = squaresPerSide ** 2;
}
getSquareNumber();
const sizeOfGrid = `${460}px`;

document.documentElement.style.setProperty('--sizeOfGrid', `${sizeOfGrid}`);
document.documentElement.style.setProperty('--squaresPerSide', `${squaresPerSide}`);

const boardElement = document.querySelector('#board');
for (let i = 0; i < squareNumber; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  boardElement.appendChild(square);
}

const gridSquares = document.querySelectorAll('.square');

function setColorizedSquare() {
  this.classList.add('colorized-square');
}

gridSquares.forEach((square) => {
  square.addEventListener('mouseover', setColorizedSquare);
});

const resetGrid = document.querySelector('#reset-grid');
resetGrid.addEventListener('click', () => {
  gridSquares.forEach((square) => {
    square.classList.remove('colorized-square');
  });
});

function isValidNumber(paramToEvaluate) {
  return paramToEvaluate > 0
    && paramToEvaluate !== undefined
    && paramToEvaluate !== null
    && !(Number.isNaN(paramToEvaluate));
}

function setGridNewSize() {
  do {
    if (!(isValidNumber(squaresPerSide))) {
      alert('Please enter a valid number');
    }
    squaresPerSide = prompt('How many squares per side would you like?', 16);
    // TODO how to cancel this if the user hits cancel
  } while (!(isValidNumber(squaresPerSide)));
}

function readjustGrid() {

}

function changeGridSize() {
  setGridNewSize();
  readjustGrid();
}
const change = document.querySelector('#change-size');
change.addEventListener('click', changeGridSize);
