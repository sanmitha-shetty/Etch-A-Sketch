//Query Selectors for elements
const containerDiv = document.querySelector(".container")
const newGrid = document.querySelector(".new-grid");
const clearGrid = document.querySelector(".clear-grid");
const item = document.querySelectorAll('.new-div');


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

//Create a new Grid with user choice
newGrid.addEventListener('click', ()=>{
    let rows = prompt('Enter the number of rows or columns:');
        if (rows == undefined){
            containerDiv.innerHTML="";
            createGrid(16,16);
        }
        else if (rows< 1 || rows>100){
            containerDiv.innerHTML="";
            alert('Please enter a number between 1 and 100')
            createGrid(16,16); 
        }
        else{
            let cols = rows;
            containerDiv.innerHTML="";
            createGrid (rows, cols);
        };
});

//Clear Grid
clearGrid.addEventListener('click',()=>{
    const item = document.querySelectorAll('.new-div');
    item.forEach((cell) => {
    cell.style.backgroundColor = '#490b3d';
    });
});

//Add Hover Effect to the Grid
function hoverGrid(){
    const item = document.querySelectorAll('.new-div');
    item.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
        cell.style.background = '#f9d1d7';
        });
    });
};
 
