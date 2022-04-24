const container = document.querySelector('#grid');
const button = document.getElementById('btn');

let createGrid = (area) => {
    clearChildren(grid);
    container.style.setProperty('--grid-cols', area);
    container.style.setProperty('--grid-rows', area);
    for (let i = 0; i < (area ** 2); i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell')
        //cell.textContent = 'cell';
        container.appendChild(cell);
        
        cell.addEventListener('mouseenter', () => {
            cell.style.backgroundColor = 'purple';
        });
    }
}

let gridParameters = (area) => {
    area = parseInt(prompt('Grid Size (Max 100)', 16));
    if (area > 100 || area < 0) {
        null;
    } else {
        createGrid(area)
    } }

let clearChildren = (parent) => {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

button.addEventListener('click', () => gridParameters());
    