// Select color input

const grid = document.getElementById("pixelCanvas");
const submitButton = document.getElementById("submit");
const height = document.getElementById("inputHeight");
const width = document.getElementById("inputWidth");
const color = document.getElementById("colorPicker");


// function to create grid based on user input
function makeGrid() {
// Remove previous grid
    while(grid.hasChildNodes()){
        grid.removeChild(grid.firstChild);
    };
// Create grid based on height and with input
    for (let rows = 0; rows < height.value; rows++){
        let tr = grid.insertRow();
        for (let columns = 0; columns < width.value; columns++){
            let td = tr.insertCell();
        }
    }
};

// call function makeGrid when submit button pressed
submitButton.addEventListener("click", function(evt) {
    // Prevent default action of reloading
    evt.preventDefault();
    //Call makeGrid function
    makeGrid();
});


//add color when cell is clicked
grid.addEventListener("click", function(evt) {
//specify that only TD should be colored, to avoid bubbling effect on rows and grid
    if (evt.target.nodeName === "TD") {
        evt.target.style.backgroundColor = color.value;
    }
});