const container = document.getElementById("container");

function makeRows(rows, cols) {
  for (i = 0; i < rows * cols; i++) {
    let cell = document.createElement("div");
    cell.innerText = i + 1;
    container.appendChild(cell).className = "flex-item";
  }
}

makeRows(16, 16);

container.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("flex-item")) {
    e.target.classList.add("hovered");
  }
});
