// Functionize Minecraft Fishing Start Code

// Variables to store HTML Elements
let fishBtn = document.getElementById('fish-btn');
let charSelect = document.getElementById('character-select');
let resultImg = document.getElementById('result-img');
let numCodSpan = document.getElementById('num-cod');
let numSalmonSpan = document.getElementById('num-salmon');
let numTropicalSpan = document.getElementById('num-tropical');
let numPufferSpan = document.getElementById('num-puffer');

// Global Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Add Event Listener to Calculate Button
fishBtn.addEventListener('click', fishBtnClicked);

// Event handler for fishBtn
function fishBtnClicked() {
  // Check Selected Character
  let character = charSelect.value;


  if (character === "steve"){
    catchFish(0.7, 0.9, 0.95, 1);
  }
  else if (character === "alex"){
    catchFish(0.1, 0.2, 0.5, 1);
  }
  else if(character === "villager"){
    catchFish(0.25, 0.5, 0.75, 1);
  }
  // Catch fish based on character
  /*if (character === 'steve') {
    // STEVE: Cod 70%, Salmon 20%, Tropical 5%, Puffer 5%
    let randNum = Math.random();
    if (randNum < 0.7) {
      numCod++;
      numCodSpan.innerHTML = numCod;
      resultImg.src = 'img/Raw-Cod.png';
    } else if (randNum < 0.9) {
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      resultImg.src = 'img/Raw-Salmon.png';
    } else if (randNum < 0.95) {
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      resultImg.src = 'img/Tropical-Fish.png';
    } else {
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      resultImg.src = 'img/Pufferfish.png';
    }
  } else if (character === 'alex') {
    // ALEX: Cod 10%, Salmon 10%, Tropical 30%, Puffer 50%
    let randNum = Math.random();
    if (randNum < 0.1) {
      numCod++;
      numCodSpan.innerHTML = numCod;
      resultImg.src = 'img/Raw-Cod.png';
    } else if (randNum < 0.2) {
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      resultImg.src = 'img/Raw-Salmon.png';
    } else if (randNum < 0.5) {
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      resultImg.src = 'img/Tropical-Fish.png';
    } else {
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      resultImg.src = 'img/Pufferfish.png';
    }
  }*/
}


function catchFish(Cod, Salmon, Tropical, Puffer) {
  let randNum = Math.random();
  if (randNum < Cod) {
    numCod++;
    numCodSpan.innerHTML = numCod;
    resultImg.src = 'img/Raw-Cod.png';
  } else if (randNum < Salmon) {
    numSalmon++;
    numSalmonSpan.innerHTML = numSalmon;
    resultImg.src = 'img/Raw-Salmon.png';
  } else if (randNum < Tropical) {
    numTropical++;
    numTropicalSpan.innerHTML = numTropical;
    resultImg.src = 'img/Tropical-Fish.png';
  } else if (randNum < Puffer){
    numPuffer++;
    numPufferSpan.innerHTML = numPuffer;
    resultImg.src = 'img/Pufferfish.png';
  }
}