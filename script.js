const GRIDSIZE = 600;

let size = 16;
let rainbowMode = false;

const sketchArea = document.querySelector('#sketch-area');
sketchArea.style.width = sketchArea.style.height = `${GRIDSIZE}px`;

function setBackgroundColor() {
    if (rainbowMode) {
        // Generate random RGB color
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        this.style.backgroundColor = randomColor;
    } else {
        this.style.backgroundColor = "black";
    }
}

function createGrid(size) {
    sketchArea.innerHTML = ''; // Clear existing grid before creating a new one
    let numOfSquares = size * size;
    let widthOrHeight = `${(GRIDSIZE / size) - 2}px`;

    for (let i = 0; i < numOfSquares; i++) {
        const gridCell = document.createElement('div');
        gridCell.style.width = gridCell.style.height = widthOrHeight;
        gridCell.classList.add('cell');
        sketchArea.appendChild(gridCell);
        gridCell.addEventListener('mouseover', setBackgroundColor);
    }
}

const resetButton = document.querySelector('#resize');
resetButton.addEventListener('click', () => {
    let gridSize = prompt("Enter a new grid size");
    
    if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
        alert("Please enter a valid number between 1 and 100.");
    } else {
        createGrid(gridSize);
    }
});

const rainbowButton = document.querySelector('#rainbow-mode');
rainbowButton.addEventListener('click', () => {
    rainbowMode = !rainbowMode; // Toggle rainbow mode
    rainbowButton.textContent = rainbowMode ? "Rainbow Mode: ON" : "Rainbow Mode: OFF";
});

createGrid(16);
