const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let priori = document.getElementById("ingredients");

for(var i in ingredients){
  
  let otter = document.createElement("li");
  otter.textContent=ingredients[i];
  priori.appendChild(otter);
}