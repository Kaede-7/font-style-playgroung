const input = document.getElementById("textInput");
const output = document.getElementById("output");
const fontSelect = document.getElementById("fontSelect");

input.addEventListener("input", () => {
  output.textContent = input.value;
});

fontSelect.addEventListener("change", () => {
  output.style.fontFamily = fontSelect.value;
});
