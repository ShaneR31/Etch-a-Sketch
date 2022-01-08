const DEFAULT_GRID_SIZE = 16;
const container = document.querySelector('.container');
let blocks;

/* Create grid based on grid size */
makeGrid(DEFAULT_GRID_SIZE);

/* highlight grid blocks on mouseover*/
function activateBlocks() {
    blocks = document.querySelectorAll('.grid-item');

    blocks.forEach(block => block.addEventListener('mouseover', function() {
        console.log(block);
        block.style.backgroundColor = 'blue';
    }));
}

/*  clear grid, send popup to ask for
number of squares per side for new grid) */
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clearGrid)

// Clear grid and make new one based on given size
function clearGrid() {
    container.innerHTML = '';
    let gridSize = prompt('Choose a grid size:', DEFAULT_GRID_SIZE);
    if (gridSize > 100) gridSize = 100;
    makeGrid(gridSize);
}

// make new grid of given size
function makeGrid(gridSize) {
    container.style.setProperty('--num-rows', gridSize);
    container.style.setProperty('--num-cols', gridSize);

    for(i = 0; i < gridSize**2; i++) {
        let block = document.createElement('div');
        block.classList.add('grid-item');
        //block.textContent = ' ';
        container.appendChild(block);
    }
    activateBlocks();
}