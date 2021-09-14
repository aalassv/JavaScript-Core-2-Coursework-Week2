function shoppingList(arrayOfShopList) {
  let content = document.querySelector("#content");
  itemsOnList(arrayOfShopList);
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

function itemsOnList(shoppingList) {
  let list = document.createElement("ul");
  content.appendChild(list);

  shoppingList.map((element) => {
    let li = document.createElement("li");
    list.appendChild(li);
    li.innerText = element;
    //console.log(element);
  });
}

shoppingList(shopping);
