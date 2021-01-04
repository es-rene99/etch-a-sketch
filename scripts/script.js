const squaresPerSide = 16;
const squareNumber = squaresPerSide ** 2;
const sizeOfGrid = `${960}px`;

const boardElement = document.querySelector('#board');
for (let i = 0; i < squareNumber; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  boardElement.appendChild(square);
}

function getStyleSheet(unique_title) {
  for (let i = 0; i < document.styleSheets.length; i++) {
    const sheet = document.styleSheets[i];
    if (sheet.title === unique_title) {
      return sheet;
    }
  }
}
// TODO left here, with this method I can insert css in my stylesheet like w3 mentions, instead of inline, need to alter it and be able to enter the size of the grid depending on the square per size

const sheet = document.createElement('style');
document.body.appendChild(sheet);
sheet.insertRule();
