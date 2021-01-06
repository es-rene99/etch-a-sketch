const squaresPerSide = 15;
const squareNumber = squaresPerSide ** 2;
const sizeOfGrid = `${460}px`;

const boardElement = document.querySelector('#board');
for (let i = 0; i < squareNumber; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  boardElement.appendChild(square);
}

document.documentElement.style.setProperty('--sizeOfGrid', `${sizeOfGrid}`);
document.documentElement.style.setProperty('--squaresPerSide', `${squaresPerSide}`);

function getStyleSheet(unique_title) {
  for (let i = 0; i < document.styleSheets.length; i++) {
    const sheet = document.styleSheets[i];
    if (sheet.title === unique_title) {
      return sheet;
    }
  }
}

const gridSquares = document.querySelectorAll('.square');

gridSquares.forEach(square => {
  square.addEventListener('mouseover', setColorizedSquare);
});

function setColorizedSquare() {
  this.classList.add('colorized-square')
}

let styles = getStyleSheet('main-styles');
