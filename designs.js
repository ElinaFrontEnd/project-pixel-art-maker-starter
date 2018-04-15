// Select color input
// Select size input

const submitButton = document.getElementById('submit');
const height = document.getElementById("inputHeight");
const width = document.getElementById("inputWidth");


function makeGrid() {
    const grid = document.getElementById("pixelCanvas");
    const row = grid.insertRow(0);
    const column = row.insertCell(1);
}

submitButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    console.log("submit button clicked");
    makeGrid();
});
