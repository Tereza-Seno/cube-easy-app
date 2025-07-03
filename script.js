//Import

import { addToWebsite } from "./functions.js";

const selectSection = document.getElementById("cube");
const selectButton = document.getElementById("btn");
const selectImage = document.getElementById("cube-image");
const selectResult = document.getElementById("result");

let counter = null;
let clicks = null;

//Vygenerování náhodného čísla po kliknutí
selectButton.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * 6) + 1;

  //Změna cesty k obrázku podle hodnoty
  selectImage.src = "img/" + randomNumber + ".jpg";

  //Sčítá naházené hodnoty kostky
  counter = counter + randomNumber;

  clicks = clicks + 1;
  //cliks++; - alternativa

  //Vyčištění sekce s naházenými body - pozor nesmí být pod paragraphem!
  selectResult.textContent = "";

  //Vypsání naházených bodů do stránky
  addToWebsite("p", counter, selectResult);

  //Přidání výherního textu do stránky
  if (counter >= 20 && clicks <= 5) {
    addToWebsite("p", "Vyhrál jsi!", selectResult);
    selectButton.style.visibility = "hidden";
  } else if (counter < 20 && clicks === 5) {
    addToWebsite("p", "Prohrál jsi!", selectResult);
    selectButton.style.visibility = "hidden";
  } else {
    addToWebsite("p", "Házej dál!", selectResult);
  }
});

//Funkce exportována ze souboru functions!
// index.html - type="module" functions.js - export script.js - import { co } odkud
