const container = document.getElementById("container");
const btn = document.querySelector("button");
let sketchSize = 16;

btn.addEventListener("click", (e) => {
  e.preventDefault();
  sketchSize = prompt("What size sketch do you want (max 100)");
  while (sketchSize < 1 || sketchSize > 100) {
    sketchSize = prompt(
      "Please choose a positive number less than 100 (max 100)"
    );
  }
  makeRows(sketchSize);
  const flexItems = document.querySelectorAll(".flex-item");
  flexItems.forEach((item) => {
    console.log((item.style.width = 960 / sketchSize + "px"));
    item.style.height = 960 / sketchSize + "px";
  });
});

function makeRows(size) {
  container.innerHTML = "";
  for (i = 0; i < size * size; i++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "flex-item";
  }
}

container.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("flex-item")) {
    e.target.classList.add("hovered");
  }
});
