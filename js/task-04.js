var counterValue = document.querySelector("#value");

const decrement = document.querySelector('button[data-action="decrement"]');

decrement.addEventListener("click", () => {
  counterValue.textContent = parseInt(counterValue.textContent) - 1;
});

const increment = document.querySelector('button[data-action="increment"]');

increment.addEventListener("click", () => {
  counterValue.textContent = parseInt(counterValue.textContent) + 1;
});
