const input = document.getElementById("textInput");
const output = document.getElementById("output");
const fontSelect = document.getElementById("fontSelect");

const boldCheckbox = document.getElementById("boldCheckbox");
const italicCheckbox = document.getElementById("italicCheckbox");
const underlineCheckbox = document.getElementById("underlineCheckbox");

input.addEventListener("input", updateOutput);
fontSelect.addEventListener("change", updateOutput);
boldCheckbox.addEventListener("change", updateOutput);
italicCheckbox.addEventListener("change", updateOutput);
underlineCheckbox.addEventListener("change", updateOutput);

function updateOutput() {
  output.textContent = input.value;
  output.style.fontFamily = fontSelect.value;

  output.style.fontWeight = boldCheckbox.checked ? "bold" : "normal";
  output.style.fontStyle = italicCheckbox.checked ? "italic" : "normal";
  output.style.textDecoration = underlineCheckbox.checked
    ? "underline"
    : "none";
}
