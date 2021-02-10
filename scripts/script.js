const defaultSquarePerSide = 16;
let squareNumber;
let gridSquares;
const sizeOfGrid = `${82}vw`;
const boardElement = document.querySelector('#board');
const squarePerSideElement = document.querySelector('#squarePerSize');
const change = document.querySelector('#change-size');

const resetGrid = document.querySelector('#reset-grid');
document.documentElement.style.setProperty('--sizeOfGrid', `${sizeOfGrid}`);

const errorMessage = {
  NotValidNumber: '* The value must be a whole positive number',
  outOfRange: '* The number must be between 0 and 100',
};

// TODO assign error message

function setSquaresPerSideCSS(squarePerSide) {
  document.documentElement.style.setProperty('--squaresPerSide', `${squarePerSide}`);
}

function setSquarePerNumber(squarePerSide) {
  squareNumber = squarePerSide ** 2;
  setSquaresPerSideCSS(squarePerSide);
}

function setColorizedSquare() {
  this.classList.add('colorized-square');
}

function removeBoard() {
  boardElement.innerHTML = '';
}

function createBoard() {
  for (let i = 0; i < squareNumber; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    boardElement.appendChild(square);
  }
  gridSquares = document.querySelectorAll('.square');
  gridSquares.forEach((square) => {
    square.addEventListener('mouseover', setColorizedSquare);
    // TODO possible mobile solution with Jquery
    // if (window.matchMedia('(min-width: 900px)')) {
    //
    // // TODO remove and leave only for desktop for now...
    //   square.addEventListener('mouseover', setColorizedSquare);
    // }
    // else {
    //   debugger;
    //   $('.square').on('tap', setColorizedSquare);
    // }

  });
}

function isValidNumber(paramToEvaluate) {
  return paramToEvaluate > 0
    && paramToEvaluate !== undefined
    && paramToEvaluate !== null
    && !(Number.isNaN(paramToEvaluate));
}

function setGridNewSize(gridNewValue) {
  if (!(isValidNumber(gridNewValue))) {
    return;
  }
  setSquarePerNumber(gridNewValue);
}

function readjustGrid() {
  removeBoard();
  createBoard();
}

function changeGridSize() {
  setGridNewSize(+squarePerSideElement.value);
  readjustGrid();
}

change.addEventListener('click', changeGridSize);

resetGrid.addEventListener('click', () => {
  gridSquares.forEach((square) => {
    square.classList.remove('colorized-square');
  });
});

setSquarePerNumber(defaultSquarePerSide);
createBoard();

// TODO add an exception handling for Not a number exception else if 0 to 100 value exception else pass!
