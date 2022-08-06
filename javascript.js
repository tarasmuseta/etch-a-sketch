const container = document.querySelector('.container');
const cells = document.querySelectorAll('.cell');
const button = document.querySelector('#reset');

function createGrid(gridSize) {
    for (let i = 0; i < (gridSize * gridSize); i++) {
        const grid = document.createElement('div');
        grid.classList.add(`cell`);
        container.setAttribute('style', `grid-template-columns: repeat(${gridSize}, 2fr); grid-template-rows: repeat(${gridSize}, 2fr);`);
        container.appendChild(grid);
    }
}

createGrid(24);

function switchColor() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
    cell.addEventListener('mouseover', function (e) {
        e.target.style.background = '#111d1d';
        });
    })
}

switchColor();

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

let slider = document.getElementById('gridSize');
let output = document.getElementById('demo');
output.innerHTML = slider.value;
let gridSize;

function reset() {
    button.addEventListener('click', function () {
    const cells = document.querySelectorAll('.cell');
    for (let p = 0; p < slider.value * slider.value; p++) {
        cells[p].style.backgroundColor = '#c4cbd3';
    }})
}

reset();

slider.oninput = function () {
    output.innerHTML = this.value;
    removeAllChildNodes(container);
    createGrid(slider.value);
    switchColor();
    reset();
}
