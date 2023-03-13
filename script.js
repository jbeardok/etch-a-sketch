const body = document.querySelector('body');
const  grid = document.createElement('div');
grid.classList = 'grid';
body.appendChild(grid);

for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.classList = `square`;
    grid.appendChild(square);
}