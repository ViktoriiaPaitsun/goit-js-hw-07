"use strikt";
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
nameInput.addEventListener("input", (event) => {
  const clearName = event.target.value.trim();

  if (clearName) {
    nameOutput.textContent = clearName;
  } else {
    nameOutput.textContent = "Anonymous";
  }
});
