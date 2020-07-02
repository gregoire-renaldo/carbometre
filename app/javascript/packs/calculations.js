// total

//total by fields


// alimentaire
// field ble
let userBle = document.getElementById('userBle');
const blecc = 0.439
const resultBle = document.getElementById('scoreble');
userBle.addEventListener("input", multiplyBle);
function multiplyBle() {
  let one = parseFloat(userBle.value) || 0;
  let ccble = one * blecc;
  resultBle.innerHTML = ccble;
}

// field carotte
let userCarotte = document.getElementById('userCarotte');
const carottecc = 0.0706
const resultCarotte = document.getElementById('scoreCarotte');
userCarotte.addEventListener("input", multiplyCarotte);
function multiplyCarotte() {
  let one = parseFloat(userCarotte.value) || 0;
  let cccarotte = one * carottecc;
  resultCarotte.innerHTML = cccarotte;
}

// field riz
let userRiz = document.getElementById('userRiz');
const rizcc = 3.59
const resultRiz = document.getElementById('scoreRiz');
userRiz.addEventListener("input", multiplyRiz);
function multiplyRiz() {
  let one = parseFloat(userRiz.value) || 0;
  let ccriz = one * rizcc;
  resultRiz.innerHTML = ccriz;
}

// field pomme de terre fr
let userPommeDeTerre = document.getElementById('userPommeDeTerre');
const pommedeterrecc = 0.0861
const resultPommedeterre = document.getElementById('scorePommeDeTerre');
userPommeDeTerre.addEventListener("input", multiplyPatate);
function multiplyPatate() {
  let one = parseFloat(userPommeDeTerre.value) || 0;
  let pommedeterre = one * pommedeterrecc;
  resultPommedeterre.innerHTML = pommedeterre;
}

// energie
// field electricité
let userElectricite = document.getElementById('userElectricite');
const elecricitecc = 0.0571
let resultElectricite = document.getElementById('scoreelec');
userElectricite.addEventListener("input", multiplyElec);
function multiplyElec() {
  let one = parseFloat(userElectricite.value) || 0;
  let cc = one * elecricitecc;
  resultElectricite.innerHTML =  cc;
};
// Autre valeur
// Autres moyens de déplacement
// voitur
