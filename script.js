const grid = document.getElementById("grid");
const picker = document.getElementById("color");

for (let i = 0; i < 16 * 16; i++) {
  const pixel = document.createElement("div");
  pixel.className = "pixel";
  pixel.addEventListener("click", () => {
    pixel.style.backgroundColor = picker.value;
  });
  grid.appendChild(pixel);
}

document.getElementById("clear").addEventListener("click", () => {
  document.querySelectorAll(".pixel").forEach(p => {
    p.style.backgroundColor = "";
  });
});