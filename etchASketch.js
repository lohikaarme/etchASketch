const container = document.querySelector('#grid');
const button = document.querySelector('#btn');
const color = document.querySelector('.color');

let draw = false;
window.addEventListener('mousedown', () => draw = true);
window.addEventListener('mouseup', () => draw = false);

let createGrid = (area) => {
    clearChildren(grid);
    container.style.setProperty('--grid-area', area);
    for (let i = 0; i < (area ** 2); i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
        
        cell.addEventListener('mousedown', () => {
            cell.style.backgroundColor = color.value;
        });
        cell.addEventListener('mouseover', () => {
            if (!draw) return; 
            cell.style.backgroundColor = color.value;
        });
    }
}

let gridParameters = (area) => {
    area = parseInt(prompt('Grid Size (Max 100)', 16));
    if (area <= 100 && area > 0) {
        createGrid(area);
    } else {
        createGrid(16)
    } }

let clearChildren = (parent) => {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

button.addEventListener('click', () => gridParameters());
createGrid(16);
    