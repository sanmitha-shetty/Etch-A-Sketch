
const containerDiv = document.querySelector(".container")
const gridDiv = document.querySelectorAll(".grid");
console.log(containerDiv);
//Create Grid
function createGrid(rows, cols){
    containerDiv.style.setProperty('--grid-rows', rows);
    containerDiv.style.setProperty('--grid-cols', cols);
    for (c =0; c< (rows*cols) ; c++ ){
        let cell = document.createElement('div');
        /* cell.innerText = (c + 1); */
        cell.classList.add("new-div");
        containerDiv.appendChild(cell);
/*         cell.style.width="600/rows"
        cell.style.height= "600/rows" */
    };
};
//Default Grid:
createGrid(16,16);