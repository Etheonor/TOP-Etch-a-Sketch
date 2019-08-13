// Instanciate the first grid (size -> 36)
const container = document.querySelector("#container");
const maxSize = parseInt(window.getComputedStyle(container, null).getPropertyValue("width"));
console.log(maxSize)
const clearButton = document.querySelector("#clearButton");
createGrid();
clearButton.addEventListener("click", reset);

function changeBackgroundColor(){
    // Change the color of a block background
    this.setAttribute("class", "hoverBlock");
}

function reset(){
    // Reset the grid and ask the user for a new size
    const blocks = document.querySelectorAll("#block")
    blocks.forEach(block => {
        block.remove();
    });
    gridNumber = window.prompt("Taille de votre grille");
    createGrid(gridNumber)
    
}

function createGrid(x = 36){
    // Create the grid. 
    container.style.gridTemplateColumns = `repeat(${x}, minmax(${maxSize/x}px, 0fr))`;
    for (let i = 0; i < (x * x); i++){
        let newDiv = document.createElement("div");
        newDiv.setAttribute("id", "block");
        container.appendChild(newDiv)
    }
    const blocks = document.querySelectorAll("#block")
    blocks.forEach(block => {
        block.addEventListener("mouseover", changeBackgroundColor)
        block.style.width = `${maxSize/x}px`
    block.style.height = `${maxSize/x}px`
    });
    
}





