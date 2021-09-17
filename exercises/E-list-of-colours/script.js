function listOfColours(colours) {
  let content = document.querySelector("#content");
  selectFromArray(listOfColours);
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

function selectFromArray() {
  let select = document.createElement("select");
  content.appendChild(select);
  let p = document.createElement("p");
  content.appendChild(p);
  p.innerText = `You have selected: ${p.style.color}`; //+ value;
  let option = document.createElement("option");
  select.appendChild(option);
  option.innerText = "select colour";

  colours.forEach((selectColour) => {
    let option1 = document.createElement("option");
    option1.innerText = selectColour;
    option1.value = selectColour;
    select.appendChild(option1);
  });

  select.addEventListener("change", changeColour);

  function changeColour() {
    let selectColorForP = document.querySelector("select");
    p.style.color = selectColorForP.value;
  }
}

listOfColours(colours);
