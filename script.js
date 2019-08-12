const container = document.querySelector("#container");
let newDiv = document.createElement("div");
newDiv.setAttribute("id", "block");

for (let i = 0; i < 256; i++){
    container.appendChild(newDiv)
}