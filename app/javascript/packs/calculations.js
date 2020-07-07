// total

//total by fields


// alimentaire
// fonction calcul + apeller fonction pour chaque field

const totalAlimBox = document.getElementById('totalAlimBox')
function totAlim() {
  const numberble = Number(scoreBle.textContent);
  const numbercarotte = Number(scoreCarotte.textContent);
  const numberriz = Number(scoreRiz.textContent);
  const numberPomedeterre = Number(scorePommedeterre.textContent);
  const numberSaladesaison = Number(scoreSaladeSaison.textContent);
  const numberSaladeSs = Number(scoreSaladeSs.textContent);
  const numberTomates = Number(scoreTomates.textContent);
  //  saladess tomatesfr tomatesfrss Veau Laitvache Poulet Oeufs
  const sum = numberble + numbercarotte + numberriz + numberPomedeterre + numberSaladesaison + numberSaladeSs + numberTomates
  totalAlimBox.innerText = sum.toFixed(2)
}

// field ble
const userBle = document.getElementById('userBle');
const blecc = 0.439
const scoreBle = document.getElementById('scoreble');
userBle.addEventListener("input", multiplyBle);
function multiplyBle() {
  let one = parseFloat(userBle.value) || 0;
  let ccble = parseFloat(one * blecc).toFixed(2);
  scoreBle.innerHTML = ccble;
  totAlim()
}


// field carotte
let userCarotte = document.getElementById('userCarotte');
const carottecc = 0.0706
const scoreCarotte = document.getElementById('scoreCarotte');
userCarotte.addEventListener("input", multiplyCarotte);
function multiplyCarotte() {
  let one = parseFloat(userCarotte.value) || 0;
  let cccarotte = parseFloat(one * carottecc).toFixed(2);
  scoreCarotte.innerHTML = cccarotte;
  totAlim()
}

// field riz
let userRiz = document.getElementById('userRiz');
const rizcc = 3.59
const scoreRiz = document.getElementById('scoreRiz');
userRiz.addEventListener("input", multiplyRiz);
function multiplyRiz() {
  let one = parseFloat(userRiz.value) || 0;
  let ccriz = parseFloat(one * rizcc).toFixed(2);
  scoreRiz.innerHTML = ccriz;
  totAlim()
}

// field pomme de terre fr
let userPommeDeTerre = document.getElementById('userPommeDeTerre');
const pommedeterrecc = 0.0861
const scorePommedeterre = document.getElementById('scorePommeDeTerre');
userPommeDeTerre.addEventListener("input", multiplyPatate);
function multiplyPatate() {
  let one = parseFloat(userPommeDeTerre.value) || 0;
  let pommedeterre = parseFloat(one * pommedeterrecc).toFixed(2);
  scorePommedeterre.innerHTML = pommedeterre;
  totAlim()
}

// field salade saison
let userSaladeSaison = document.getElementById('userSaladeSaison');
const saladesaisoncc = 0.326
const scoreSaladeSaison = document.getElementById('scoreSaladeSaison');
userSaladeSaison.addEventListener("input", multiplySalade);
function multiplySalade() {
  let one = parseFloat(userSaladeSaison.value) || 0;
  let saladesaison = parseFloat(one * pommedeterrecc).toFixed(2);
  scoreSaladeSaison.innerHTML = saladesaison;
  totAlim()
}

// field salade sous serre
let userSaladeSs = document.getElementById('userSaladeSs');
const saladesscc = 11.05
const scoreSaladeSs = document.getElementById('scoreSaladeSs');
userSaladeSs.addEventListener("input", multiplySaladeSs);
function multiplySaladeSs() {
  let one = parseFloat(userSaladeSs.value) || 0;
  let saladeSs = parseFloat(one * saladesscc).toFixed(2);
  scoreSaladeSs.innerHTML = saladeSs;
  totAlim()
}

// field tomates fr
let userTomates = document.getElementById('userTomates');
const tomatesscc = 0.177
const scoreTomates = document.getElementById('scoreTomates');
userTomates.addEventListener("input", multiplyTomates);
function multiplyTomates() {
  let one = parseFloat(userTomates.value) || 0;
  let tomates = parseFloat(one * tomatesscc).toFixed(2);
  scoreTomates.innerHTML = tomates;
  totAlim()
}

// field tomates frss
let userTomatesFRss = document.getElementById('userTomatesFRss');
const tomatesFRsscc = 2.23
const scoreTomatesFRss = document.getElementById('scoreTomatesFRss');
userTomatesFRss.addEventListener("input", multiplyTomatesFRss);
function multiplyTomatesFRss() {
  let one = parseFloat(userTomatesFRss.value) || 0;
  let tomates = parseFloat(one * tomatesFRsscc).toFixed(2);
  scoreTomatesFRss.innerHTML = tomates;
  totAlim()
}


// energie
// field electricité
let userElectricite = document.getElementById('userElectricite');
const elecricitecc = 0.0571
let resultElectricite = document.getElementById('scoreelec');
userElectricite.addEventListener("input", multiplyElec);
function multiplyElec() {
  let one = parseFloat(userElectricite.value) || 0;
  let cc = parseFloat(one * elecricitecc).toFixed(2);
  resultElectricite.innerHTML =  cc;
  totAlim()
};
// Autre valeur
// Autres moyens de déplacement
// voitur
