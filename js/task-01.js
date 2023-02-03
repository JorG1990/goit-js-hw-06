//console.log(item);

const categori= document.querySelectorAll (".item") 
console.log("Number of categories:", categori.length )

for (const subCategori of categori) {

    const title= subCategori.querySelector("h2");
    const list= subCategori.querySelectorAll("li");

    console.log("Category:", title.textContent);
    console.log("Elements:", list.length);

}

 //const body = item.body;
 //console.log(body);

 //const list = body.firstElementChild;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.children;
// console.log(listItems);