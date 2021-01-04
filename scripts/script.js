const sizeOfGrid = 225;
const boardElement = document.querySelector('#board');
for (let i = 0; i < sizeOfGrid; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  boardElement.appendChild(square);
}

const sheet = document.createElement('style');
document.body.appendChild(sheet);
sheet.innerHTML = '.square {border: 2px solid black;}';
