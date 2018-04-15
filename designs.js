// Select color input

const grid = document.getElementById("pixelCanvas");
const submitButton = document.getElementById("submit");
const height = document.getElementById("inputHeight");
const width = document.getElementById("inputWidth");
const color = document.getElementById("colorPicker");


// function to create grid based on user input
function makeGrid() {
    
// For testing only
    console.log(height.value, width.value, color.value);
    
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
}

// call function makeGrid when submit button pressed
submitButton.addEventListener("click", function(evt) {
    // Prevent default action of reloading
    evt.preventDefault();
    //Call makeGrid function
    makeGrid();
});