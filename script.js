
const containerDiv = document.querySelector(".container")

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
}; 
//Default Grid:
createGrid(16,16);
const item = document.querySelectorAll('.new-div');
  item.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
      cell.style.background = 'black';
    });
  });



 /* let rows = prompt('How many Rows or Columns do you need?'); */
