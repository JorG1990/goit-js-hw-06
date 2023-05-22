const nameInput = document.querySelector("#name-input");
    const nameOutput = document.querySelector("#name-output");

    nameInput.addEventListener("input", () => {
      const nombre = nameInput.value.trim();

      if (nombre === "") {
        nameOutput.textContent = "Anonymous";
      } else {
        nameOutput.textContent = nombre;
      }
    });