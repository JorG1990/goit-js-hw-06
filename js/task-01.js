
let categoriesList = document.querySelector("ul#categories");
let categoryItems = categoriesList.querySelectorAll("li.item");
let categoryCount = categoryItems.length;

console.log("Número de categorías: " + categoryCount);

categoryItems.forEach(function(item) {
  let title = item.querySelector("h2").textContent;
  let articleItems = item.querySelectorAll("li");
  let articleCount = articleItems.length;
  console.log("Título del artículo: " + title);
  console.log("Número de artículos: " + articleCount);
});