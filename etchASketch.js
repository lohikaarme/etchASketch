const container = document.querySelector('#container');

//container.textContent = 'test';

let createGrid = (cols, rows) => {
//    container.style.setProperty('grid-template-columns', `repeat(${cols}, 1fr)`);
container.style.setProperty('--grid-cols', cols);
container.style.setProperty('--grid-rows', rows);
for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell')
        //cell.textContent = 'cell';
        container.appendChild(cell);
    }
}

createGrid(16,16)