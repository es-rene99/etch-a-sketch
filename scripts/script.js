const squaresPerSide = 15;
const squareNumber = squaresPerSide ** 2;
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
