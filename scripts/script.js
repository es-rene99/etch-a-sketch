const sizeOfGrid = 256;
const boardElement = document.querySelector('#board');
for (let i = 0; i < sizeOfGrid; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  boardElement.appendChild(square);
}
