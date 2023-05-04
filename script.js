
const containerDiv = document.querySelector(".container")
const newGrid = document.querySelector(".new-grid");
const clearGrid = document.querySelector(".clear-grid");
const item = document.querySelectorAll('.new-div');

console.log(containerDiv);

//Create Grid
function createGrid(rows, cols){
    containerDiv.style.setProperty('--grid-rows', rows);
    containerDiv.style.setProperty('--grid-cols', cols);
    for (c =0; c< (rows*cols) ; c++ ){
        let cell = document.createElement('div');
        cell.classList.add("new-div");
        containerDiv.appendChild(cell);
    };
    hoverGrid();
}; 
//Default Grid:
createGrid(16,16);


//Add Hover Effect to the Grid
function hoverGrid(){
    const item = document.querySelectorAll('.new-div');
    item.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
        cell.style.background = '#f9d1d7';
        });
    });
};
 
